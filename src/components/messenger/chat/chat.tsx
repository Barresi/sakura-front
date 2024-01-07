import arrow from '@assets/ui/arrow.svg'
import MessageInput from '@src/components/messenger/message-input/message-input'
import UserAvatar from '@src/components/ui/avatar/avatar'
import {
  GET_HISTORY_EVENT,
  GET_MESSAGE_EVENT,
  JOIN_CHAT_EVENT,
  LEAVE_CHAT_EVENT,
  SEND_MESSAGE_EVENT
} from '@src/context/socket-context/socket-context'
import { useSocket } from '@src/context/socket-context/useSocket'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers } from '@src/store/reducers/friends/selectors'
import { getUserChatsThunk } from '@src/store/reducers/messenger/async-thunks'
import { selectMessengerUserChats } from '@src/store/reducers/messenger/selectors'
import { selectUser } from '@src/store/reducers/profileInfo/selectors'
import { type IMessage } from '@src/types/api'
import {
  groupChatMessagesByDate,
  type IFormattedMessages
} from '@src/utils/messenger/other'
import { parseDateToMonth } from '@src/utils/utils'
import { Fragment, useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import Message from '../message/message'

const Chat: FC = () => {
  const container = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  // Флаг для отрисовки только одного блока новых сообщений
  let isRendered = false

  // Эта логика нужна чтобы найти объект друга, с которым у вас есть чат
  const chatId = useParams()
  const { id, firstName, lastName } = useAppSelector(selectUser)
  const allUsers = useAppSelector(selectAllUsers)
  const userChats = useAppSelector(selectMessengerUserChats)
  const currentChat = userChats.find((item) => item.chatId === chatId.id)
  const friendId = currentChat?.participants.find((item) => item.id !== id)?.id
  const friend = allUsers.find((item) => item.id === friendId)

  const [chatMessages, setChatMessages] = useState<IMessage[]>([])
  const [formattedMessages, setFormattedMessages] = useState<IFormattedMessages[]>([])

  const { socket } = useSocket()

  const sendMessage = (message: string): void => {
    if (!socket) return
    socket.emit(SEND_MESSAGE_EVENT, {
      userId: id,
      message,
      chatId: chatId.id,
      socketId: socket.id
    })
  }
  const getMessage = (message: IMessage): void => {
    setChatMessages((prev) => [...prev, message])
    // Нужен для обновления последнего сообщения в user chats
    dispatch(getUserChatsThunk())
  }
  const getHistory = (history: IMessage[]): void => {
    setChatMessages(history)
    // Нужен для обновления счетчика прочитанных сообщений в user chats
    dispatch(getUserChatsThunk())
  }

  useEffect(() => {
    if (!socket) return
    socket.emit(JOIN_CHAT_EVENT, chatId.id)
    return () => {
      socket.emit(LEAVE_CHAT_EVENT, chatId.id)
    }
  }, [chatId, socket])

  useEffect(() => {
    if (!socket) return
    socket.on(GET_MESSAGE_EVENT, getMessage)
    socket.on(GET_HISTORY_EVENT, getHistory)
    return () => {
      socket.off(GET_HISTORY_EVENT, getHistory)
      socket.off(GET_MESSAGE_EVENT, getMessage)
    }
  }, [socket])

  useEffect(() => {
    setFormattedMessages(groupChatMessagesByDate(chatMessages))
  }, [chatMessages])

  useEffect(() => {
    if (container.current) container.current.scrollTop = container.current.scrollHeight
  }, [formattedMessages])

  // Может стоит вынести эти функции в отдельный файл, к примеру, renders?
  const renderMessages = (value: IMessage, ind: number): ReactNode => {
    const { text, senderId, createdAt } = value
    const isMyMessage = senderId === id
    return (
      <Message
        text={text}
        date={createdAt}
        my={isMyMessage}
        key={ind}
        firstName={isMyMessage ? firstName : friend?.firstName}
        lastName={isMyMessage ? lastName : friend?.lastName}
      />
    )
  }

  const renderNewMessagesBlock = (): ReactNode => {
    if (!isRendered) {
      isRendered = true

      return (
        <span className='text-center my-4 text-signalBlack dark:text-darkGray'>
          Новые сообщения
        </span>
      )
    }
  }

  return (
    <div className='flex flex-col flex-auto w-[65%] relative h-[100%] bg-white dark:bg-grayBlue rounded-[10px] xxl:rounded-r-[10px] xxl:rounded-l-[0px]'>
      <div className='absolute left-0 right-0 top-0 h-[80px] border-b border-smokyWhite dark:border-cadet px-[20px] lg:px-[30px] py-[20px] flex justify-between items-center z-10 bg-white dark:bg-grayBlue rounded-t-[10px]'>
        <div className='text-lightGray dark:text-ghostlyWhite text-[20px] flex gap-[10px]'>
          <Link
            to='/main/messenger'
            className='flex justify-center items-center px-[10px]'
          >
            <img src={arrow} alt='arrow' className='w-[20px] h-[20px]' />
          </Link>
          <div className='flex flex-col md:flex-row md:gap-[10px]'>
            <span className='font-bold text-xl text-signalBlack dark:text-darkWhite'>{`${friend?.firstName} ${friend?.lastName}`}</span>
          </div>
        </div>

        <UserAvatar />
      </div>
      <div
        ref={container}
        className='h-[100%] mt-[80px] flex flex-col overflow-auto mb-[77px] scrollbar-none'
      >
        {formattedMessages.map(({ date, messages }) => {
          const readMessagesChats = messages.filter(
            (item) => item.read || item.senderId === id
          )
          const unreadMessagesChats = messages.filter(
            (item) => !item.read && item.senderId !== id
          )

          return (
            <Fragment key={date}>
              <span className='text-center my-4 text-signalBlack dark:text-darkGray'>
                {parseDateToMonth(date)}
              </span>

              {readMessagesChats.map(renderMessages)}

              {!!unreadMessagesChats.length && renderNewMessagesBlock()}

              {unreadMessagesChats.map(renderMessages)}
            </Fragment>
          )
        })}
      </div>
      <div className='absolute bottom-0 right-5 left-5'>
        <MessageInput sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default Chat

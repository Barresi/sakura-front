import { SocketEvents } from '@app/providers/socket-context/lib/socket-context'
import { useSocket } from '@app/providers/socket-context/lib/useSocket'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { parseDateToMonth } from '@shared/lib/parse-date'
import { type IMessage } from '@shared/lib/types/api'
import { InputSendMessage } from '@shared/ui/input-send-message'
import { UserAvatar } from '@shared/ui/user-avatar'
import { selectAllUsers } from '@store/reducers/friends/selectors'
import { getUserChatsThunk } from '@store/reducers/messenger/async-thunks'
import { selectMessengerUserChats } from '@store/reducers/messenger/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { Fragment, useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  addMessageInGroupedMessagesByDate,
  groupChatMessagesByDate,
  type IFormattedMessages
} from '../lib/group-chat-messages'
import { Message } from './message/message'

import arrow from '@assets/ui/arrow.svg'
import { AppRoutes } from '@shared/lib/types/routes'

const Chat: FC = () => {
  const {
    JOIN_CHAT_EVENT,
    LEAVE_CHAT_EVENT,
    SEND_MESSAGE_EVENT,
    GET_MESSAGE_EVENT,
    GET_HISTORY_EVENT
  } = SocketEvents
  const container = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  // Флаг для отрисовки только одного блока новых сообщений
  let isRenderedBlockNewMessages = false

  // Эта логика нужна чтобы найти объект друга, с которым у вас есть чат
  const chatId = useParams()
  const user = useAppSelector(selectUser)
  const allUsers = useAppSelector(selectAllUsers)
  const userChats = useAppSelector(selectMessengerUserChats)
  const currentChat = userChats.find((item) => item.chatId === chatId.id)
  const friendId = currentChat?.participants.find((item) => item.id !== user?.id)?.id
  const friend = allUsers.find((item) => item.id === friendId)

  const [formattedMessages, setFormattedMessages] = useState<IFormattedMessages[]>([])

  const { socket } = useSocket()

  const sendMessage = (message: string): void => {
    if (!socket) return
    socket.emit(SEND_MESSAGE_EVENT, {
      userId: user?.id,
      message,
      chatId: chatId.id,
      socketId: socket.id
    })
  }
  const getMessage = (message: IMessage): void => {
    setFormattedMessages((prev) => addMessageInGroupedMessagesByDate(prev, message))
    // Нужен для обновления последнего сообщения в user chats
    dispatch(getUserChatsThunk())
  }
  const getHistory = (history: IMessage[]): void => {
    setFormattedMessages(groupChatMessagesByDate(history))
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
    if (container.current) container.current.scrollTop = container.current.scrollHeight
  }, [formattedMessages])

  const renderMessages = (value: IMessage, ind: number): ReactNode => {
    const { text, senderId, createdAt, read } = value
    const isMyMessage = senderId === user?.id
    return (
      <>
        {!read && senderId !== user?.id && renderNewMessagesBlock()}
        <Message
          text={text}
          date={createdAt}
          my={isMyMessage}
          key={ind}
          firstName={isMyMessage ? user?.firstName : friend?.firstName}
          lastName={isMyMessage ? user?.lastName : friend?.lastName}
        />
      </>
    )
  }

  const renderNewMessagesBlock = (): ReactNode => {
    if (!isRenderedBlockNewMessages) {
      isRenderedBlockNewMessages = true
      return (
        <span className='text-center my-4 text-signalBlack dark:text-darkGray'>
          Новые сообщения
        </span>
      )
    }
  }

  return (
    <div className='fixed left-0 right-0 top-0 bottom-0 z-50 lg:z-0 w-[100vw] flex flex-col flex-auto md:w-[65%] md:relative h-[100%] bg-white dark:bg-grayBlue rounded-0 md:rounded-[10px] xxl:rounded-r-[10px] xxl:rounded-l-[0px]'>
      <div className='absolute left-0 right-0 top-0 h-[80px] border-b border-smokyWhite dark:border-cadet px-[20px] lg:px-[30px] py-[20px] flex justify-between items-center z-10 bg-white dark:bg-grayBlue rounded-t-[10px] text-[20px] text-lightGray dark:text-ghostlyWhite gap-[10px]'>
        <Link
          to={AppRoutes.MESSENGER}
          className='flex justify-center items-center px-[10px] w-10 h-10 xxl:pointer-events-none'
        >
          <img src={arrow} alt='arrow' className='w-[20px] h-[20px] xxl:hidden ' />
        </Link>
        <div className='flex flex-col md:flex-row md:gap-[10px]'>
          <span className='font-bold text-xl text-signalBlack dark:text-darkWhite'>{`${friend?.firstName} ${friend?.lastName}`}</span>
        </div>

        <UserAvatar />
      </div>
      <div
        ref={container}
        className='h-[100%] mt-[80px] flex flex-col overflow-auto overflow-x-hidden mb-[50px] md:mb-[70px] xxl:mb-[90px] scrollbar-none bg-body dark:bg-bodyDark md:bg-white md:dark:bg-grayBlue'
      >
        {formattedMessages.map(({ date, messages }) => {
          return (
            <Fragment key={date}>
              <span className='text-center my-4 text-signalBlack dark:text-darkGray'>
                {parseDateToMonth(date)}
              </span>
              {messages.map(renderMessages)}
            </Fragment>
          )
        })}
      </div>
      <div className='fixed md:absolute bottom-0 right-0 left-0 md:right-5 md:left-5 md:mb-5'>
        <InputSendMessage
          placeholder='Написать сообщение...'
          sendMessage={sendMessage}
          className='h-[50px] xxl:h-[70px] border-0 md:border'
        />
      </div>
    </div>
  )
}

export { Chat }

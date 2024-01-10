import { type FC, useEffect } from 'react'

import { userInfoThunk } from './store/reducers/profileInfo/async-thunks'
import { useSocket } from './providers/socket-context/lib/useSocket'
import {
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk
} from './store/reducers/friends/async-thunks'
import { getUserChatsThunk } from './store/reducers/messenger/async-thunks'
import { getUserNotificationsThunk } from './store/reducers/notifications/async-thunks'
import { SocketEvents } from './providers/socket-context'
import { AppRouter } from './router'

import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { NotificationTypeEnum } from '@shared/lib/types/api'
import { Toaster, useToast } from '@widgets/toaster'

interface payloadNtfFnc {
  friendId: string
  notificationId: string
}
interface payloadNtfFncGetMessage {
  chatId: string
  senderId: string
  text: string
  createdAt: string
  updatedAt: string
}

const App: FC = () => {
  const dispatch = useAppDispatch()
  const { socket } = useSocket()
  const { toast } = useToast()

  const getNtfSendFriend = (payload: payloadNtfFnc): void => {
    const { friendId } = payload

    toast({
      title: 'Новое уведомление',
      notificationType: NotificationTypeEnum.sendFriendRequest,
      userId: friendId
    })
    dispatch(getReceivedThunk())
    dispatch(getUserNotificationsThunk())
  }
  const getNtfAcceptFriend = (payload: payloadNtfFnc): void => {
    const { friendId } = payload

    toast({
      title: 'Новое уведомление',
      notificationType: NotificationTypeEnum.acceptFriendRequest,
      userId: friendId
    })
    dispatch(getFriendsThunk())
    dispatch(getSendedThunk())
    dispatch(getUserNotificationsThunk())
  }
  const getNtfRejectFriend = (payload: payloadNtfFnc): void => {
    const { friendId } = payload

    toast({
      title: 'Новое уведомление',
      notificationType: NotificationTypeEnum.rejectFriend,
      userId: friendId
    })
    dispatch(getSendedThunk())
    dispatch(getUserNotificationsThunk())
  }
  const getNtfGetMessage = (payload: payloadNtfFncGetMessage): void => {
    const { senderId } = payload

    toast({
      title: 'Новое уведомление',
      notificationType: NotificationTypeEnum.getMessage,
      userId: senderId
    })
    dispatch(getUserChatsThunk())
  }

  useEffect(() => {
    dispatch(userInfoThunk())
  }, [])
  useEffect(() => {
    if (!socket) return
    socket.on(SocketEvents.NTF_USER_SEND_FRIEND_EVENT, getNtfSendFriend)
    socket.on(SocketEvents.NTF_USER_ACCEPT_FRIEND_EVENT, getNtfAcceptFriend)
    socket.on(SocketEvents.NTF_USER_REJECT_FRIEND_EVENT, getNtfRejectFriend)
    socket.on(SocketEvents.NTF_GET_MESSAGE_EVENT, getNtfGetMessage)
    return () => {
      socket.off(SocketEvents.NTF_USER_SEND_FRIEND_EVENT, getNtfSendFriend)
      socket.off(SocketEvents.NTF_USER_ACCEPT_FRIEND_EVENT, getNtfAcceptFriend)
      socket.off(SocketEvents.NTF_USER_REJECT_FRIEND_EVENT, getNtfRejectFriend)
      socket.off(SocketEvents.NTF_GET_MESSAGE_EVENT, getNtfGetMessage)
    }
  }, [socket])
  return (
    // relative нужен для компонента Sheet
    <div className='relative'>
      <Toaster />
      <AppRouter />
    </div>
  )
}

export default App

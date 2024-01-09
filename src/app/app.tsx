import { type FC, useEffect } from 'react'
import { useAppDispatch } from '@src/shared/lib/hooks/store-hooks'
import { userInfoThunk } from '@src/app/store/reducers/profileInfo/async-thunks'
import Toaster from '../widgets/toaster/ui/toaster'
import { useSocket } from '@src/app/providers/socket-context/lib/useSocket'
import { useToast } from '../widgets/toaster/lib/use-toast'
import {
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk
} from '@src/app/store/reducers/friends/async-thunks'
import { getUserChatsThunk } from '@src/app/store/reducers/messenger/async-thunks'
import { getUserNotificationsThunk } from '@src/app/store/reducers/notifications/async-thunks'
import { NotificationTypeEnum } from '@src/shared/lib/types/api'
import AppRouter from './router/ui/app-router'
import { SocketEvents } from './providers/socket-context'

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

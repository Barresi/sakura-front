import { type FC, useEffect } from 'react'
import { useAppDispatch } from '@src/shared/lib/hooks/store-hooks'
import { userInfoThunk } from '@src/app/store/reducers/profileInfo/async-thunks'
import Toaster from '../widgets/toaster/ui/toaster/toaster'
import { useSocket } from '@src/app/providers/socket-context/useSocket'
import { useToast } from '../widgets/toaster/lib/use-toast'
import {
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk
} from '@src/app/store/reducers/friends/async-thunks'
import {
  NTF_GET_MESSAGE_EVENT,
  NTF_USER_ACCEPT_FRIEND_EVENT,
  NTF_USER_REJECT_FRIEND_EVENT,
  NTF_USER_SEND_FRIEND_EVENT
} from '@src/app/providers/socket-context/socket-context'
import { getUserChatsThunk } from '@src/app/store/reducers/messenger/async-thunks'
import { getUserNotificationsThunk } from '@src/app/store/reducers/notifications/async-thunks'
import { NotificationTypeEnum } from '@src/shared/lib/types/api'
import AppRouter from './router/ui/app-router'

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
    socket.on(NTF_USER_SEND_FRIEND_EVENT, getNtfSendFriend)
    socket.on(NTF_USER_ACCEPT_FRIEND_EVENT, getNtfAcceptFriend)
    socket.on(NTF_USER_REJECT_FRIEND_EVENT, getNtfRejectFriend)
    socket.on(NTF_GET_MESSAGE_EVENT, getNtfGetMessage)
    return () => {
      socket.off(NTF_USER_SEND_FRIEND_EVENT, getNtfSendFriend)
      socket.off(NTF_USER_ACCEPT_FRIEND_EVENT, getNtfAcceptFriend)
      socket.off(NTF_USER_REJECT_FRIEND_EVENT, getNtfRejectFriend)
      socket.off(NTF_GET_MESSAGE_EVENT, getNtfGetMessage)
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

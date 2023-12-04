import LoginPage from '@src/pages/login/login'
import RegistrationPage from '@src/pages/registration/registration'
import { type FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRouteElement from '../protected-route-element/protected-route-element'
import MainPage from '@src/pages/main/main'
import NotFoundPage from '@src/pages/not-found-page/not-found-page'
import FriendsPage from '@src/pages/friends/friends'
import { useAppDispatch } from '@src/hooks/store-hooks'
import { userInfoThunk } from '@src/store/reducers/profileInfo/async-thunks'
import MessengerPage from '@src/pages/messenger/messenger'
import Chat from '../messenger/chat/chat'
import Toaster from '../ui/toast/toaster'
import { useSocket } from '@src/context/socket-context/useSocket'
import { useToast } from '../ui/toast/use-toast'
import {
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk
} from '@src/store/reducers/friends/async-thunks'
import {
  NTF_GET_MESSAGE_EVENT,
  NTF_USER_ACCEPT_FRIEND_EVENT,
  NTF_USER_REJECT_FRIEND_EVENT,
  NTF_USER_SEND_FRIEND_EVENT
} from '@src/context/socket-context/socket-context'
import { getUserChatsThunk } from '@src/store/reducers/messenger/async-thunks'
import { getUserNotificationsThunk } from '@src/store/reducers/notifications/async-thunks'
import { NotificationTypeEnum } from '@src/types/api'

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
      notificationType: NotificationTypeEnum.sendFriend,
      userId: friendId
    })
    dispatch(getReceivedThunk())
    dispatch(getUserNotificationsThunk())
  }
  const getNtfAcceptFriend = (payload: payloadNtfFnc): void => {
    const { friendId } = payload

    toast({
      title: 'Новое уведомление',
      notificationType: NotificationTypeEnum.acceptFriend,
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
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRouteElement protectedPageType='auth' element={<LoginPage />} />
          }
        />
        <Route
          path='/registration'
          element={
            <ProtectedRouteElement
              protectedPageType='auth'
              element={<RegistrationPage />}
            />
          }
        />

        <Route
          path='/main'
          element={
            <ProtectedRouteElement protectedPageType='main' element={<MainPage />} />
          }
        >
          <Route path='messenger' element={<MessengerPage />}>
            <Route path=':id' element={<Chat />} />
          </Route>
          <Route path='friends' element={<FriendsPage />} />
          <Route path='*' element={<NotFoundPage type='inside' />} />
        </Route>

        <Route path='*' element={<NotFoundPage type='outside' />} />
      </Routes>
    </div>
  )
}

export default App

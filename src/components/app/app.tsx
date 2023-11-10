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

const App: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(userInfoThunk())
  }, [dispatch])
  return (
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
  )
}

export default App

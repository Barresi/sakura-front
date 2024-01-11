import { FriendsPage } from '@pages/page-friends'
import { LoginPage } from '@pages/page-login'
import { MainPage } from '@pages/page-main'
import { MessengerPage } from '@pages/page-messenger'
import { NotFoundPage } from '@pages/page-not-found'
import { RegistrationPage } from '@pages/page-registration'
import { Chat } from '@widgets/chat'
import { Suspense, type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRouteElement from './protected-route-element'

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>1</div>}>
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
    </Suspense>
  )
}

export default AppRouter

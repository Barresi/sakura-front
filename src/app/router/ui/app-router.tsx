import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRouteElement from './protected-route-element'
import { LoginPage } from '@pages/page-login'
import { RegistrationPage } from '@pages/page-registration'
import { MainPage } from '@pages/page-main'
import { MessengerPage } from '@pages/page-messenger'
import { Chat } from '@widgets/chat'
import { FriendsPage } from '@pages/page-friends'
import { NotFoundPage } from '@pages/page-not-found'

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

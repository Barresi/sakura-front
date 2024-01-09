import ProtectedRouteElement from '@src/app/router/ui/protected-route-element'
import FriendsPage from '@src/pages/page-friends/ui/friends-page'
import LoginPage from '@src/pages/page-login/ui/login'
import MainPage from '@src/pages/page-main/ui/main'
import MessengerPage from '@src/pages/page-messenger/ui/messenger'
import NotFoundPage from '@src/pages/page-not-found/ui/not-found-page'
import RegistrationPage from '@src/pages/page-registration/ui/registration'
import Chat from '@src/widgets/chat/ui/chat'
import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

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

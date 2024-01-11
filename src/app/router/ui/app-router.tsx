import { PageFriends } from '@pages/page-friends'
import { PageLogin } from '@pages/page-login'
import { PageMain } from '@pages/page-main'
import { PageMessenger } from '@pages/page-messenger'
import { PageNotFound } from '@pages/page-not-found'
import { PageRegistration } from '@pages/page-registration'
import { Chat } from '@widgets/chat'
import { Suspense, type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRouteElement } from './protected-route-element'

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>1</div>}>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRouteElement protectedPageType='auth' element={<PageLogin />} />
          }
        />
        <Route
          path='/registration'
          element={
            <ProtectedRouteElement
              protectedPageType='auth'
              element={<PageRegistration />}
            />
          }
        />

        <Route
          path='/main'
          element={
            <ProtectedRouteElement protectedPageType='main' element={<PageMain />} />
          }
        >
          <Route path='messenger' element={<PageMessenger />}>
            <Route path=':id' element={<Chat />} />
          </Route>
          <Route path='friends' element={<PageFriends />} />
          <Route path='*' element={<PageNotFound type='inside' />} />
        </Route>

        <Route path='*' element={<PageNotFound type='outside' />} />
      </Routes>
    </Suspense>
  )
}

export { AppRouter }

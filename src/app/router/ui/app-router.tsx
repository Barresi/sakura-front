import { PageFriends } from '@pages/page-friends'
import { PageLogin } from '@pages/page-login'
import { PageMain } from '@pages/page-main'
import { PageMessenger } from '@pages/page-messenger'
import { PageNotFound } from '@pages/page-not-found'
import { PageProfile } from '@pages/page-profile'
import { PageRegistration } from '@pages/page-registration'
import { PageSettings } from '@pages/page-settings'
import { Chat } from '@widgets/chat'
import { EditAccount } from '@widgets/edit-account'
import { EditSecurity } from '@widgets/edit-security'
import { Suspense, type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRouteElement } from './protected-route-element'

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <Route path='profile' element={<PageProfile />} />

          <Route path='messenger' element={<PageMessenger />}>
            <Route path=':id' element={<Chat />} />
          </Route>

          <Route path='friends' element={<PageFriends />} />

          <Route path='settings' element={<PageSettings />}>
            <Route index element={<EditAccount />} />
            <Route path='security' element={<EditSecurity />} />
          </Route>

          <Route path='*' element={<PageNotFound type='inside' />} />
        </Route>

        <Route path='*' element={<PageNotFound type='outside' />} />
      </Routes>
    </Suspense>
  )
}

export { AppRouter }

import { PageFriends } from '@pages/page-friends'
import { PageLogin } from '@pages/page-login'
import { PageMain } from '@pages/page-main'
import { PageMessenger } from '@pages/page-messenger'
import { PageNews } from '@pages/page-news'
import { PageNotFound } from '@pages/page-not-found'
import { PageProfile } from '@pages/page-profile'
import { PageRegistration } from '@pages/page-registration'
import { PageSettings } from '@pages/page-settings'
import { AppRoutes } from '@shared/lib/types/routes'
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
          path={AppRoutes.LOGIN}
          element={
            <ProtectedRouteElement protectedPageType='auth' element={<PageLogin />} />
          }
        />
        <Route
          path={AppRoutes.REGISTRATION}
          element={
            <ProtectedRouteElement
              protectedPageType='auth'
              element={<PageRegistration />}
            />
          }
        />

        <Route
          path={AppRoutes.MAIN}
          element={
            <ProtectedRouteElement protectedPageType='main' element={<PageMain />} />
          }
        >
          <Route path={AppRoutes.PROFILE} element={<PageProfile />} />

          <Route path={AppRoutes.NEWS} element={<PageNews />} />

          <Route path={AppRoutes.MESSENGER} element={<PageMessenger />}>
            <Route path={AppRoutes.CHAT} element={<Chat />} />
          </Route>

          <Route path={AppRoutes.FRIENDS} element={<PageFriends />} />

          <Route path={AppRoutes.SETTINGS} element={<PageSettings />}>
            <Route index element={<EditAccount />} />
            <Route path={AppRoutes.SECURITY} element={<EditSecurity />} />
          </Route>

          <Route path='*' element={<PageNotFound type='inside' />} />
        </Route>

        <Route path='*' element={<PageNotFound type='outside' />} />
      </Routes>
    </Suspense>
  )
}

export { AppRouter }

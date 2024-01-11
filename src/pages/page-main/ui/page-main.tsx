import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { AuthStatus } from '@shared/lib/types/api'
import {
  getAllUsersThunk,
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk
} from '@store/reducers/friends/async-thunks'
import { getUserChatsThunk } from '@store/reducers/messenger/async-thunks'
import { getUserNotificationsThunk } from '@store/reducers/notifications/async-thunks'
import { selectUserStatus } from '@store/reducers/profileInfo/selectors'
import { Header } from '@widgets/header'
import { MobileNav } from '@widgets/mobile-nav'
import { Sidebar } from '@widgets/sidebar'
import { useEffect, type FC } from 'react'
import { Outlet } from 'react-router'

const PageMain: FC = () => {
  const isMobile = useWindowSize(1024)
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectUserStatus)
  useEffect(() => {
    if (status === AuthStatus.authorized) {
      dispatch(getUserChatsThunk()).then(() => {
        dispatch(getReceivedThunk())
        dispatch(getSendedThunk())
        dispatch(getFriendsThunk())
        dispatch(getAllUsersThunk())
        dispatch(getUserNotificationsThunk())
      })
    }
  }, [status])
  return (
    <div className='p-0  lg:px-5 lg:pt-5 flex max-w-[1920px] mx-auto relative'>
      {!isMobile && <Sidebar />}
      <div className=' flex-auto lg:ml-[310px] flex flex-col gap-[20px]'>
        <Header />
        <div className='pb-10 md:pb-14 lg:pb-0'>
          <Outlet />
        </div>
      </div>
      {isMobile && <MobileNav />}
    </div>
  )
}

export { PageMain }

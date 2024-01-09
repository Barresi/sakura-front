import Sidebar from '@src/widgets/sidebar/sidebar'
import MobileNav from '@src/widgets/mobile-nav/mobile-nav'
import Header from '@src/widgets/header/header'
import { useEffect, type FC } from 'react'
import { Outlet } from 'react-router'
import { useWindowSize } from '@src/shared/lib/hooks/useWindowSize'
import {
  getAllUsersThunk,
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk
} from '@src/app/store/reducers/friends/async-thunks'
import { useAppDispatch, useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import { selectUserStatus } from '@src/app/store/reducers/profileInfo/selectors'
import { AuthStatus } from '@src/shared/lib/types/api'
import { getUserChatsThunk } from '@src/app/store/reducers/messenger/async-thunks'
import { getUserNotificationsThunk } from '@src/app/store/reducers/notifications/async-thunks'

const MainPage: FC = () => {
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

export default MainPage

import Sidebar from '@src/components/sidebar/sidebar'
import MobileNav from '@src/components/mobile-nav/mobile-nav'
import Header from '@src/components/ui/header/header'
import { useEffect, type FC } from 'react'
import { Outlet } from 'react-router'
import { useWindowSize } from '@src/hooks/useWindowSize'
import {
  getAllUsersThunk,
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk
} from '@src/store/reducers/friends/async-thunks'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectUserStatus } from '@src/store/reducers/profileInfo/selectors'
import { AuthStatus } from '@src/types/api'
import { getUserChatsThunk } from '@src/store/reducers/messenger/async-thunks'
import { getUserNotificationsThunk } from '@src/store/reducers/notifications/async-thunks'

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
        <Outlet />
      </div>
      {isMobile && <MobileNav />}
    </div>
  )
}

export default MainPage

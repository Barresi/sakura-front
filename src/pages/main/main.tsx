import Sidebar from '@src/components/sidebar/sidebar'
import MobileNav from '@src/components/mobile-nav/mobile-nav'
import Header from '@src/components/ui/header/header'
import { type FC, useEffect } from 'react'
import { Outlet } from 'react-router'
import { useWindowSize } from '@src/hooks/useWindowSize'
import { getReceivedThunk } from '@src/store/reducers/friends/async-thunks'
import { useAppDispatch } from '@src/hooks/store-hooks'

const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const isMobile = useWindowSize(1024)

  useEffect(() => {
    dispatch(getReceivedThunk())
  }, [dispatch])

  return (
    <div className='p-0  lg:px-5 lg:pt-5 flex max-w-[1920px] mx-auto relative'>
      {!isMobile && <Sidebar />}
      <div className=' flex-auto lg:ml-[310px] flex flex-col'>
        <Header />
        <Outlet />
      </div>
      {isMobile && <MobileNav />}
    </div>
  )
}

export default MainPage

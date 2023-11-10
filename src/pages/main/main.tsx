import Sidebar from '@src/components/sidebar/sidebar'
import MobileNav from '@src/components/mobile-nav/mobile-nav'
import Header from '@src/components/ui/header/header'
import { type FC } from 'react'
import { Outlet } from 'react-router'
import { useWindowSize } from '@src/hooks/useWindowSize'

const MainPage: FC = () => {
  const isMobile = useWindowSize(1024)

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

import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { NavSettings } from './nav-settings/nav-settings'

const PageSettings: FC = () => {
  return (
    <div className='w-full flex flex-col xxl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] lg:mb-[20px] px-[20px] lg:px-0'>
      <NavSettings />
      <div className='list w-full xxl:w-2/3 bg-white dark:bg-grayBlue rounded-[10px] p-[20px] xxl:p-[30px]'>
        <Outlet />
      </div>
    </div>
  )
}
export { PageSettings }

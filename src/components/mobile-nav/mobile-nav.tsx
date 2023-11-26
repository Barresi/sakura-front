import { type FC } from 'react'
import NavButton from '../ui/button/nav-button/nav-button'
import { useLocation } from 'react-router-dom'
import { selectReceived } from '@src/store/reducers/friends/selectors'
import { useAppSelector } from '@src/hooks/store-hooks'

const MobileNav: FC = () => {
  const { pathname } = useLocation()
  const received = useAppSelector(selectReceived)
  return (
    <div
      className={`${
        pathname.includes('/main/messenger/') && pathname.length > 16 ? 'hidden' : 'flex'
      } w-full fixed bottom-0 left-0 flex items-center justify-between gap-[5px] lg:gap-[10px] bg-white dark:bg-grayBlue text-signalBlack dark:text-smokyWhite py-[10px] px-[10px] lg:px-[20px] rounded-tl-[10px] rounded-tr-[10px] z-[10000] border-t border-t-smokyWhite dark:border-t-cadet`}
    >
      <NavButton
        className='w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]'
        icon='user'
        to='profile'
      >
        Главная
      </NavButton>

      <NavButton
        className='w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]'
        icon='news'
        to='feed'
      >
        Новости
      </NavButton>

      <NavButton
        className='w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]'
        icon='message'
        to='messenger'
      >
        Мессенджер
      </NavButton>

      <NavButton
        className='w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]'
        icon='friends'
        to='friends'
        badge={received.length}
      >
        Друзья
      </NavButton>

      <NavButton
        className='w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]'
        icon='photos'
        to='photos'
      >
        Фотографии
      </NavButton>
    </div>
  )
}

export default MobileNav

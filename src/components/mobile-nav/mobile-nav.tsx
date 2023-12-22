import { type FC } from 'react'
import NavButton from '../ui/button/nav-button/nav-button'
import { useLocation } from 'react-router-dom'
import { selectReceived } from '@src/store/reducers/friends/selectors'
import { useAppSelector } from '@src/hooks/store-hooks'
import { selectMessengerUserChats } from '@src/store/reducers/messenger/selectors'

const MobileNav: FC = () => {
  const { pathname } = useLocation()
  const received = useAppSelector(selectReceived)
  const userChats = useAppSelector(selectMessengerUserChats)
  const totalUnreadMessages = userChats.reduce((acc, cur) => acc + cur.unread, 0)
  return (
    <div
      className={`${
        pathname.includes('/main/messenger/') && pathname.length > 16 ? 'hidden' : 'flex'
      } w-full fixed bottom-0 left-0 flex items-center justify-between lg:gap-[10px] bg-white dark:bg-grayBlue text-signalBlack dark:text-smokyWhite lg:px-[20px] rounded-tl-[10px] rounded-tr-[10px] z-[10000] border-t border-t-smokyWhite dark:border-t-cadet`}
    >
      <NavButton
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='user'
        to='profile'
      >
        Главная
      </NavButton>

      <NavButton
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='news'
        to='feed'
      >
        Новости
      </NavButton>

      <NavButton
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='message'
        to='messenger'
        badge={totalUnreadMessages}
      >
        Мессенджер
      </NavButton>

      <NavButton
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='friends'
        to='friends'
        badge={received.length}
      >
        Друзья
      </NavButton>

      <NavButton
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='photos'
        to='photos'
      >
        Фотографии
      </NavButton>
    </div>
  )
}

export default MobileNav

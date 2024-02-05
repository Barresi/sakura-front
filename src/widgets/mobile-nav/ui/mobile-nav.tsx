import { ButtonNav } from '@features/button-nav'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { selectReceived } from '@store/reducers/friends/selectors'
import { selectMessengerUserChats } from '@store/reducers/messenger/selectors'
import { type FC } from 'react'
import { useLocation } from 'react-router-dom'

const MobileNav: FC = () => {
  const { pathname } = useLocation()
  const received = useAppSelector(selectReceived)
  const userChats = useAppSelector(selectMessengerUserChats)
  const totalUnreadMessages = userChats.reduce((acc, cur) => acc + cur.unread, 0)
  return (
    <div
      className={`${
        pathname.includes('/main/messenger/') && pathname.length > 16 ? 'hidden' : 'flex'
      } w-full fixed bottom-0 left-0 items-center justify-between lg:gap-[10px] bg-white dark:bg-grayBlue text-signalBlack dark:text-smokyWhite lg:px-[20px] rounded-tl-[10px] rounded-tr-[10px] z-40 border-t border-t-smokyWhite dark:border-t-cadet`}
    >
      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='user'
        to='profile'
      >
        Главная
      </ButtonNav>

      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='news'
        to='feed'
      >
        Новости
      </ButtonNav>

      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='message'
        to='messenger'
        badge={totalUnreadMessages}
      >
        Мессенджер
      </ButtonNav>

      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='friends'
        to='friends'
        badge={received.length}
      >
        Друзья
      </ButtonNav>

      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='settingsRed'
        to='settings'
      >
        Настройки
      </ButtonNav>
    </div>
  )
}

export { MobileNav }

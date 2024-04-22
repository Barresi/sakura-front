import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { ButtonNav } from '@features/button-nav'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendTabs } from '@shared/lib/types/other'
import { AppRoutes } from '@shared/lib/types/routes'
import { selectReceived } from '@store/reducers/friends/selectors'
import { selectMessengerUserChats } from '@store/reducers/messenger/selectors'
import { type FC } from 'react'

const MobileNav: FC = () => {
  const user = useAppSelector(selectUser)
  const received = useAppSelector(selectReceived)
  const userChats = useAppSelector(selectMessengerUserChats)
  const totalUnreadMessages = userChats.reduce((acc, cur) => acc + cur.unread, 0)
  return (
    <div className='flex w-full fixed bottom-0 left-0 items-center justify-between lg:gap-[10px] bg-white dark:bg-grayBlue text-signalBlack dark:text-smokyWhite lg:px-[20px] rounded-tl-[10px] rounded-tr-[10px] z-10 border-t border-t-smokyWhite dark:border-t-cadet'>
      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='user'
        to={`users/${user?.id}`}
      >
        Главная
      </ButtonNav>

      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='news'
        to={AppRoutes.NEWS}
      >
        Новости
      </ButtonNav>

      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='message'
        to={AppRoutes.MESSENGER}
        badge={totalUnreadMessages}
      >
        Мессенджер
      </ButtonNav>

      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='friends'
        to={{ pathname: AppRoutes.FRIENDS, search: `usertype=${FriendTabs.FRIENDS}` }}
        badge={received.length}
      >
        Друзья
      </ButtonNav>

      <ButtonNav
        className='w-full h-full flex-col px-0 justify-center items-center text-center text-[12px] md:text-[14px]'
        icon='settings'
        to={AppRoutes.SETTINGS}
      >
        Настройки
      </ButtonNav>
    </div>
  )
}

export { MobileNav }

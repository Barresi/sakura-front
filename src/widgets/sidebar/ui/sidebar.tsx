import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { ButtonChangeTheme } from '@features/button-change-theme'
import { ButtonLogout } from '@features/button-logout'
import { ButtonNav } from '@features/button-nav'
import { ButtonSettings } from '@features/button-settings/ui/button-settings'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendTabs } from '@shared/lib/types/other'
import { AppRoutes } from '@shared/lib/types/routes'
import { ButtonSetting } from '@shared/ui/button-setting'
import { Logo } from '@shared/ui/logo'
import { selectReceived } from '@store/reducers/friends/selectors'
import { selectMessengerUserChats } from '@store/reducers/messenger/selectors'
import { type FC } from 'react'

const Sidebar: FC = () => {
  const user = useAppSelector(selectUser)
  const userChats = useAppSelector(selectMessengerUserChats)
  const received = useAppSelector(selectReceived)

  const totalUnreadMessages = userChats.reduce((acc, cur) => acc + cur.unread, 0)
  return (
    <div className='rounded-[10px] px-5 py-[30px] flex flex-col justify-between items-start w-[280px] bg-white dark:bg-grayBlue fixed top-5 bottom-5'>
      <div>
        <Logo />

        <div className='pt-[50px]'>
          <ButtonNav
            className='w-full justify-start gap-[10px]'
            icon='user'
            to={`users/${user?.id}`}
          >
            Моя страница
          </ButtonNav>

          <ButtonNav
            className='w-full justify-start gap-[10px]'
            icon='news'
            to={AppRoutes.NEWS}
          >
            Новости
          </ButtonNav>

          <ButtonNav
            className='w-full justify-start gap-[10px]'
            icon='message'
            to={AppRoutes.MESSENGER}
            badge={totalUnreadMessages}
          >
            Мессенджер
          </ButtonNav>

          <ButtonNav
            className='w-full justify-start gap-[10px]'
            icon='friends'
            to={{ pathname: AppRoutes.FRIENDS, search: `usertype=${FriendTabs.FRIENDS}` }}
            badge={received.length}
          >
            Друзья
          </ButtonNav>
        </div>
      </div>

      <div className='flex justify-between w-[100%]'>
        <ButtonLogout variant='icon' />
        <ButtonSetting icon='info' />
        <ButtonChangeTheme />
        <ButtonSettings />
      </div>
    </div>
  )
}

export { Sidebar }

import { useTheme } from '@app/providers/theme-context/lib/useTheme'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { ButtonNav } from '@shared/ui/button-nav'
import { ButtonSetting } from '@shared/ui/button-setting'
import { Logo } from '@shared/ui/logo'
import { selectReceived } from '@store/reducers/friends/selectors'
import { selectMessengerUserChats } from '@store/reducers/messenger/selectors'
import { logoutThunk } from '@store/reducers/profileInfo/async-thunks'
import { useToast } from '@widgets/toaster'
import { type FC } from 'react'

const Sidebar: FC = () => {
  const userChats = useAppSelector(selectMessengerUserChats)
  const received = useAppSelector(selectReceived)
  const dispatch = useAppDispatch()
  const { toggleTheme } = useTheme()
  const logoutHandler = async (): Promise<void> => {
    await dispatch(logoutThunk()).then((data) => {
      if (data.meta.requestStatus === 'fulfilled') {
        toast({
          title: 'Системное уведомление',
          description: 'Вы успешно вышли из своего аккаунта' as string
        })
      } else {
        toast({ title: 'Системное уведомление', description: data.payload as string })
      }
    })
  }
  const { toast } = useToast()
  const totalUnreadMessages = userChats.reduce((acc, cur) => acc + cur.unread, 0)
  return (
    <div className='rounded-[10px] px-5 py-[30px] flex flex-col justify-between items-start w-[280px] bg-white dark:bg-grayBlue fixed top-5 bottom-5'>
      <div>
        <Logo />

        <div className='pt-[50px]'>
          <ButtonNav className='w-full justify-start gap-[10px]' icon='user' to='profile'>
            Моя страница
          </ButtonNav>

          <ButtonNav className='w-full justify-start gap-[10px]' icon='news' to='feed'>
            Новости
          </ButtonNav>

          <ButtonNav
            className='w-full justify-start gap-[10px]'
            icon='message'
            to='messenger'
            badge={totalUnreadMessages}
          >
            Мессенджер
          </ButtonNav>

          <ButtonNav
            className='w-full justify-start gap-[10px]'
            icon='friends'
            to='friends'
            badge={received.length}
          >
            Друзья
          </ButtonNav>

          <ButtonNav
            className='w-full justify-start gap-[10px]'
            icon='photos'
            to='photos'
          >
            Фотографии
          </ButtonNav>
        </div>
      </div>

      <div className='flex justify-between w-[100%]'>
        <ButtonSetting icon='exit' onClick={logoutHandler} />
        <ButtonSetting icon='info' />
        <ButtonSetting icon='theme' onClick={toggleTheme} />
        <ButtonSetting icon='setting' />
      </div>
    </div>
  )
}

export { Sidebar }

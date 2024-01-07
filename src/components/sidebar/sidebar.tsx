import { type FC } from 'react'
import Logo from '../ui/logo/logo'
import NavButton from '../ui/button/nav-button/nav-button'
import SettingButton from '@src/components/ui/button/setting-button/setting-button'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { logoutThunk } from '@src/store/reducers/profileInfo/async-thunks'
import { useTheme } from '@src/context/theme-context/useTheme'
import { useToast } from '../ui/toast/use-toast'
import { selectReceived } from '@src/store/reducers/friends/selectors'
import { selectMessengerUserChats } from '@src/store/reducers/messenger/selectors'

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
          <NavButton className='w-full justify-start gap-[10px]' icon='user' to='profile'>
            Моя страница
          </NavButton>

          <NavButton className='w-full justify-start gap-[10px]' icon='news' to='feed'>
            Новости
          </NavButton>

          <NavButton
            className='w-full justify-start gap-[10px]'
            icon='message'
            to='messenger'
            badge={totalUnreadMessages}
          >
            Мессенджер
          </NavButton>

          <NavButton
            className='w-full justify-start gap-[10px]'
            icon='friends'
            to='friends'
            badge={received.length}
          >
            Друзья
          </NavButton>

          <NavButton
            className='w-full justify-start gap-[10px]'
            icon='photos'
            to='photos'
          >
            Фотографии
          </NavButton>
        </div>
      </div>

      <div className='flex justify-between w-[100%]'>
        <SettingButton icon='exit' onClick={logoutHandler} />
        <SettingButton icon='info' />
        <SettingButton icon='theme' onClick={toggleTheme} />
        <SettingButton icon='setting' />
      </div>
    </div>
  )
}

export default Sidebar

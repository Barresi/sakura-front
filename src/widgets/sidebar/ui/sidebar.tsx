import { useTheme } from '@src/app/providers/theme-context/lib/useTheme'
import { selectReceived } from '@src/app/store/reducers/friends/selectors'
import { logoutThunk } from '@src/app/store/reducers/profileInfo/async-thunks'
import { useAppDispatch, useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import SettingButton from '@src/shared/ui/button-setting/setting-button'
import { type FC } from 'react'
import ButtonNav from '../../../shared/ui/button-nav/button-nav'
import Logo from '../../../shared/ui/logo'
import { useToast } from '../../toaster/lib/use-toast'
import { selectMessenge } from /../../ shared / ui / button - navrs / messenger / selectors
'

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
        <SettingButton icon='exit' onClick={logoutHandler} />
        <SettingButton icon='info' />
        <SettingButton icon='theme' onClick={toggleTheme} />
        <SettingButton icon='setting' />
      </div>
    </div>
  )
}

export default Sidebar

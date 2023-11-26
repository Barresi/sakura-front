import { type FC } from 'react'
import Logo from '../ui/logo/logo'
import NavButton from '../ui/button/nav-button/nav-button'
import SettingButton from '@src/components/ui/button/setting-button/setting-button'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { logoutThunk } from '@src/store/reducers/profileInfo/async-thunks'
import { useTheme } from '@src/context/theme-context/useTheme'
import { useToast } from '../ui/toast/use-toast'
import { selectReceived } from '@src/store/reducers/friends/selectors'

const Sidebar: FC = () => {
  const received = useAppSelector(selectReceived)
  const dispatch = useAppDispatch()
  const { toggleTheme } = useTheme()
  const logoutHandler = async (): Promise<void> => {
    await dispatch(logoutThunk())
  }
  const { toast } = useToast()
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
        <SettingButton
          icon='info'
          onClick={() =>
            toast({
              description: 'Friday, February 10, 2023 at 5:57 PM'
            })
          }
        />
        <SettingButton icon='theme' onClick={toggleTheme} />
        <SettingButton icon='setting' />
      </div>
    </div>
  )
}

export default Sidebar

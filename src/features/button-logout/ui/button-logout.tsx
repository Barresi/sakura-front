import { logoutThunk } from '@app/store/reducers/profileInfo/async-thunks'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { ButtonSetting } from '@shared/ui/button-setting'
import { useToast } from '@widgets/toaster'
import { type FC } from 'react'

interface IButtonLogoutProps {
  classname?: string
  variant?: 'icon' | 'text'
}

const ButtonLogout: FC<IButtonLogoutProps> = ({ classname, variant = 'text' }) => {
  const dispatch = useAppDispatch()
  const { toast } = useToast()
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
  if (variant === 'text') {
    return (
      <Button
        variant='text'
        className={classname + ' text-darkLightGray dark:text-darkLightGray'}
        onClick={logoutHandler}
      >
        Выйти
      </Button>
    )
  }

  return <ButtonSetting icon='exit' onClick={logoutHandler} className={classname} />
}
export { ButtonLogout }

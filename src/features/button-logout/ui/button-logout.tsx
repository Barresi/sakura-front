import { logoutThunk } from '@app/store/reducers/profileInfo/async-thunks'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { ButtonSetting } from '@shared/ui/button-setting'
import { useToast } from '@widgets/toaster'
import { type FC } from 'react'

const ButtonLogout: FC = () => {
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
  return <ButtonSetting icon='exit' onClick={logoutHandler} />
}
export { ButtonLogout }

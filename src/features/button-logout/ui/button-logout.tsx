import { logoutThunk } from '@app/store/reducers/profileInfo/async-thunks'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { ButtonSetting } from '@shared/ui/button-setting'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@shared/ui/dialog'
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

  return (
    <Dialog>
      <DialogTrigger>
        {variant === 'text' ? (
          <Button
            type='button'
            variant='text'
            className={classname + ' text-darkLightGray dark:text-darkLightGray'}
          >
            Выйти
          </Button>
        ) : (
          <ButtonSetting icon='exit' className={classname} />
        )}
      </DialogTrigger>
      <DialogContent>
        {/* @ts-expect-error не рабочие пропсы у DialogHeader */}
        <DialogHeader>
          <DialogTitle>Вы уверены что хотите выйти из своего аккаунта?</DialogTitle>
        </DialogHeader>
        {/* @ts-expect-error не рабочие пропсы у DialogFooter */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='secondary'>Отменить</Button>
          </DialogClose>

          <Button variant='default' onClick={logoutHandler}>
            Да, выйти
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { ButtonLogout }

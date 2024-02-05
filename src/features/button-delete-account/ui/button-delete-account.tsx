import { deleteAccountThunk } from '@app/store/reducers/profileInfo/async-thunks'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { passwordRegExp } from '@shared/lib/reg-exp'
import { Button } from '@shared/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@shared/ui/dialog'
import { Input } from '@shared/ui/input'
import { useToast } from '@widgets/toaster'
import { type FC } from 'react'
import { useForm } from 'react-hook-form'

interface IFormInputs {
  confirmPassword: string
}

interface IButtonDeleteAccountProps {
  classname?: string
}

const ButtonDeleteAccount: FC<IButtonDeleteAccountProps> = ({ classname }) => {
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    mode: 'onSubmit',
    defaultValues: {
      confirmPassword: ''
    }
  })

  const onSubmit = async ({ confirmPassword }: IFormInputs): Promise<void> => {
    await dispatch(deleteAccountThunk(confirmPassword)).then((data) => {
      if (data.meta.requestStatus === 'fulfilled') {
        toast({
          title: 'Системное уведомление',
          description: 'Вы успешно удалили свой аккаунт' as string
        })
      } else {
        toast({ title: 'Системное уведомление', description: data.payload as string })
      }
    })
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant='link'
          type='button'
          className={`text-red dark:text-red hover:text-red dark:hover:text-red ${classname}`}
        >
          Удалить аккаунт
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* @ts-expect-error не рабочие пропсы у DialogHeader */}
          <DialogHeader>
            <DialogTitle>Вы уверены что хотите удалить свой аккаунт?</DialogTitle>
            <DialogDescription>
              Это действие не может быть отменено. Вы уверены, что хотите навсегда удалить
              этот аккаунт с наших серверов?
            </DialogDescription>
          </DialogHeader>
          <Input
            className='mt-4'
            placeholder='Введите ваш старый пароль'
            {...register('confirmPassword', {
              required: 'Обязательное поле',
              minLength: {
                value: 8,
                message: 'Минимальное кол-во символов: 8'
              },
              maxLength: {
                value: 20,
                message: 'Максимальное кол-во символов: 20'
              },
              pattern: {
                value: passwordRegExp,
                message:
                  'Пароль должен состоять из английских букв и не содержать пробелов'
              }
            })}
            error={
              errors.confirmPassword &&
              (errors.confirmPassword.message ||
                'Ошибка, попробуйте ввести другой пароль')
            }
            type='password'
          />
          {/* @ts-expect-error не рабочие пропсы у DialogFooter */}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='secondary'>Отменить</Button>
            </DialogClose>
            <Button variant='default' type='submit'>
              Удалить аккаунт
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
export { ButtonDeleteAccount }

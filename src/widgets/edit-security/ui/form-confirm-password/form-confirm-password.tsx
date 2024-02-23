import { passwordRegExp } from '@shared/lib/reg-exp'
import { Button } from '@shared/ui/button'
import { DialogFooter, DialogHeader, DialogTitle } from '@shared/ui/dialog'
import { Input } from '@shared/ui/input'
import { type FC } from 'react'
import { useForm } from 'react-hook-form'

interface IFormInputs {
  confirmPassword: string
}

interface IFormConfirmPasswordProps {
  onConfirmPassword: ({ confirmPassword }: IFormInputs) => void
  closeDialog: () => void
}
const FormConfirmPassword: FC<IFormConfirmPasswordProps> = ({
  onConfirmPassword,
  closeDialog
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IFormInputs>()

  return (
    <form onSubmit={handleSubmit(onConfirmPassword)} className='flex flex-col gap-7'>
      {/* @ts-expect-error не рабочие пропсы у DialogHeader */}
      <DialogHeader>
        <DialogTitle>Подтверждение пароля</DialogTitle>
      </DialogHeader>
      <div>
        <Input
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
              message: 'Пароль должен состоять из английских букв и не содержать пробелов'
            }
          })}
          error={
            errors.confirmPassword &&
            (errors.confirmPassword.message || 'Ошибка, попробуйте ввести другой пароль')
          }
          type='password'
        />
      </div>
      {/* @ts-expect-error не рабочие пропсы у DialogFooter */}
      <DialogFooter>
        <Button
          variant='secondary'
          type='button'
          onClick={() => {
            closeDialog()
            reset()
          }}
        >
          Отменить
        </Button>
        <Button variant='default' type='submit'>
          Сохранить
        </Button>
      </DialogFooter>
    </form>
  )
}
export { FormConfirmPassword }

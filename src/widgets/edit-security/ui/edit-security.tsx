import { editUserSecurityInfoThunk } from '@app/store/reducers/profileInfo/async-thunks'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { ButtonDeleteAccount } from '@features/button-delete-account'
import { ButtonLogout } from '@features/button-logout'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { emailRegExp, passwordRegExp } from '@shared/lib/reg-exp'
import { removeNullProperties } from '@shared/lib/remove-null-properties'
import { Button } from '@shared/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@shared/ui/dialog'
import { Input } from '@shared/ui/input'
import { useToast } from '@widgets/toaster'
import { useEffect, useState, type FC } from 'react'
import { useForm } from 'react-hook-form'
import { FormConfirmPassword } from './form-confirm-password/form-confirm-password'

interface IFormInputs {
  email: string
  password: string
}

const EditSecurity: FC = () => {
  const userInfo = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  const [isEditInfo, setEditInfo] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<IFormInputs>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = ({ confirmPassword }: { confirmPassword: string }): void => {
    const payloadWithoutNullProperties = removeNullProperties({
      email: watch('email'),
      password: watch('password'),
      confirmPassword
    })
    // @ts-expect-error значения полей payloadWithoutNullProperties никогда не будут !== string
    dispatch(editUserSecurityInfoThunk(payloadWithoutNullProperties)).then((data) => {
      if (data.meta.requestStatus === 'fulfilled') {
        resetValueInputs()
        toast({
          title: 'Системное уведомление',
          description: 'Вы успешно обновили данные своего аккаунта'
        })
      } else {
        toast({ title: 'Системное уведомление', description: data.payload as string })
      }
    })
  }

  const resetValueInputs = (): void => {
    clearErrors()
    reset()
  }

  useEffect(() => {
    const subscription = watch(({ email, password }) => {
      if (email === '' && password === '') {
        setEditInfo(false)
      } else {
        setEditInfo(true)
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [watch])

  return (
    <form onChange={handleSubmit(() => {})} className='flex flex-col gap-4'>
      <h1 className='text-2xl'>Безопасность</h1>
      <div>
        <div className='w-[100%] flex flex-col gap-1'>
          <h3 className='text-sm'>E-mail</h3>
          <Input
            placeholder={userInfo?.email}
            {...register('email', {
              pattern: {
                value: emailRegExp,
                message: 'Данный E-mail не существует'
              }
            })}
            error={
              errors.email &&
              (errors.email.message || 'Ошибка, попробуйте ввести другой E-mail')
            }
          />
        </div>
        <div className='w-[100%] flex flex-col gap-1'>
          <h3 className='text-sm'>Пароль</h3>
          <Input
            placeholder='Введите новый пароль'
            {...register('password', {
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
              errors.password &&
              (errors.password.message || 'Ошибка, попробуйте ввести другой пароль')
            }
          />
        </div>
      </div>

      <div className='flex justify-between items-center flex-col-reverse sm:flex-row gap-4'>
        <div className='flex flex-[50%] flex-col sm:flex-row'>
          <ButtonLogout classname='w-auto' />
          <ButtonDeleteAccount classname='w-auto' />
        </div>

        <div className='flex w-[100%] flex-col sm:flex-row gap-3 sm:w-[360px] lg:self-end'>
          {isEditInfo && (
            <>
              <Button variant='secondary' onClick={resetValueInputs}>
                Отмена
              </Button>

              <Dialog>
                {isSubmitSuccessful ? (
                  <DialogTrigger asChild>
                    <Button variant='default'>Сохранить</Button>
                  </DialogTrigger>
                ) : (
                  <Button variant='default' type='button'>
                    Сохранить
                  </Button>
                )}

                <DialogContent>
                  <FormConfirmPassword onSubmit={onSubmit} />
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      </div>
    </form>
  )
}
export { EditSecurity }

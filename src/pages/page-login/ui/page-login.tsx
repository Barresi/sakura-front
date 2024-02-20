import { useTheme } from '@app/providers/theme-context/lib/useTheme'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { emailRegExp, passwordRegExp } from '@shared/lib/reg-exp'
import { type ILoginForm } from '@shared/lib/types/forms'
import { Button } from '@shared/ui/button'
import { ButtonSetting } from '@shared/ui/button-setting'
import { Input } from '@shared/ui/input'
import { Logo } from '@shared/ui/logo'
import { loginThunk } from '@store/reducers/profileInfo/async-thunks'
import { useToast } from '@widgets/toaster'
import { type FC } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const PageLogin: FC = () => {
  const { toast } = useToast()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { toggleTheme } = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({ mode: 'onSubmit' })

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    await dispatch(loginThunk(data)).then((data) => {
      if (data.meta.requestStatus === 'fulfilled') {
        toast({
          title: 'Системное уведомление',
          description: 'Вы успешно зашли в свой аккаунт' as string
        })
      } else {
        toast({ title: 'Системное уведомление', description: data.payload as string })
      }
    })
  }

  return (
    <div className='flex justify-center items-center py-5 px-5 min-h-[100vh]'>
      <ButtonSetting
        icon='theme'
        className=' absolute top-5 left-5'
        onClick={toggleTheme}
      />
      <div className='max-w-xl rounded-[10px] m-auto rounded-xl p-8 flex flex-col gap-12 items-center bg-white dark:bg-grayBlue w-[100%] mt-[64px] md:mt-auto'>
        <div>
          <Logo />
          <div className=' text-2xl text-center mt-5'>Авторизация</div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=' w-[100%] flex flex-col gap-4'>
          <Input
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: emailRegExp,
                message: 'Данный E-mail не существует'
              }
            })}
            error={
              errors.email &&
              (errors.email.message || 'Ошибка, попробуйте ввести другой E-mail')
            }
            placeholder='E-mail'
          />

          <Input
            {...register('password', {
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
              errors.password &&
              (errors.password.message || 'Ошибка, попробуйте ввести другой пароль')
            }
            placeholder='Пароль'
            type='password'
          />

          <div className=' mt-12 flex flex-col gap-2'>
            <Button variant='default' type='submit'>
              Войти
            </Button>
            <p className=' text-center'>или</p>
            <Button
              variant='link'
              type='button'
              onClick={() => {
                navigate('registration')
              }}
            >
              Регистрация
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { PageLogin }

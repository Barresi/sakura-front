import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { type ILoginForm } from '../../../shared/lib/types/forms'
import { loginThunk } from '@src/app/store/reducers/profileInfo/async-thunks'
import { useAppDispatch } from '@src/shared/lib/hooks/store-hooks'
import SettingButton from '@src/shared/ui/button-setting/setting-button'
import Logo from '@src/shared/ui/logo/logo'
import Button from '@src/shared/ui/button/button'
import Input from '@src/shared/ui/input/input'
import { useTheme } from '@src/app/providers/theme-context/lib/useTheme'
import { useToast } from '@src/widgets/toaster/lib/use-toast'

const LoginPage: FC = () => {
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
      <SettingButton
        icon='theme'
        className=' absolute top-5 left-5'
        onClick={toggleTheme}
      />
      <div className='max-w-xl rounded-[10px] m-auto rounded-xl p-8 flex flex-col gap-12 items-center bg-white dark:bg-grayBlue w-[100%] mt-[64px] md:mt-auto'>
        <div>
          <Logo />
          <div className=' text-2xl text-center mt-5'>Авторизация</div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=' w-[100%] flex flex-col gap-2'>
          <Input
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Данный E-mail не существует'
              }
            })}
            error={errors.email && (errors.email.message || 'Неправильный логин')}
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
                value: /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?"]).*$/,
                message: 'Пароль должен иметь минимум 1 символ и 1 цифру'
              }
            })}
            error={errors.password && (errors.password.message || 'Неправильный пароль')}
            placeholder='Password'
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

export default LoginPage

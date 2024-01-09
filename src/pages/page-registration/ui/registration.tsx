import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { type IRegistrationForm } from '../../../shared/lib/types/forms'
import { registrationThunk } from '@src/app/store/reducers/profileInfo/async-thunks'
import { useAppDispatch } from '@src/shared/lib/hooks/store-hooks'
import Logo from '@src/shared/ui/logo/logo'
import SettingButton from '@src/shared/ui/button-setting/setting-button'
import Input from '@src/shared/ui/input/input'
import Button from '@src/shared/ui/button/button'
import { useTheme } from '@src/app/providers/theme-context/lib/useTheme'
import { useToast } from '@src/widgets/toaster/lib/use-toast'

const RegistrationPage: FC = () => {
  const { toast } = useToast()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { toggleTheme } = useTheme()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IRegistrationForm>({ mode: 'onSubmit' })

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    await dispatch(registrationThunk(data)).then((data) => {
      if (data.meta.requestStatus === 'fulfilled') {
        navigate('/')
        toast({
          title: 'Системное уведомление',
          description: 'Вы успешно зарегистрировались' as string
        })
      } else {
        toast({ title: 'Системное уведомление', description: data.payload as string })
      }
    })
  }

  return (
    <div className='flex justify-center items-center px-5 py-5 min-h-[100vh]'>
      <SettingButton
        icon='theme'
        className='absolute top-5 left-5'
        onClick={toggleTheme}
      />
      <div className='max-w-xl rounded-[10px] m-auto rounded-xl p-8 flex flex-col gap-12 items-center bg-white dark:bg-grayBlue w-[100%] mt-[64px] md:mt-auto '>
        <div>
          <Logo />
          <div className=' text-2xl text-center mt-5'>Регистрация</div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=' w-[100%] flex flex-col gap-2'>
          <Input
            {...register('firstName', {
              required: 'Обязательное поле',
              minLength: {
                value: 2,
                message: 'Минимальное кол-во символов: 2'
              },
              maxLength: {
                value: 20,
                message: 'Максимальное кол-во символов: 20'
              }
            })}
            error={errors.firstName && (errors.firstName.message || 'Неправильный логин')}
            placeholder='Имя'
          />

          <Input
            {...register('lastName', {
              required: 'Обязательное поле',
              minLength: {
                value: 2,
                message: 'Минимальное кол-во символов: 2'
              },
              maxLength: {
                value: 20,
                message: 'Максимальное кол-во символов: 20'
              }
            })}
            error={errors.lastName && (errors.lastName.message || 'Неправильный логин')}
            placeholder='Фамилия'
          />

          <Input
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Данный E-mail не существует'
              }
            })}
            error={errors.email && (errors.email.message || 'Неправильный email')}
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
            error={errors.password && (errors.password.message || 'login is required')}
            placeholder='Password'
            type='password'
          />

          <Input
            {...register('confirmPassword', {
              required: 'Обязательное поле',
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Ваши пароли не совпадают'
                }
              }
            })}
            error={
              errors.confirmPassword &&
              (errors.confirmPassword.message || 'login is required')
            }
            placeholder='Confirm password'
            type='password'
          />

          <div className=' mt-12 flex flex-col gap-2'>
            <Button variant='default' type='submit'>
              Зарегистрироваться
            </Button>
            <p className=' text-center'>или</p>
            <Button
              variant='link'
              type='button'
              onClick={() => {
                navigate('/')
              }}
            >
              Войти
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationPage

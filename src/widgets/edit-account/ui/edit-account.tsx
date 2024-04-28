import { editUserInfoThunk } from '@app/store/reducers/profileInfo/async-thunks'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { nameRegExp, usernameRegExp } from '@shared/lib/reg-exp'
import { removeNullProperties } from '@shared/lib/remove-null-properties'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { Textarea } from '@shared/ui/textarea'
import { useToast } from '@widgets/toaster'
import { useEffect, useState, type FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { AvatarChange } from './avatar-change/avatar-change'
import { BannerChange } from './banner-change/banner-change'
import { BirthDateChange } from './birth-date-change/birth-date-change'
import { GenderChange } from './gender-change/gender-change'

interface IFormInputs {
  firstName: string
  lastName: string
  city: string
  username: string
  description: string
  gender: 'male' | 'female' | null
  birthDate: Date | null
  avatar: File | null
  banner: File | null
}

const EditAccount: FC = () => {
  const { toast } = useToast()
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(selectUser)

  const methods = useForm<IFormInputs>({
    mode: 'onSubmit',
    defaultValues: {
      city: '',
      description: '',
      firstName: '',
      lastName: '',
      username: '',
      birthDate: null,
      gender: null
    }
  })

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    setValue,
    formState: { errors }
  } = methods

  const [isEditInfo, setEditInfo] = useState(false)

  useEffect(() => {
    const subscription = watch(
      ({
        birthDate,
        city,
        description,
        firstName,
        gender,
        lastName,
        username,
        avatar,
        banner
      }) => {
        if (
          city === '' &&
          description === '' &&
          firstName === '' &&
          lastName === '' &&
          username === '' &&
          birthDate === null &&
          gender === null &&
          avatar === null &&
          banner === null
        ) {
          setEditInfo(false)
        } else {
          setEditInfo(true)
        }
      }
    )
    return () => {
      subscription.unsubscribe()
    }
  }, [watch])

  const resetUserInfo = (): void => {
    setValue('city', '')
    setValue('description', '')
    setValue('firstName', '')
    setValue('lastName', '')
    setValue('username', '')
    setValue('avatar', null)
    setValue('banner', null)
    setValue('birthDate', null)
    setValue('gender', null)
  }

  const onSubmit = (form: IFormInputs): void => {
    const payloadWithoutNullProperties = removeNullProperties(form)
    dispatch(editUserInfoThunk(payloadWithoutNullProperties)).then((data) => {
      if (data.meta.requestStatus === 'fulfilled') {
        resetUserInfo()
        toast({
          title: 'Системное уведомление',
          description: 'Вы успешно обновили данные своего аккаунта'
        })
      } else {
        toast({ title: 'Системное уведомление', description: data.payload as string })
      }
    })
  }

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-2xl'>Аккаунт</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='relative flex flex-col gap-5'>
          <div className='relative flex flex-col justify-center items-center usm:flex-row w-full usm:h-[230px] lg:h-[284px]'>
            <BannerChange />
            <AvatarChange />
          </div>

          <div className='flex flex-col md:flex-row gap-5 justify-between'>
            <div className='w-[100%] flex flex-col gap-1'>
              <h3 className='text-sm'>Никнейм</h3>

              <Input
                {...register('username', {
                  validate: (value: string) => {
                    if (value && value[0] !== '@')
                      return '@username должен начинаться с "@"'
                    if (!usernameRegExp.test(value.slice(1)) && value.slice(1).length)
                      return 'Ошибка, попробуйте ввести другой @username'
                  },

                  minLength: {
                    value: 5,
                    message: 'Минимальное кол-во символов: 5'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Максимальное кол-во символов: 20'
                  }
                })}
                error={
                  errors.username &&
                  (errors.username.message ||
                    'Ошибка, попробуйте ввести другой @username')
                }
                placeholder={userInfo?.username || 'Введите свой @username'}
              />
            </div>
            <div className='w-[100%] flex flex-col gap-1'>
              <h3 className='text-sm'>Родной город</h3>

              <Input
                {...register('city', {
                  minLength: {
                    value: 2,
                    message: 'Минимальное кол-во символов: 2'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Максимальное кол-во символов: 20'
                  }
                })}
                error={
                  errors.city &&
                  (errors.city.message || 'Ошибка, попробуйте ввести другой город')
                }
                placeholder={userInfo?.city || 'Введите свой родной город'}
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-5 justify-between'>
            <div className='w-[100%] flex flex-col gap-1'>
              <h3 className='text-sm'>Имя</h3>

              <Input
                {...register('firstName', {
                  minLength: {
                    value: 2,
                    message: 'Минимальное кол-во символов: 2'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Максимальное кол-во символов: 20'
                  },
                  pattern: {
                    value: nameRegExp,
                    message: 'Имя должно состоять исключительно из букв'
                  }
                })}
                error={
                  errors.firstName &&
                  (errors.firstName.message || 'Ошибка, попробуйте ввести другое имя')
                }
                placeholder={userInfo?.firstName || 'Введите свое имя'}
              />
            </div>
            <div className='w-[100%] flex flex-col gap-1'>
              <h3 className='text-sm'>Фамилия</h3>

              <Input
                {...register('lastName', {
                  minLength: {
                    value: 2,
                    message: 'Минимальное кол-во символов: 2'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Максимальное кол-во символов: 20'
                  },
                  pattern: {
                    value: nameRegExp,
                    message: 'Фамилия должна состоять исключительно из букв'
                  }
                })}
                error={
                  errors.lastName &&
                  (errors.lastName.message || 'Ошибка, попробуйте ввести другую фамилию')
                }
                placeholder={userInfo?.lastName || 'Введите свою фамилию'}
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-5 justify-between'>
            <div className='w-[100%] flex flex-col gap-1'>
              <h3 className='text-sm'>День рождения</h3>
              {/* Todo Убрать анимацию нажатия на PopoverTrigger */}
              <BirthDateChange />
            </div>
            <div className='w-[100%] flex flex-col gap-1'>
              <h3 className='text-sm'>Пол</h3>
              {/* Todo добавить анимацию закрытия SelectContent */}
              <GenderChange />
            </div>
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>Краткая информация</h3>
            <Textarea
              {...register('description', {
                maxLength: {
                  value: 200,
                  message: 'Максимальное кол-во символов: 200'
                }
              })}
              error={
                errors.description &&
                (errors.description.message ||
                  'Ошибка, попробуйте ввести другую информацию')
              }
              placeholder={userInfo?.description || 'Введите краткую информацию о себе'}
            />
          </div>

          {isEditInfo && (
            <div className='flex flex-col sm:flex-row gap-3 w-[100%] lg:w-[480px] lg:self-end mt-3'>
              <Button
                variant='secondary'
                type='button'
                onClick={() => {
                  resetUserInfo()
                  clearErrors()
                }}
              >
                Отмена
              </Button>
              <Button variant='default' type='submit'>
                Сохранить
              </Button>
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  )
}
export { EditAccount }

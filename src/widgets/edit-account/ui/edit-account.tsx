import { editUserInfoThunk } from '@app/store/reducers/profileInfo/async-thunks'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import banner from '@assets/banner/default user banner.jpg'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
import { usernameRegExp } from '@shared/lib/reg-exp'
import { Button } from '@shared/ui/button'
import { Calendar } from '@shared/ui/calendar'
import { Input } from '@shared/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@shared/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@shared/ui/select'
import { Textarea } from '@shared/ui/textarea'
import { UserAvatar } from '@shared/ui/user-avatar'
import { useToast } from '@widgets/toaster'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { useEffect, useState, type FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { removeNullPropertiesInUserInfo } from '../lib/remove-null-properties'

interface IFormInputs {
  firstName: string
  lastName: string
  city: string
  username: string
  description: string
  gender: 'male' | 'female' | null
  birthDate: Date | null
}

const EditAccount: FC = () => {
  const { toast } = useToast()
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(selectUser)

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    control,
    setValue,
    formState: { errors }
  } = useForm<IFormInputs>({
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
  const [isEditInfo, setEditInfo] = useState(false)

  useEffect(() => {
    setValue('birthDate', userInfo?.birthDate || null)
    setValue('gender', userInfo?.gender || null)
    const subscription = watch(
      ({ birthDate, city, description, firstName, gender, lastName, username }) => {
        if (
          birthDate?.getTime() === userInfo?.birthDate?.getTime() &&
          gender === userInfo?.gender &&
          city === '' &&
          description === '' &&
          firstName === '' &&
          lastName === '' &&
          username === ''
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
  }, [watch, userInfo?.birthDate, userInfo?.gender])

  const resetUserInfo = (): void => {
    setValue('city', '')
    setValue('description', '')
    setValue('firstName', '')
    setValue('lastName', '')
    setValue('username', '')
  }

  const onSubmit = ({
    city,
    description,
    firstName,
    lastName,
    username,
    birthDate,
    gender
  }: IFormInputs): void => {
    const payloadWithoutNullProperties = removeNullPropertiesInUserInfo(
      {
        username,
        city,
        firstName,
        lastName,
        description,
        birthDate,
        gender
      },
      userInfo?.gender || null,
      userInfo?.birthDate || null
    )
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
      <div className='relative'>
        <div className='relative flex justify-center items-center'>
          <img
            src={banner}
            alt='banner'
            className='w-[100%] object-cover rounded-[6px]'
          />
          <Button
            variant='outline'
            className='absolute usm:right-[20px] usm:bottom-[10px] w-[190px] h-[40px] xxl:right-[30px] xxl:bottom-[30px]'
          >
            Изменить обложку
          </Button>
        </div>

        <UserAvatar className='mt-[50px] h-[100%] w-[100%] usm:absolute usm:mt-0 usm:left-[20px] usm:bottom-[10px] usm:w-[100px] usm:h-[100px] xxl:left-[30px] xxl:bottom-[30px] sm:h-[150px] sm:w-[150px]' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='relative flex flex-col'>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>Никнейм</h3>

            <Input
              {...register('username', {
                validate: (value: string) => {
                  if (value && value[0] !== '@')
                    return '@username должен начинаться с "@"'
                },
                pattern: {
                  value: usernameRegExp,
                  message: 'Ошибка, попробуйте ввести другой @username'
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
                (errors.username.message || 'Ошибка, попробуйте ввести другой @username')
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
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
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
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>День рождения</h3>
            {/* Todo Убрать анимацию нажатия на PopoverTrigger */}
            <Controller
              control={control}
              name='birthDate'
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild className='mb-6 h-[54px]'>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[100%] text-left text-black dark:text-white font-normal flex justify-between border-smokyWhite dark:border-cadet hover:border-smokyWhite dark:hover:border-cadet hover:text-black dark:hover:text-white',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Выберите дату</span>
                      )}
                      <CalendarIcon className='mr-2 h-4 w-4' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className='w-auto p-0 bg-ghostlyWhite dark:bg-grayBlue'
                    side='bottom'
                    align='end'
                  >
                    <Calendar
                      /* @ts-expect-error не рабочие пропсы у Calendar */
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>Пол</h3>
            {/* Todo добавить анимацию закрытия SelectContent */}
            <Controller
              control={control}
              name='gender'
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value || undefined}>
                  <SelectTrigger className='mb-6 rounded-[6px]'>
                    <SelectValue placeholder='Выберите пол' />
                  </SelectTrigger>
                  <SelectContent className='border-smokyWhite dark:border-cadet rounded-[6px] w-selectWidth'>
                    <SelectItem value='male'>Мужской</SelectItem>
                    <SelectItem value='female'>Женский</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
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
                setValue('birthDate', userInfo?.birthDate || null)
                setValue('gender', userInfo?.gender || null)
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
    </div>
  )
}
export { EditAccount }

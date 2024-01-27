import { editUserInfoThunk } from '@app/store/reducers/profileInfo/async-thunks'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import banner from '@assets/banner/default user banner.jpg'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
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
import { useEffect, useState, type FC, type FormEvent } from 'react'
import { removeNullProperties } from '../lib/remove-null-properties'

const EditAccount: FC = () => {
  const { toast } = useToast()
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(selectUser)

  const [username, setUsername] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [birthDate, setBirthDate] = useState<Date | null>(null)
  const [gender, setGender] = useState<'male' | 'female' | null>(null)
  const [description, setDescription] = useState<string>('')

  useEffect(() => {
    setBirthDate(userInfo?.birthDate || null)
    setGender(userInfo?.gender || null)
  }, [userInfo?.birthDate])

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault()
    const payloadWithoutNullProperties = removeNullProperties(
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
        setUsername('')
        setCity('')
        setFirstName('')
        setLastName('')
        setDescription('')
        toast({
          title: 'Системное уведомление',
          description: 'Вы успешно обновили данные своего аккаунта'
        })
      } else {
        toast({ title: 'Системное уведомление', description: data.payload as string })
      }
    })
  }

  const resetUserInfo = (): void => {
    setUsername('')
    setCity('')
    setFirstName('')
    setLastName('')
    setBirthDate(userInfo?.birthDate || null)
    setGender(userInfo?.gender || null)
    setDescription('')
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
      <form onSubmit={onSubmit} className='relative flex flex-col'>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>Никнейм</h3>
            {/* Todo добавить ограничение кол-ва символов и проверку на @ в начале ввода */}
            <Input
              placeholder={userInfo?.username || 'Введите свой @username'}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>Родной город</h3>
            {/* Todo добавить ограничение кол-ва символов */}
            <Input
              placeholder={userInfo?.city || 'Введите свой родной город'}
              value={city}
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>Имя</h3>
            {/* Todo добавить ограничение кол-ва символов */}
            <Input
              placeholder={userInfo?.firstName || 'Введите свое имя'}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>Фамилия</h3>
            {/* Todo добавить ограничение кол-ва символов */}
            <Input
              placeholder={userInfo?.lastName || 'Введите свою фамилию'}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>День рождения</h3>
            {/* Todo Убрать анимацию нажатия на PopoverTrigger */}
            <Popover>
              <PopoverTrigger asChild className='mb-6 h-[54px]'>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[100%] text-left text-black dark:text-white font-normal flex justify-between border-smokyWhite dark:border-cadet hover:border-smokyWhite dark:hover:border-cadet hover:text-black dark:hover:text-white',
                    !birthDate && 'text-muted-foreground'
                  )}
                >
                  {birthDate ? format(birthDate, 'PPP') : <span>Выберите дату</span>}
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
                  selected={birthDate}
                  onSelect={setBirthDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>Пол</h3>
            {/* Todo добавить анимацию закрытия SelectContent */}
            <Select
              onValueChange={(e: 'male' | 'female') => {
                setGender(e)
              }}
              defaultValue={userInfo?.gender || undefined}
              value={gender || undefined}
            >
              <SelectTrigger className='mb-6 rounded-[6px]'>
                <SelectValue placeholder='Выберите пол' />
              </SelectTrigger>
              <SelectContent className='border-smokyWhite dark:border-cadet rounded-[6px] w-selectWidth'>
                <SelectItem value='male'>Мужской</SelectItem>
                <SelectItem value='female'>Женский</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='w-[100%] flex flex-col gap-1'>
          <h3>Краткая информация</h3>
          {/* Todo добавить ограничение кол-ва символов */}
          <Textarea
            placeholder={userInfo?.description || 'Введите краткую информацию о себе'}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </div>

        {(username !== '' ||
          city !== '' ||
          firstName !== '' ||
          lastName !== '' ||
          birthDate !== (userInfo?.birthDate || null) ||
          gender !== (userInfo?.gender || null) ||
          description !== '') && (
          <div className='flex flex-col sm:flex-row gap-3 w-[100%] lg:w-[480px] lg:self-end mt-3'>
            <Button variant='secondary' type='button' onClick={resetUserInfo}>
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

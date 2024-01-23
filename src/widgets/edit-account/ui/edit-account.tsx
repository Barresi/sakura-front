import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import banner from '@assets/banner/default user banner.jpg'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
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
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { useState, type FC } from 'react'

const EditAccount: FC = () => {
  const userInfo = useAppSelector(selectUser)
  const userBirthDate = userInfo.birthDate ? new Date(userInfo.birthDate) : undefined
  const [date, setDate] = useState<Date | undefined>(userBirthDate)

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
      <div className='relative'>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>Никнейм</h3>
            <Input placeholder={userInfo.username ? userInfo.username : undefined} />
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>Родной город</h3>
            <Input placeholder={userInfo.city ? userInfo.city : undefined} />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>Имя</h3>
            <Input placeholder={userInfo.firstName} />
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>Фамилия</h3>
            <Input placeholder={userInfo.lastName} />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>День рождения</h3>
            <Popover>
              <PopoverTrigger asChild className='mb-6 h-[54px]'>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[100%] text-left text-black dark:text-white font-normal flex justify-between border-smokyWhite dark:border-cadet hover:border-smokyWhite dark:hover:border-cadet hover:text-black dark:hover:text-white',
                    !date && 'text-muted-foreground'
                  )}
                >
                  {date ? format(date, 'PPP') : <span>Выберите дату</span>}
                  <CalendarIcon className='mr-2 h-4 w-4' />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className='w-auto p-0 bg-ghostlyWhite dark:bg-grayBlue'
                side='bottom'
                align='end'
              >
                {/* @ts-expect-error не рабочие пропсы у Calendar */}
                <Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>Пол</h3>
            <Select defaultValue={userInfo.gender ? userInfo.gender : undefined}>
              <SelectTrigger className='mb-6 rounded-[6px]'>
                <SelectValue />
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
          <Textarea
            placeholder={userInfo.description ? userInfo.description : undefined}
          />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-3 w-[100%] lg:w-[480px] lg:self-end'>
        <Button variant='secondary'>Отмена</Button>
        <Button variant='default'>Сохранить</Button>
      </div>
    </div>
  )
}
export { EditAccount }

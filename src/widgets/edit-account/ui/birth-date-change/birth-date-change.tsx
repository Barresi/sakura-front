import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
import { Button } from '@shared/ui/button'
import { Calendar } from '@shared/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@shared/ui/popover'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { type FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const BirthDateChange: FC = () => {
  const { control } = useFormContext()
  const userInfo = useAppSelector(selectUser)
  return (
    <Controller
      control={control}
      name='birthDate'
      render={({ field: { onChange, value } }) => {
        return (
          <Popover>
            <PopoverTrigger asChild className=' h-[54px]'>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[100%] text-left font-normal flex justify-between border-smokyWhite dark:border-cadet hover:border-smokyWhite dark:hover:border-cadet border transition-none active:scale-100'
                )}
              >
                {value || userInfo?.birthDate ? (
                  format(value || userInfo?.birthDate, 'PPP')
                ) : (
                  <span className='text-darkGray'>Выберите дату</span>
                )}
                <CalendarIcon className='h-4 w-4 stroke-cadetBlue' />
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
                selected={value || userInfo?.birthDate}
                onSelect={onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )
      }}
    />
  )
}
export { BirthDateChange }

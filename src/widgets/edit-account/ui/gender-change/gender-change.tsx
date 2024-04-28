import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@shared/ui/select'
import { type FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const GenderChange: FC = () => {
  const { control } = useFormContext()
  const userInfo = useAppSelector(selectUser)
  return (
    <Controller
      control={control}
      name='gender'
      render={({ field: { onChange, value } }) => {
        return (
          <Select onValueChange={onChange} value={value || userInfo?.gender || undefined}>
            <SelectTrigger className={value || userInfo?.gender ? '' : 'text-cadetBlue '}>
              <SelectValue placeholder='Выберите пол' />
            </SelectTrigger>
            <SelectContent className='rounded-[6px] w-selectWidth bg-white dark:bg'>
              <SelectItem value='male'>Мужской</SelectItem>
              <SelectItem value='female'>Женский</SelectItem>
            </SelectContent>
          </Select>
        )
      }}
    />
  )
}
export { GenderChange }

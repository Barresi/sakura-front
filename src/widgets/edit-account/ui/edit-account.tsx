import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@shared/ui/select'
import { Textarea } from '@shared/ui/textarea'
import { type FC } from 'react'

const EditAccount: FC = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-2xl'>Аккаунт</h1>
      <div className='relative'>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>Никнейм</h3>
            <Input />
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3 className='text-sm'>Родной город</h3>
            <Input />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>Имя</h3>
            <Input />
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>Фамилия</h3>
            <Input />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-5 justify-between'>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>День рождения</h3>
            <Input />
          </div>
          <div className='w-[100%] flex flex-col gap-1'>
            <h3>Пол</h3>
            <Select defaultValue='male'>
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
          <Textarea />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-3 md:w-[480px] md:self-end'>
        <Button variant='secondary'>Отмена</Button>
        <Button variant='default'>Сохранить</Button>
      </div>
    </div>
  )
}
export { EditAccount }

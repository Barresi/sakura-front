import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { type FC } from 'react'

const EditSecurity: FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl'>Безопасность</h1>
      <div>
        <div className='w-[100%] flex flex-col gap-1'>
          <h3>E-mail</h3>
          <Input />
        </div>
        <div className='w-[100%] flex flex-col gap-1'>
          <h3>Пароль</h3>
          <Input />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-3 w-[100%] lg:w-[480px] lg:self-end'>
        <Button variant='secondary'>Отмена</Button>
        <Button variant='default'>Сохранить</Button>
      </div>
    </div>
  )
}
export { EditSecurity }

import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { ButtonDeleteAccount } from '@features/button-delete-account'
import { ButtonLogout } from '@features/button-logout'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { useState, type FC } from 'react'

const EditSecurity: FC = () => {
  const userInfo = useAppSelector(selectUser)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl'>Безопасность</h1>
      <div>
        <div className='w-[100%] flex flex-col gap-1'>
          <h3>E-mail</h3>
          <Input
            placeholder={userInfo?.email}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className='w-[100%] flex flex-col gap-1'>
          <h3>Пароль</h3>
          <Input
            placeholder='Введите новый пароль'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
      </div>

      <div className='flex justify-between items-center flex-col-reverse sm:flex-row gap-4'>
        <div className='flex  flex-[50%] flex-col sm:flex-row'>
          <ButtonLogout classname='w-auto' />
          <ButtonDeleteAccount classname='w-auto' />
        </div>

        <div className='flex flex-col flex-[50%] sm:flex-row gap-3 w-[100%] lg:w-[480px] lg:self-end'>
          {(email !== '' || password !== '') && (
            <>
              <Button variant='secondary'>Отмена</Button>
              <Button variant='default'>Сохранить</Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export { EditSecurity }

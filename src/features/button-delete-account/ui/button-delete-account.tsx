import { Button } from '@shared/ui/button'
import { type FC } from 'react'

interface IButtonDeleteAccountProps {
  classname?: string
}

const ButtonDeleteAccount: FC<IButtonDeleteAccountProps> = ({ classname }) => {
  return (
    <Button
      variant='link'
      className={`text-red dark:text-red hover:text-red dark:hover:text-red ${classname}`}
    >
      Удалить аккаунт
    </Button>
  )
}
export { ButtonDeleteAccount }

import { Button } from '@shared/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@shared/ui/dialog'
import { type FC } from 'react'

interface IButtonDeleteAccountProps {
  classname?: string
}

const ButtonDeleteAccount: FC<IButtonDeleteAccountProps> = ({ classname }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant='link'
          type='button'
          className={`text-red dark:text-red hover:text-red dark:hover:text-red ${classname}`}
        >
          Удалить аккаунт
        </Button>
      </DialogTrigger>
      <DialogContent>
        {/* @ts-expect-error не рабочие пропсы у DialogHeader */}
        <DialogHeader>
          <DialogTitle>Вы уверены что хотите удалить свой аккаунт?</DialogTitle>
          <DialogDescription>
            Это действие не может быть отменено. Вы уверены, что хотите навсегда удалить
            этот аккаунт с наших серверов?
          </DialogDescription>
        </DialogHeader>
        {/* @ts-expect-error не рабочие пропсы у DialogFooter */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='secondary'>Отменить</Button>
          </DialogClose>
          <Button variant='default'>Удалить аккаунт</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export { ButtonDeleteAccount }

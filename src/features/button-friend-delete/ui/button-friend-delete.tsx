import { getFriendsThunk } from '@app/store/reducers/friends/async-thunks'
import { deleteFriend } from '@shared/api/friends/friends'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
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

interface ButtonFriendDeleteProps {
  className?: string
  isMobile: boolean
  friendId: string
}
const ButtonFriendDelete: FC<ButtonFriendDeleteProps> = ({
  className,
  friendId,
  isMobile
}) => {
  const dispatch = useAppDispatch()
  const deleteFriendHandler = async (): Promise<void> => {
    await deleteFriend(friendId)

    dispatch(getFriendsThunk())
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isMobile ? (
          <Button
            icon={'deleteFriend'}
            variant='secondary'
            className='w-[49%] whitespace-nowrap hover:bg-secondary-hover'
          />
        ) : (
          <Button variant='secondary' className={className}>
            Удалить из друзей
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        {/* @ts-expect-error не рабочие пропсы у DialogHeader */}
        <DialogHeader>
          <DialogTitle>Удалить из друзей</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Это действие не может быть отменено. Вы уверены, что хотите удалить этого юзера
          из списка ваших друзей?
        </DialogDescription>

        {/* @ts-expect-error не рабочие пропсы у DialogFooter */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='secondary'>Отменить</Button>
          </DialogClose>
          <Button
            variant='default'
            onClick={async () => {
              await deleteFriendHandler()
            }}
          >
            Удалить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export { ButtonFriendDelete }

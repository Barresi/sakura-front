import { getSendedThunk } from '@app/store/reducers/friends/async-thunks'
import { addFriend } from '@shared/api/friends/users'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { type FC } from 'react'

interface ButtonFriendAddProps {
  className?: string
  isMobile: boolean
  friendId: string
}
const ButtonFriendAdd: FC<ButtonFriendAddProps> = ({ className, isMobile, friendId }) => {
  const dispatch = useAppDispatch()
  const addFriendHandler = async (): Promise<void> => {
    await addFriend(friendId)

    dispatch(getSendedThunk())
  }
  if (isMobile) {
    return (
      <Button
        icon={'add'}
        variant='secondary'
        className='w-[49%] whitespace-nowrap hover:bg-secondary-hover'
        onClick={async () => {
          await addFriendHandler()
        }}
      />
    )
  }
  return (
    <Button
      variant='secondary'
      className={className}
      onClick={async () => {
        await addFriendHandler()
      }}
    >
      Добавить в друзья
    </Button>
  )
}
export { ButtonFriendAdd }

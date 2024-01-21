import { getFriendsThunk } from '@app/store/reducers/friends/async-thunks'
import { deleteFriend } from '@shared/api/friends/friends'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
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
  if (isMobile) {
    return (
      <Button
        icon={'deleteFriend'}
        variant='secondary'
        className='w-[49%] whitespace-nowrap hover:bg-secondary-hover'
        onClick={async () => {
          await deleteFriendHandler()
        }}
      />
    )
  }
  return (
    <Button
      variant='secondary'
      className={className}
      onClick={async () => {
        await deleteFriendHandler()
      }}
    >
      Удалить из друзей
    </Button>
  )
}
export { ButtonFriendDelete }

import {
  getFriendsThunk,
  getReceivedThunk
} from '@app/store/reducers/friends/async-thunks'
import { acceptFriend } from '@shared/api/friends/requests'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { type FC } from 'react'

interface ButtonFriendRequestAcceptProps {
  isMobile: boolean
  friendId: string
  className?: string
}
const ButtonFriendRequestAccept: FC<ButtonFriendRequestAcceptProps> = ({
  className,
  friendId,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const acceptRequestHandler = async (): Promise<void> => {
    await acceptFriend(friendId)

    dispatch(getFriendsThunk())
    dispatch(getReceivedThunk())
  }

  if (isMobile) {
    return (
      <Button
        icon={'add'}
        variant='secondary'
        className='w-[49%] whitespace-nowrap hover:bg-secondary-hover'
        onClick={async () => {
          await acceptRequestHandler()
        }}
      />
    )
  }
  return (
    <Button
      variant='secondary'
      className={className}
      onClick={async () => {
        await acceptRequestHandler()
      }}
    >
      Принять
    </Button>
  )
}
export { ButtonFriendRequestAccept }

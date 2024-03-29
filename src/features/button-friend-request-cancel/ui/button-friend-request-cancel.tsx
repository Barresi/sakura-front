import { getSendedThunk } from '@app/store/reducers/friends/async-thunks'
import { cancelFriend } from '@shared/api/friends/requests'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { type FC } from 'react'

interface ButtonFriendRequestCancelProps {
  className?: string
  isMobile: boolean
  requestId?: string
}
const ButtonFriendRequestCancel: FC<ButtonFriendRequestCancelProps> = ({
  className,
  requestId,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const cancelRequestHandler = async (): Promise<void> => {
    if (requestId) {
      await cancelFriend(requestId)
      dispatch(getSendedThunk())
    }
  }
  if (isMobile) {
    return (
      <Button
        icon={'deleteFriend'}
        variant='secondary'
        className='w-[49%] whitespace-nowrap hover:bg-secondary-hover'
        onClick={async () => {
          await cancelRequestHandler()
        }}
      />
    )
  }
  return (
    <Button
      variant='secondary'
      className={className}
      onClick={async () => {
        await cancelRequestHandler()
      }}
    >
      Отменить заявку
    </Button>
  )
}
export { ButtonFriendRequestCancel }

import { getReceivedThunk } from '@app/store/reducers/friends/async-thunks'
import { rejectFriend } from '@shared/api/friends/requests'
import { useAppDispatch } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { type FC } from 'react'

interface ButtonFriendRequestRejectProps {
  className?: string
  isMobile: boolean
  requestId?: string
}
const ButtonFriendRequestReject: FC<ButtonFriendRequestRejectProps> = ({
  className,
  requestId,
  isMobile
}) => {
  const dispatch = useAppDispatch()

  const rejectRequestHandler = async (): Promise<void> => {
    if (requestId) {
      await rejectFriend(requestId)

      dispatch(getReceivedThunk())
    }
  }
  if (isMobile) {
    return (
      <Button
        icon={'deleteFriend'}
        variant='secondary'
        className='w-[49%] whitespace-nowrap hover:bg-secondary-hover'
        onClick={async () => {
          await rejectRequestHandler()
        }}
      />
    )
  }
  return (
    <Button
      variant='secondary'
      className={className}
      onClick={async () => {
        await rejectRequestHandler()
      }}
    >
      Отклонить
    </Button>
  )
}
export { ButtonFriendRequestReject }

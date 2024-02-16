import { ButtonFriendAdd } from '@features/button-friend-add'
import { ButtonFriendDelete } from '@features/button-friend-delete'
import { ButtonFriendRequestAccept } from '@features/button-friend-request-accept/ui/button-friend-request-accept'
import { ButtonFriendRequestCancel } from '@features/button-friend-request-cancel'
import { ButtonFriendRequestReject } from '@features/button-friend-request-reject/ui/button-friend-request-reject'
import { ButtonFriendWriteMessage } from '@features/button-friend-write-message'
import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { FriendState } from '@shared/lib/types/api'
import { type FC } from 'react'

interface ButtonsFriendActionsProps {
  requestId?: string
  friendId: string
  friendState: FriendState
}
const ButtonsFriendActions: FC<ButtonsFriendActionsProps> = ({
  friendId,
  friendState,
  requestId
}) => {
  const isMobile = useWindowSize(500)
  const renderButtons = {
    [FriendState.isFriend]: (
      <>
        <ButtonFriendWriteMessage isMobile={isMobile} friendId={friendId} />
        <ButtonFriendDelete isMobile={isMobile} friendId={friendId} />
      </>
    ),
    [FriendState.isRequestReceived]: (
      <>
        <ButtonFriendRequestAccept isMobile={isMobile} requestId={requestId} />
        <ButtonFriendRequestReject isMobile={isMobile} requestId={requestId} />
      </>
    ),
    [FriendState.isRequestSended]: (
      <>
        <ButtonFriendWriteMessage isMobile={isMobile} friendId={friendId} />
        <ButtonFriendRequestCancel isMobile={isMobile} requestId={requestId} />
      </>
    ),
    [FriendState.isNoFriend]: (
      <>
        <ButtonFriendWriteMessage isMobile={isMobile} friendId={friendId} />
        <ButtonFriendAdd isMobile={isMobile} friendId={friendId} />
      </>
    )
  }
  return renderButtons[friendState]
}
export { ButtonsFriendActions }

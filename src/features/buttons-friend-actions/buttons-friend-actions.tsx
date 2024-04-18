import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { FriendState } from '@shared/lib/types/api'
import { type FC } from 'react'
import { ButtonFriendAdd } from '../button-friend-add'
import { ButtonFriendDelete } from '../button-friend-delete'
import { ButtonFriendRequestAccept } from '../button-friend-request-accept/ui/button-friend-request-accept'
import { ButtonFriendRequestCancel } from '../button-friend-request-cancel'
import { ButtonFriendRequestReject } from '../button-friend-request-reject/ui/button-friend-request-reject'
import { ButtonFriendWriteMessage } from '../button-friend-write-message'

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
  const isMobile = useWindowSize(600)
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

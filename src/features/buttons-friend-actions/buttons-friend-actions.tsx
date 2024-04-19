import {
  selectFriends,
  selectReceived,
  selectSended
} from '@app/store/reducers/friends/selectors'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { checkFriendState } from '@shared/lib/check-friend-state'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
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
  friendId: string | undefined
}
const ButtonsFriendActions: FC<ButtonsFriendActionsProps> = ({ friendId }) => {
  const isMobile = useWindowSize(600)
  const user = useAppSelector(selectUser)
  const friends = useAppSelector(selectFriends)
  const sended = useAppSelector(selectSended)
  const received = useAppSelector(selectReceived)

  if (!user || !friendId) return null

  const friendState = checkFriendState(user?.id, friendId, friends, sended, received)
  const requestTypes = {
    [FriendState.isRequestSended]: sended.find((item) => item.fromId === user?.id)?.id,
    [FriendState.isRequestReceived]: received.find((item) => item.toId === user?.id)?.id,
    [FriendState.isFriend]: undefined,
    [FriendState.isNoFriend]: undefined
  }
  const requestId = requestTypes[friendState]

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

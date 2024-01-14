import { FriendState, type IFriend } from '@shared/lib/types/api'

export const checkFriendState = (
  userId: string,
  friendId: string | undefined,

  arrayFriends: IFriend[],
  arraySended: IFriend[],
  arrayReceived: IFriend[]
): FriendState => {
  if (arrayFriends.find((item) => item.fromId === friendId || item.toId === friendId))
    return FriendState.isFriend
  if (arraySended.find((item) => item.fromId === userId && item.toId === friendId))
    return FriendState.isRequestSended
  if (arrayReceived.find((item) => item.fromId === friendId && item.toId === userId))
    return FriendState.isRequestReceived
  return FriendState.isNoFriend
}

import { type IFriend } from '@src/shared/lib/types/api'

export const checkFriendState = (
  data: IFriend[],
  currentId: string,
  userId: string
): boolean => {
  return (
    data.filter((item) => {
      const friendId = currentId === item.fromId ? item.toId : item.fromId

      return friendId === userId
    }).length > 0
  )
}

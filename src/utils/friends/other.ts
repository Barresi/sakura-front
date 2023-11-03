import { type IFriend } from '@src/types/api'

export const checkStates = (
  data: IFriend[],
  currentId: number,
  userId: number
): boolean => {
  return (
    data.filter((item) => {
      const friendId = currentId === item.fromId ? item.toId : item.fromId

      return friendId === userId
    }).length > 0
  )
}

import { type IFriendsRequestResponse } from '@src/types/types'

export const checkStates = (
  data: IFriendsRequestResponse[],
  currentId: number,
  userId: number
) => {
  return (
    data.filter((item) => {
      const friendId = currentId == item.fromId ? item.toId : item.fromId

      return friendId == userId
    }).length > 0
  )
}

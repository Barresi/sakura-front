import { type IFriendsRequestResponse, type IUser } from '@src/types/types'

export const filterUsers = (item: IUser, search: string) => {
  if (!search) return true

  return (
    item?.username?.toLowerCase().includes(search.toLowerCase()) ||
    item?.firstName?.toLowerCase().includes(search.toLowerCase()) ||
    item?.lastName?.toLowerCase().includes(search.toLowerCase())
  )
}

export const filterRequests = (
  users: IUser[],
  currentId: number,
  item: IFriendsRequestResponse,
  search: string
) => {
  if (!search) return true

  const id = currentId == item.fromId ? item.toId : item.fromId
  const user = users.filter((item) => Number(item.id) === id)[0]

  return filterUsers(user, search)
}

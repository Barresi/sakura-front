import { type IFriend } from '@src/types/api'
import { type IUser } from '@src/types/types'

export const filterUsers = (item: IUser, search: string): boolean => {
  if (!search) return true

  return (
    item.firstName.toLowerCase().includes(search.toLowerCase()) ||
    item.lastName.toLowerCase().includes(search.toLowerCase())
  )
}

export const filterRequests = (
  users: IUser[],
  currentId: number,
  item: IFriend,
  search: string
): boolean => {
  if (!search) return true

  const id = currentId === item.fromId ? item.toId : item.fromId
  const user = users.filter((item) => Number(item.id) === id)[0]

  return filterUsers(user, search)
}

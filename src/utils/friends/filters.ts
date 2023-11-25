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
  currentId: string,
  item: IFriend,
  search: string
): boolean => {
  if (!search) return true

  const id = currentId === item.fromId ? item.toId : item.fromId
  const user = users.filter((item) => item.id === id)[0]

  return filterUsers(user, search)
}

export const filterData = (
  data: IUser[] | IFriend[],
  search: string,
  users: IUser[],
  currentId: string
): IUser[] | IFriend[] => {
  if ('email' in data[0]) {
    return (data as IUser[]).filter((item) => filterUsers(item, search))
  }
  if ('fromId' in data[0]) {
    return (data as IFriend[]).filter((item) =>
      filterRequests(users, currentId, item, search)
    )
  }

  return []
}

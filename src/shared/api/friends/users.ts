import { type IAddFriendResponse, type IAllUsersResponse } from '../../lib/types/api'
import { apiWithAuth } from '../api'

export const getAllUsers = async (): Promise<IAllUsersResponse> => {
  const res = await apiWithAuth.get<IAllUsersResponse>('/users')

  return res.data
}

export const addFriend = async (id: string): Promise<IAddFriendResponse> => {
  const res = await apiWithAuth.post<IAddFriendResponse>(`/users/${id}`)

  return res.data
}

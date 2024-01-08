import { apiWithAuth } from '../api'
import {
  type IAddFriendResponse,
  type IAllUsersResponse
} from '@src/shared/lib/types/api'

export const getAllUsers = async (): Promise<IAllUsersResponse> => {
  const res = await apiWithAuth.get<IAllUsersResponse>('/users')

  return res.data
}

export const addFriend = async (id: string): Promise<IAddFriendResponse> => {
  const res = await apiWithAuth.post<IAddFriendResponse>(`/users/${id}`)

  return res.data
}

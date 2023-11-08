import { apiWithAuth, errorHandler } from '../api'
import { type IAddFriendResponse, type IAllUsersResponse } from '@src/types/api'

export const getAllUsers = async (): Promise<IAllUsersResponse> => {
  const res = await apiWithAuth.get('/users').catch(errorHandler)

  return res.data
}

export const addFriend = async (id: number): Promise<IAddFriendResponse> => {
  const res = await apiWithAuth.post(`/users/${id}`).catch(errorHandler)

  return res.data
}

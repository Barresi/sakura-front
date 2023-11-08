import { apiWithAuth, errorHandler } from '../api'
import { type IDeleteResponse, type IFriendsResponse } from '@src/types/api'

export const getFriends = async (): Promise<IFriendsResponse> => {
  const res = await apiWithAuth.get('/friends').catch(errorHandler)

  return res.data
}

export const deleteFriend = async (id: number): Promise<IDeleteResponse> => {
  const res = await apiWithAuth.delete(`/friends/${id}`).catch(errorHandler)

  return res.data
}

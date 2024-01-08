import { apiWithAuth } from '../api'
import { type IDeleteResponse, type IFriendsResponse } from '@src/shared/lib/types/api'

export const getFriends = async (): Promise<IFriendsResponse> => {
  const res = await apiWithAuth.get<IFriendsResponse>('/friends')

  return res.data
}

export const deleteFriend = async (id: string): Promise<IDeleteResponse> => {
  const res = await apiWithAuth.delete<IDeleteResponse>(`/friends/${id}`)

  return res.data
}

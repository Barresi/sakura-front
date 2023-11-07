import { api, errorHandler, requestWithRefreshToken } from '../api'
import { getCookie } from '@src/utils/cookie'
import { type IDeleteResponse, type IFriendsResponse } from '@src/types/api'

export const getFriends = async (): Promise<IFriendsResponse> => {
  const res = await api
    .get('/friends', {
      headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
    })
    .catch(errorHandler)

  return res.data
}

export const deleteFriend = async (id: number): Promise<IDeleteResponse> => {
  const res = await api
    .delete(`/friends/${id}`, {
      headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
    })
    .catch(errorHandler)

  return res.data
}

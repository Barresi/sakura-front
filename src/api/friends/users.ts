import { api, errorHandler, requestWithRefreshToken } from '../api'
import { getCookie } from '@src/utils/cookie'
import { type IAddFriendResponse, type IAllUsersResponse } from '@src/types/api'

export const getAllUsers = async (): Promise<IAllUsersResponse> => {
  const res = await api
    .get('/users', { headers: { Authorization: `Bearer ${getCookie('accessToken')}` } })
    .catch(errorHandler)

  return res.data
}

export const addFriend = async (id: number): Promise<IAddFriendResponse> => {
  const res = await api
    .post(
      `/users/${id}`,
      {},
      { headers: { Authorization: `Bearer ${getCookie('accessToken')}` } }
    )
    .catch(errorHandler)

  return res.data
}

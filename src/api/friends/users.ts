import axios from 'axios'
import { errorHandler, requestWithRefreshToken } from '../api'
import { getCookie } from '@src/utils/cookie'
import { type IAddFriendResponse, type IAllUsersResponse } from '@src/types/api'

export const getAllUsers = async (): Promise<IAllUsersResponse> => {
  const getAllUsersRequest = async (): Promise<IAllUsersResponse> => {
    const res = await axios
      .get('/users', { headers: { Authorization: `Bearer ${getCookie('accessToken')}` } })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(getAllUsersRequest)
}

export const addFriend = async (id: number): Promise<IAddFriendResponse> => {
  const addFriendRequest = async (): Promise<IAddFriendResponse> => {
    const res = await axios
      .post(
        `/users/${id}`,
        {},
        { headers: { Authorization: `Bearer ${getCookie('accessToken')}` } }
      )
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(addFriendRequest)
}

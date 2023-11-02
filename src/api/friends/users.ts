import axios from 'axios'
import { errorHandler, requestWithRefreshToken } from '../api'
import { getCookie } from '@src/utils/cookie'

export const getAllUsers = async () => {
  const getAllUsersRequest = async () => {
    const res = await axios
      .get('/users', { headers: { Authorization: `Bearer ${getCookie('accessToken')}` } })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(getAllUsersRequest)
}

export const addFriend = async (id: number) => {
  const addFriendRequest = async () => {
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

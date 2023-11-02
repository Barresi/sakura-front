import axios from 'axios'
import { errorHandler, requestWithRefreshToken } from '../api'
import { getCookie } from '@src/utils/cookie'

export const getFriends = async () => {
  const getFriendsRequest = async () => {
    const res = await axios
      .get('/friends', {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(getFriendsRequest)
}

export const deleteFriend = async (id: number) => {
  const deleteFriendRequest = async () => {
    const res = await axios
      .delete(`/friends/${id}`, {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(deleteFriendRequest)
}

import axios from 'axios'
import { errorHandler, requestWithRefreshToken } from '../api'
import { getCookie } from '@src/utils/cookie'
import { type IDeleteResponse, type IFriendsResponse } from '@src/types/api'

export const getFriends = async (): Promise<IFriendsResponse> => {
  const getFriendsRequest = async (): Promise<IFriendsResponse> => {
    const res = await axios
      .get('/friends', {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(getFriendsRequest)
}

export const deleteFriend = async (id: number): Promise<IDeleteResponse> => {
  const deleteFriendRequest = async (): Promise<IDeleteResponse> => {
    const res = await axios
      .delete(`/friends/${id}`, {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(deleteFriendRequest)
}

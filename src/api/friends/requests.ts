import axios from 'axios'
import { errorHandler, requestWithRefreshToken } from '../api'
import { getCookie } from '@src/utils/cookie'

export const getReceived = async () => {
  const getReceivedRequest = async () => {
    const res = await axios
      .get('/friend-requests/received', {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(getReceivedRequest)
}

export const getSended = async () => {
  const getSendedRequest = async () => {
    const res = await axios
      .get('/friend-requests/sent', {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(getSendedRequest)
}

export const acceptFriend = async (id: number) => {
  const acceptFriendRequest = async () => {
    const res = await axios
      .post(
        `/friend-requests/${id}/accept`,
        {},
        {
          headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
        }
      )
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(acceptFriendRequest)
}

export const rejectFriend = async (id: number) => {
  const rejectFriendRequest = async () => {
    const res = await axios
      .delete(`/friend-requests/${id}/reject`, {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(rejectFriendRequest)
}

export const cancelFriend = async (id: number) => {
  const cancelFriendRequest = async () => {
    const res = await axios
      .delete(`/friend-requests/${id}/cancel`, {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(cancelFriendRequest)
}

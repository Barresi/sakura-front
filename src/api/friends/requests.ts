import axios from 'axios'
import { errorHandler, requestWithRefreshToken } from '../api'
import { getCookie } from '@src/utils/cookie'
import {
  type ISendedResponse,
  type IReceivedResponse,
  type IAcceptResponse,
  type IRejectResponse,
  type ICancelResponse
} from '@src/types/api'

export const getReceived = async (): Promise<IReceivedResponse> => {
  const getReceivedRequest = async (): Promise<IReceivedResponse> => {
    const res = await axios
      .get('/friend-requests/received', {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(getReceivedRequest)
}

export const getSended = async (): Promise<ISendedResponse> => {
  const getSendedRequest = async (): Promise<ISendedResponse> => {
    const res = await axios
      .get('/friend-requests/sent', {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(getSendedRequest)
}

export const acceptFriend = async (id: number): Promise<IAcceptResponse> => {
  const acceptFriendRequest = async (): Promise<IAcceptResponse> => {
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

export const rejectFriend = async (id: number): Promise<IRejectResponse> => {
  const rejectFriendRequest = async (): Promise<IRejectResponse> => {
    const res = await axios
      .delete(`/friend-requests/${id}/reject`, {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(rejectFriendRequest)
}

export const cancelFriend = async (id: number): Promise<ICancelResponse> => {
  const cancelFriendRequest = async (): Promise<ICancelResponse> => {
    const res = await axios
      .delete(`/friend-requests/${id}/cancel`, {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)

    return res.data
  }

  return await requestWithRefreshToken(cancelFriendRequest)
}

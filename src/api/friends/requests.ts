import { api, errorHandler, requestWithRefreshToken } from '../api'
import { getCookie } from '@src/utils/cookie'
import {
  type ISendedResponse,
  type IReceivedResponse,
  type IAcceptResponse,
  type IRejectResponse,
  type ICancelResponse
} from '@src/types/api'

export const getReceived = async (): Promise<IReceivedResponse> => {
  const res = await api
    .get('/friend-requests/received', {
      headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
    })
    .catch(errorHandler)

  return res.data
}

export const getSended = async (): Promise<ISendedResponse> => {
  const res = await api
    .get('/friend-requests/sent', {
      headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
    })
    .catch(errorHandler)

  return res.data
}

export const acceptFriend = async (id: number): Promise<IAcceptResponse> => {
  const res = await api
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

export const rejectFriend = async (id: number): Promise<IRejectResponse> => {
  const res = await api
    .delete(`/friend-requests/${id}/reject`, {
      headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
    })
    .catch(errorHandler)

  return res.data
}

export const cancelFriend = async (id: number): Promise<ICancelResponse> => {
  const res = await api
    .delete(`/friend-requests/${id}/cancel`, {
      headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
    })
    .catch(errorHandler)

  return res.data
}

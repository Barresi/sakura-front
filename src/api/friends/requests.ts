import { apiWithAuth } from '../api'
import {
  type ISendedResponse,
  type IReceivedResponse,
  type IAcceptResponse,
  type IRejectResponse,
  type ICancelResponse
} from '@src/types/api'

export const getReceived = async (): Promise<IReceivedResponse> => {
  const res = await apiWithAuth.get('/friend-requests/received')

  return res.data
}

export const getSended = async (): Promise<ISendedResponse> => {
  const res = await apiWithAuth.get('/friend-requests/sent')

  return res.data
}

export const acceptFriend = async (id: number): Promise<IAcceptResponse> => {
  const res = await apiWithAuth.post(`/friend-requests/${id}/accept`)

  return res.data
}

export const rejectFriend = async (id: number): Promise<IRejectResponse> => {
  const res = await apiWithAuth.delete(`/friend-requests/${id}/reject`)

  return res.data
}

export const cancelFriend = async (id: number): Promise<ICancelResponse> => {
  const res = await apiWithAuth.delete(`/friend-requests/${id}/cancel`)

  return res.data
}

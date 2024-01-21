import {
  type IAcceptResponse,
  type ICancelResponse,
  type IReceivedResponse,
  type IRejectResponse,
  type ISendedResponse
} from '../../lib/types/api'
import { apiWithAuth } from '../api'

export const getReceived = async (): Promise<IReceivedResponse> => {
  const res = await apiWithAuth.get<IReceivedResponse>('/friend-requests/received')

  return res.data
}

export const getSended = async (): Promise<ISendedResponse> => {
  const res = await apiWithAuth.get<ISendedResponse>('/friend-requests/sent')

  return res.data
}

export const acceptFriend = async (id: string): Promise<IAcceptResponse> => {
  const res = await apiWithAuth.post<IAcceptResponse>(`/friend-requests/${id}/accept`)

  return res.data
}

export const rejectFriend = async (id: string): Promise<IRejectResponse> => {
  const res = await apiWithAuth.delete<IRejectResponse>(`/friend-requests/${id}/reject`)

  return res.data
}

export const cancelFriend = async (id: string): Promise<ICancelResponse> => {
  const res = await apiWithAuth.delete<ICancelResponse>(`/friend-requests/${id}/cancel`)

  return res.data
}

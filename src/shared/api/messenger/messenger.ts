import {
  type IGetUserChatsResponse,
  type ICreateChatResponse
} from '@src/shared/lib/types/api'
import { apiWithAuth } from '../api'

export const createChatRequest = async (
  userId: string,
  friendId: string
): Promise<ICreateChatResponse> => {
  const res = await apiWithAuth.post<ICreateChatResponse>('/messenger/create-chat', {
    userId,
    friendId
  })

  return res.data
}

export const getUserChatsRequest = async (): Promise<IGetUserChatsResponse> => {
  const res = await apiWithAuth.get<IGetUserChatsResponse>('/messenger/user-chats')

  return res.data
}

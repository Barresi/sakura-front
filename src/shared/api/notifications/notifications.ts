import {
  type IGetUserNotificationsResponse,
  type IReadUserNotificationsResponse
} from '../../lib/types/api'
import { apiWithAuth } from '../api'

export const getUserNotifications = async (): Promise<IGetUserNotificationsResponse> => {
  const res = await apiWithAuth.get<IGetUserNotificationsResponse>('/notifications')

  return res.data
}

export const readUserNotifications = async (
  id: string[]
): Promise<IReadUserNotificationsResponse> => {
  const res = await apiWithAuth.patch<IReadUserNotificationsResponse>('/notifications', {
    notificationIds: id
  })

  return res.data
}

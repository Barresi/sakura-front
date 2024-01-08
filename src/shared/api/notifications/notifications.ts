import { type IGetUserNotificationsResponse } from '@src/shared/lib/types/api'
import { apiWithAuth } from '../api'

export const getUserNotifications = async (): Promise<IGetUserNotificationsResponse> => {
  const res = await apiWithAuth.get<IGetUserNotificationsResponse>('/notifications')

  return res.data
}

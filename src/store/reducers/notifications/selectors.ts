import { type RootState } from '@src/store/store'
import { type INotification } from '@src/types/api'

export const selectNotifications: (store: RootState) => INotification[] = ({
  notifications
}) => notifications.notifications

export const selectNotificationsIsLoading: (store: RootState) => boolean = (store) =>
  store.friends.isLoading

export const selectNotificationsError: (store: RootState) => string = (store) =>
  store.friends.error

import { type RootState } from '@src/store/store'
import { type INotification } from '@src/types/api'

export const selectNotifications: (store: RootState) => INotification[] = ({
  notifications
}) =>
  [...notifications.notifications].sort((a, b) => {
    const aDate = new Date(a.createdAt || a.updatedAt)
    const bDate = new Date(b.createdAt || b.updatedAt)

    return bDate.getTime() - aDate.getTime()
  })

export const selectNotificationsIsLoading: (store: RootState) => boolean = (store) =>
  store.friends.isLoading

export const selectNotificationsError: (store: RootState) => string = (store) =>
  store.friends.error

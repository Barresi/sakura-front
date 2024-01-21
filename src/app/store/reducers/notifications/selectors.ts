import { createSelector } from '@reduxjs/toolkit'
import { type INotification } from '@shared/lib/types/api'
import { type RootState } from '../../store'

//  Эта логика мемоизирует store и убирает ререндеры
// было в документации в варнинге
// https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization

const notificationsSelector = ({ notifications }: RootState): INotification[] =>
  notifications.notifications
export const selectNotifications: (store: RootState) => INotification[] = createSelector(
  [notificationsSelector],
  (notifications) =>
    [...notifications].sort((a, b) => {
      const aDate = new Date(a?.createdAt || a.updatedAt)
      const bDate = new Date(b?.createdAt || b.updatedAt)

      return bDate.getTime() - aDate.getTime()
    })
)

export const selectNotificationsIsLoading: (store: RootState) => boolean = (store) =>
  store.friends.isLoading

export const selectNotificationsError: (store: RootState) => string = (store) =>
  store.friends.error

import { createSelector } from '@reduxjs/toolkit'
import { type RootState } from '@src/store/store'
import { type INotification } from '@src/types/api'

//  Эта логика мемоизирует store и убирает ререндеры
// было в документации в варнинге
// https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization

const userChatsSelector = ({ notifications }: RootState): INotification[] =>
  notifications.notifications
export const selectNotifications: (store: RootState) => INotification[] = createSelector(
  [userChatsSelector],
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

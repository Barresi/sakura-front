import { createSelector } from '@reduxjs/toolkit'
import { type RootState } from '@src/store/store'
import { type IChat } from '@src/types/api'

//  Эта логика мемоизирует store и убирает ререндеры
// было в документации в варнинге
// https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization

const userChatsSelector = ({ messenger }: RootState): IChat[] => messenger.userChats
export const selectMessengerUserChats: (store: RootState) => IChat[] = createSelector(
  [userChatsSelector],
  (messages) =>
    [...messages].sort((a, b) => {
      const aDate = new Date(a.newMessage?.createdAt || a.updatedAt)
      const bDate = new Date(b.newMessage?.createdAt || b.updatedAt)

      return bDate.getTime() - aDate.getTime()
    })
)

export const selectMessengerIsLoading: (store: RootState) => boolean = (store) =>
  store.friends.isLoading

export const selectMessengerError: (store: RootState) => string = (store) =>
  store.friends.error

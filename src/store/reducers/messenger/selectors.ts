import { type RootState } from '@src/store/store'
import { type IChat } from '@src/types/api'

export const selectMessengerUserChats: (store: RootState) => IChat[] = (store) =>
  store.messenger.userChats

export const selectMessengerIsLoading: (store: RootState) => boolean = (store) =>
  store.friends.isLoading

export const selectMessengerError: (store: RootState) => string = (store) =>
  store.friends.error

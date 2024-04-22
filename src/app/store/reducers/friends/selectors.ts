import { type IAllUser, type IFriend } from '@shared/lib/types/api'
import { type RootState } from '../../store'

export const selectAllUsers: (store: RootState) => IAllUser[] = (store) =>
  store.friends.allUsers

export const selectFriends: (store: RootState) => IFriend[] = (store) =>
  store.friends.friends

export const selectSended: (store: RootState) => IFriend[] = (store) =>
  store.friends.sended

export const selectReceived: (store: RootState) => IFriend[] = (store) =>
  store.friends.received

export const selectFriendsIsLoading: (store: RootState) => boolean = (store) =>
  store.friends.isLoading

export const selectFriendsError: (store: RootState) => string = (store) =>
  store.friends.error

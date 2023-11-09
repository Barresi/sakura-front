import { type RootState } from '@src/store/store'
import { type AuthStatus } from '@src/types/api'
import { type IUser } from '@src/types/types'

export const selectUser: (store: RootState) => IUser = (store) => store.profileInfo.user

export const selectUserStatus: (store: RootState) => AuthStatus = (store) =>
  store.profileInfo.status

export const selectProfileInfoIsLoading: (store: RootState) => boolean = (store) =>
  store.profileInfo.isLoading

export const selectProfileInfoError: (store: RootState) => string = (store) =>
  store.profileInfo.error

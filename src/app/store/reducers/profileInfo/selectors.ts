import { type AuthStatus } from '@shared/lib/types/api'
import { type IUser } from '@shared/lib/types/types'
import { type RootState } from '../../store'

export const selectUser: (store: RootState) => IUser = (store) => store.profileInfo.user

export const selectUserStatus: (store: RootState) => AuthStatus = (store) =>
  store.profileInfo.status

export const selectProfileInfoIsLoading: (store: RootState) => boolean = (store) =>
  store.profileInfo.isLoading

export const selectProfileInfoError: (store: RootState) => string = (store) =>
  store.profileInfo.error

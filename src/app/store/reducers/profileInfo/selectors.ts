import { type AuthStatus } from '@shared/lib/types/api'
import { type RootState } from '../../store'

interface IUserInfo {
  id: null | string
  email: null | string
  firstName: null | string
  lastName: null | string
  birthDate: null | string
  city: null | string
  description: null | string
  gender: null | 'female' | 'male'
  username: null | string
}

export const selectUser: (store: RootState) => IUserInfo = (store) =>
  store.profileInfo.user

export const selectUserStatus: (store: RootState) => AuthStatus = (store) =>
  store.profileInfo.status

export const selectProfileInfoIsLoading: (store: RootState) => boolean = (store) =>
  store.profileInfo.isLoading

export const selectProfileInfoError: (store: RootState) => string | null = (store) =>
  store.profileInfo.error

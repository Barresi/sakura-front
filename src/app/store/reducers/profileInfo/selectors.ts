import { type AuthStatus } from '@shared/lib/types/api'
import { type IUser } from '@shared/lib/types/types'
import { type RootState } from '../../store'

//  Эта логика мемоизирует store и убирает ререндеры
// было в документации в варнинге
// https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization

export const selectUser = (store: RootState): IUser | null => store.profileInfo.user

export const selectUserStatus: (store: RootState) => AuthStatus = (store) =>
  store.profileInfo.status

export const selectProfileInfoIsLoading: (store: RootState) => boolean = (store) =>
  store.profileInfo.isLoading

export const selectProfileInfoError: (store: RootState) => string | null = (store) =>
  store.profileInfo.error

import { createSelector } from '@reduxjs/toolkit'
import { type AuthStatus, type IUserInfoResponse } from '@shared/lib/types/api'
import { type IUser } from '@shared/lib/types/types'
import { type RootState } from '../../store'

//  Эта логика мемоизирует store и убирает ререндеры
// было в документации в варнинге
// https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization

const userInfoSelector = (store: RootState): IUserInfoResponse | null =>
  store.profileInfo.user
export const selectUser: (store: RootState) => IUser | null = createSelector(
  [userInfoSelector],
  (userInfo) => {
    if (!userInfo) return null
    const birthDate = userInfo?.birthDate ? new Date(userInfo.birthDate) : null
    return { ...userInfo, birthDate }
  }
)

export const selectUserStatus: (store: RootState) => AuthStatus = (store) =>
  store.profileInfo.status

export const selectProfileInfoIsLoading: (store: RootState) => boolean = (store) =>
  store.profileInfo.isLoading

export const selectProfileInfoError: (store: RootState) => string | null = (store) =>
  store.profileInfo.error

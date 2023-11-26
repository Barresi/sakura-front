import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserNotifications } from '@src/api/notifications/notifications'
import { type IGetUserNotificationsResponse } from '@src/types/api'

export const getUserNotificationsThunk = createAsyncThunk<IGetUserNotificationsResponse>(
  'notifications/getNotifications',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserNotifications()
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

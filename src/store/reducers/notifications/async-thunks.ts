import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserNotifications } from '@src/api/notifications/notifications'
import { type IGetUserNotificationsResponse } from '@src/types/api'
import { AxiosError } from 'axios'

export const getUserNotificationsThunk = createAsyncThunk<IGetUserNotificationsResponse>(
  'notifications/getNotifications',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserNotifications()
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data.msg) {
        return rejectWithValue(err.response.data.msg)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

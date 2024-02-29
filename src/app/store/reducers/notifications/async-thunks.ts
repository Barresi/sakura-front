import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getUserNotifications,
  readUserNotifications
} from '@shared/api/notifications/notifications'
import {
  type IGetUserNotificationsResponse,
  type IReadUserNotificationsResponse
} from '@shared/lib/types/api'
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

export const readUserNotificationsThunk = createAsyncThunk<
  IReadUserNotificationsResponse,
  string[]
>('notifications/readNotifications', async (id, { rejectWithValue }) => {
  try {
    return await readUserNotifications(id)
  } catch (err) {
    if (err instanceof AxiosError && err.response?.data.msg) {
      return rejectWithValue(err.response.data.msg)
    } else {
      return rejectWithValue('Упс, что-то пошло не так')
    }
  }
})

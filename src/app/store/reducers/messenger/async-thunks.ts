import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserChatsRequest } from '@src/shared/api/messenger/messenger'
import { type IGetUserChatsResponse } from '@src/shared/lib/types/api'
import { AxiosError } from 'axios'

export const getUserChatsThunk = createAsyncThunk<IGetUserChatsResponse>(
  'messenger/getUserChats',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserChatsRequest()
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data.msg) {
        return rejectWithValue(err.response.data.msg)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

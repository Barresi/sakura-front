import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPosts } from '@shared/api/news/news'
import { type IGetPostsResponse } from '@shared/lib/types/api'
import { AxiosError } from 'axios'

export const getAllPostsThunk = createAsyncThunk<IGetPostsResponse>(
  'news/getAllPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllPosts()
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data.msg) {
        return rejectWithValue(err.response.data.msg)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getFriends } from '@src/api/friends/friends'
import { getReceived, getSended } from '@src/api/friends/requests'
import { getAllUsers } from '@src/api/friends/users'
import {
  type IAllUsersResponse,
  type IFriendsResponse,
  type IReceivedResponse,
  type ISendedResponse
} from '@src/types/api'

export const getAllUsersThunk = createAsyncThunk<IAllUsersResponse>(
  'friends/getAll',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllUsers()
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

export const getFriendsThunk = createAsyncThunk<IFriendsResponse>(
  'friends/getFriends',
  async (_, { rejectWithValue }) => {
    try {
      return await getFriends()
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

export const getReceivedThunk = createAsyncThunk<IReceivedResponse>(
  'friends/getReceived',
  async (_, { rejectWithValue }) => {
    try {
      return await getReceived()
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

export const getSendedThunk = createAsyncThunk<ISendedResponse>(
  'friends/getSended',
  async (_, { rejectWithValue }) => {
    try {
      return await getSended()
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

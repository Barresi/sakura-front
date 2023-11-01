import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getUserInfo,
  loginRequest,
  logoutRequest,
  registrationRequest
} from '@src/api/auth/auth'
import {
  type ILoginResponse,
  type IProtectedInfoResponse,
  type IRegistrationResponse
} from '@src/types/api'
import { type ILoginForm, type IRegistrationForm } from '@src/types/forms'

export const loginThunk = createAsyncThunk<ILoginResponse, ILoginForm>(
  'profileInfo/login',
  async (form, { rejectWithValue }) => {
    try {
      return await loginRequest(form)
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

export const registrationThunk = createAsyncThunk<
IRegistrationResponse,
IRegistrationForm
>('profileInfo/regist', async (form, { rejectWithValue }) => {
  try {
    return await registrationRequest(form)
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message)
    } else {
      return rejectWithValue('Упс, что-то пошло не так')
    }
  }
})

export const logoutThunk = createAsyncThunk(
  'profileInfo/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await logoutRequest()
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

export const protectedInfoThunk = createAsyncThunk<IProtectedInfoResponse>(
  'profileInfo/protectedInfo',
  async (_, { rejectWithValue }) => {
    try {
      await getUserInfo()
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

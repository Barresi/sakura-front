import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getUserInfo,
  loginRequest,
  logoutRequest,
  registrationRequest
} from '@src/shared/api/auth/auth'
import {
  type IUserInfoResponse,
  type ILoginResponse,
  type IRegistrationResponse,
  type ILogoutResponse
} from '@src/shared/lib/types/api'
import { type ILoginForm, type IRegistrationForm } from '@src/shared/lib/types/forms'
import { AxiosError } from 'axios'

export const loginThunk = createAsyncThunk<ILoginResponse, ILoginForm>(
  'profileInfo/login',
  async (form, { rejectWithValue }) => {
    try {
      return await loginRequest(form)
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data.msg) {
        return rejectWithValue(err.response.data.msg)
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
    if (err instanceof AxiosError && err.response?.data.msg) {
      return rejectWithValue(err.response.data.msg)
    } else {
      return rejectWithValue('Упс, что-то пошло не так')
    }
  }
})

export const logoutThunk = createAsyncThunk<ILogoutResponse>(
  'profileInfo/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await logoutRequest()
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data.msg) {
        return rejectWithValue(err.response.data.msg)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

export const userInfoThunk = createAsyncThunk<IUserInfoResponse>(
  'profileInfo/userInfo',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserInfo()
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data.msg) {
        return rejectWithValue(err.response.data.msg)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginRequest, logoutRequest, registrationRequest } from '@shared/api/auth/auth'
import {
  editUserInfo,
  editUserSecurityInfo,
  getUserInfo
} from '@shared/api/user-info/user-info'
import {
  type IEditUserInfoResponse,
  type IEditUserSecurityInfoResponse,
  type IGetUserInfoResponse,
  type ILoginResponse,
  type ILogoutResponse,
  type IRegistrationResponse
} from '@shared/lib/types/api'
import {
  type IEditUserInfoForm,
  type IEditUserSecurityInfoForm,
  type ILoginForm,
  type IRegistrationForm
} from '@shared/lib/types/forms'
import { AxiosError } from 'axios'

// Todo убрать ошибки ts в async thunks

export const loginThunk = createAsyncThunk<ILoginResponse, ILoginForm>(
  'profileInfo/login',
  async (form, { rejectWithValue }) => {
    try {
      return await loginRequest(form)
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.data.msg) return rejectWithValue(err.response.data.msg)
        if (err.message) return rejectWithValue(err.message)
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
    if (err instanceof AxiosError) {
      if (err.response?.data.msg) return rejectWithValue(err.response.data.msg)
      if (err.message) return rejectWithValue(err.message)
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
      if (err instanceof AxiosError) {
        if (err.response?.data.msg) return rejectWithValue(err.response.data.msg)
        if (err.message) return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

export const userInfoThunk = createAsyncThunk<IGetUserInfoResponse>(
  'profileInfo/userInfo',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserInfo()
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.data.msg) return rejectWithValue(err.response.data.msg)
        if (err.message) return rejectWithValue(err.message)
      } else {
        return rejectWithValue('Упс, что-то пошло не так')
      }
    }
  }
)

export const editUserInfoThunk = createAsyncThunk<
  IEditUserInfoResponse,
  IEditUserInfoForm
>('profileInfo/editUserInfo', async (form, { rejectWithValue }) => {
  try {
    return await editUserInfo(form)
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.msg) return rejectWithValue(err.response.data.msg)
      if (err.message) return rejectWithValue(err.message)
    } else {
      return rejectWithValue('Упс, что-то пошло не так')
    }
  }
})

export const editUserSecurityInfoThunk = createAsyncThunk<
  IEditUserSecurityInfoResponse,
  IEditUserSecurityInfoForm
>('profileInfo/editUserSecurityInfo', async (form, { rejectWithValue }) => {
  try {
    return await editUserSecurityInfo(form)
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.msg) return rejectWithValue(err.response.data.msg)
      if (err.message) return rejectWithValue(err.message)
    } else {
      return rejectWithValue('Упс, что-то пошло не так')
    }
  }
})

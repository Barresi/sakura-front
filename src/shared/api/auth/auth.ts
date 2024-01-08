import { api, apiWithAuth } from '../api'
import { type ILoginForm, type IRegistrationForm } from '@src/shared/lib/types/forms'
import { setCookie } from '@src/shared/lib/cookie/cookie'
import {
  type IRegistrationResponse,
  type ILoginResponse,
  type IRefreshResponse,
  type IUserInfoResponse,
  type ILogoutResponse
} from '@src/shared/lib/types/api'

export const loginRequest = async (form: ILoginForm): Promise<ILoginResponse> => {
  const res = await api.post<ILoginResponse>('/auth/login', form)

  return res.data
}

export const registrationRequest = async (
  form: IRegistrationForm
): Promise<IRegistrationResponse> => {
  const res = await api.post<IRegistrationResponse>('/auth/signup', form)

  return res.data
}

export const logoutRequest = async (): Promise<ILogoutResponse> => {
  const res = await api.post<ILogoutResponse>('auth/logout', {
    refreshToken: localStorage.getItem('refreshToken')
  })

  return res.data
}

export const refreshRequest = async (): Promise<IRefreshResponse> => {
  const res = await api.post<IRefreshResponse>('auth/token', {
    refreshToken: localStorage.getItem('refreshToken')
  })

  setCookie('accessToken', res.data.accessToken)
  localStorage.setItem('refreshToken', res.data.refreshToken)

  return res.data
}

export const getUserInfo = async (): Promise<IUserInfoResponse> => {
  const res = await apiWithAuth.get<IUserInfoResponse>('auth/userInfo')

  return res.data
}

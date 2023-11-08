import { api, apiWithAuth, errorHandler } from '../api'
import { type ILoginForm, type IRegistrationForm } from '@src/types/forms'
import { setCookie } from '@src/utils/cookie'
import {
  type IRegistrationResponse,
  type ILoginResponse,
  type IRefreshResponse,
  type IUserInfoResponse,
  type ILogoutResponse
} from '@src/types/api'

export const loginRequest = async (form: ILoginForm): Promise<ILoginResponse> => {
  const res = await api.post('/auth/login', form).catch(errorHandler)
  return res.data
}

export const registrationRequest = async (
  form: IRegistrationForm
): Promise<IRegistrationResponse> => {
  const res = await api.post('/auth/signup', form).catch(errorHandler)
  return res.data
}

export const logoutRequest = async (): Promise<ILogoutResponse> => {
  const res = await api
    .post('auth/logout', { refreshToken: localStorage.getItem('refreshToken') })
    .catch(errorHandler)
  return res.data
}

export const refreshRequest = async (): Promise<IRefreshResponse> => {
  const res = await api
    .post('auth/token', { refreshToken: localStorage.getItem('refreshToken') })
    .catch(errorHandler)

  setCookie('accessToken', res.data.accessToken)
  localStorage.setItem('refreshToken', res.data.refreshToken)

  return res.data
}

export const getUserInfo = async (): Promise<IUserInfoResponse> => {
  const res = await apiWithAuth.get('auth/userInfo').catch(errorHandler)

  return res.data
}

import { setCookie } from '../../lib/cookie'
import {
  type ILoginResponse,
  type ILogoutResponse,
  type IRefreshResponse,
  type IRegistrationResponse
} from '../../lib/types/api'
import { type ILoginForm, type IRegistrationForm } from '../../lib/types/forms'
import { api } from '../api'

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

import axios from 'axios'
import { errorHandler, requestWithRefreshToken } from '../api'
import { type ILoginForm, type IRegistrationForm } from '@src/types/forms'
import { getCookie, setCookie } from '@src/utils/cookie'
import {
  type IRegistrationResponse,
  type ILoginResponse,
  type IRefreshResponse,
  type IUserInfoResponse,
  type ILogoutResponse
} from '@src/types/api'

export const loginRequest = async (form: ILoginForm): Promise<ILoginResponse> => {
  const res = await axios.post('/auth/login', form).catch(errorHandler)
  return res.data
}

export const registrationRequest = async (
  form: IRegistrationForm
): Promise<IRegistrationResponse> => {
  const res = await axios.post('/auth/signup', form).catch(errorHandler)
  return res.data
}

export const logoutRequest = async (): Promise<ILogoutResponse> => {
  const res = await axios
    .post('auth/logout', { refreshToken: localStorage.getItem('refreshToken') })
    .catch(errorHandler)
  return res.data
}

let isRefreshing = false

export const refreshRequest = async (): Promise<IRefreshResponse | undefined> => {
  if (isRefreshing) return

  isRefreshing = true

  const res = await axios
    .post('auth/token', { refreshToken: localStorage.getItem('refreshToken') })
    .catch(errorHandler)
    .finally(() => (isRefreshing = false))

  setCookie('accessToken', res.data.accessToken)
  localStorage.setItem('refreshToken', res.data.refreshToken)

  return res.data
}

export const getUserInfo = async (): Promise<IUserInfoResponse> => {
  const userInfoRequest = async (): Promise<IUserInfoResponse> => {
    const res = await axios
      .get('auth/userInfo', {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)
    return res.data
  }

  return await requestWithRefreshToken(userInfoRequest)
}

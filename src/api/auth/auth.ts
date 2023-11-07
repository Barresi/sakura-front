import { URL, api, errorHandler, requestWithRefreshToken } from '../api'
import { type ILoginForm, type IRegistrationForm } from '@src/types/forms'
import { getCookie, setCookie } from '@src/utils/cookie'
import {
  type IRegistrationResponse,
  type ILoginResponse,
  type IRefreshResponse,
  type IUserInfoResponse,
  type ILogoutResponse
} from '@src/types/api'
import axios from 'axios'

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

// let refreshPromise: Promise<any> | null = null

// export const a = async (): Promise<void> => {
//   if (!refreshPromise) {
//     refreshPromise = refreshRequest().finally(() => (refreshPromise = null))
//   }
// }

export const refreshRequest = async (): Promise<IRefreshResponse> => {
  // здесь я использую axios, а не api, тк этот запрос используется в interceptor
  const res = await axios
    .post(`${URL}/auth/token`, { refreshToken: localStorage.getItem('refreshToken') })
    .catch(errorHandler)

  setCookie('accessToken', res.data.accessToken)
  localStorage.setItem('refreshToken', res.data.refreshToken)

  return res.data
}

export const getUserInfo = async (): Promise<IUserInfoResponse> => {
  const res = await api
    .get('auth/userInfo', {
      headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
    })
    .catch(errorHandler)
  return res.data
}

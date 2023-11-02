import axios from 'axios'
import { errorHandler, requestWithRefreshToken } from '../api'
import { type ILoginForm, type IRegistrationForm } from '@src/types/forms'
import { getCookie, setCookie } from '@src/utils/cookie'

export const loginRequest = async (form: ILoginForm) => {
  const res = await axios.post('/auth/login', form).catch(errorHandler)
  return res.data
}

export const registrationRequest = async (form: IRegistrationForm) => {
  const res = await axios.post('/auth/signup', form).catch(errorHandler)
  return res.data
}

export const logoutRequest = async () => {
  const res = await axios
    .post('auth/logout', { refreshToken: localStorage.getItem('refreshToken') })
    .catch(errorHandler)
  return res.data
}

export const refreshRequest = async () => {
  const res = await axios
    .post('auth/token', { refreshToken: localStorage.getItem('refreshToken') })
    .catch(errorHandler)
  setCookie('accessToken', res.data.accessToken)
  localStorage.setItem('refreshToken', res.data.refreshToken)
}

export const getUserInfo = async () => {
  const userInfoRequest = async () => {
    const res = await axios
      .get('auth/userInfo', {
        headers: { Authorization: `Bearer ${getCookie('accessToken')}` }
      })
      .catch(errorHandler)
    return res.data
  }

  return await requestWithRefreshToken(userInfoRequest)
}

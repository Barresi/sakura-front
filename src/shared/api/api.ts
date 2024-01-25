import axios, { AxiosError } from 'axios'
import { getCookie } from '../lib/cookie'
import { refreshRequest } from './auth/auth'

export const URL = import.meta.env.VITE_BACKEND_URL

export const apiWithAuth = axios.create({ baseURL: URL })
export const api = axios.create({ baseURL: URL })

// interceptors

apiWithAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getCookie('accessToken')}`

  return config
})

apiWithAuth.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response) {
      // Запрос был сделан, и сервер ответил кодом состояния, который выходит за пределы 2xx
      if (error.response.status === 403 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
          await refreshRequest()

          return await apiWithAuth.request(error.config)
        } catch (e) {
          throw error
        }
      } else {
        throw error
      }
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      throw new AxiosError(
        'Похоже у нас проблемы с серверами, попробуйте зайти чуть позже'
      )
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      throw new AxiosError('Что-то пошло не так, попробуйте перезагрузить страницу')
    }
  }
)

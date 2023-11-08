import axios from 'axios'
import { refreshRequest } from './auth/auth'
import { getCookie } from '@src/utils/cookie'
import { type IAxiosError } from '@src/types/api'

export const URL = 'http://localhost:5000/api/v1'

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
    if (error.response) {
      // Запрос был сделан, и сервер ответил кодом состояния, который выходит за пределы 2xx
      if (error.response.status === 403) {
        try {
          await refreshRequest()

          return await apiWithAuth.request(error.config)
        } catch (e) {
          throw new Error((e as IAxiosError).response?.data?.msg)
        }
      } else {
        throw new Error(error.response.data?.msg)
      }
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      throw new Error('Похоже у нас проблемы с серверами, попробуйте зайти чуть позже')
    } else {
      // Произошло что-то при настройке запроса, вызвавшее ошибку
      throw new Error('Что-то пошло не так, попробуйте перезагрузить страницу')
    }
  }
)

import axios, { type AxiosError } from 'axios'
import { refreshRequest } from './auth/auth'
import { type IRefreshResponse } from '@src/types/api'
import { setCookie } from '@src/utils/cookie'

export const URL = 'http://localhost:5000/api/v1'

export const api = axios.create({
  baseURL: URL
})

export const errorHandler = (err: AxiosError): never => {
  if (err.response) {
    // Запрос был сделан, и сервер ответил кодом состояния, который выходит за пределы 2xx
    throw new Error(
      // @ts-expect-error не типизирован ответ с сервера, не понимает что такое msg
      err.response.data?.msg ||
        'Похоже у нас проблемы с серверами, попробуйте зайти чуть позже'
    )
  } else if (err.request) {
    // Запрос был сделан, но ответ не получен
    throw new Error(err.request.status)
  } else {
    // Произошло что-то при настройке запроса, вызвавшее ошибку
    throw new Error('Что-то пошло не так, попробуйте перезагрузить страницу')
  }
}

// function requestWithRefreshToken отправляет запрос на получение данных о юзере на сервер
// вместе с access token в заголовке Authorization,
// если запрос падает с ошибкой "Access token устарел ...", то
// обновляется refresh token и повторно отправляется предыдущий запрос
export const requestWithRefreshToken = async <T>(func: () => Promise<T>): Promise<T> => {
  try {
    return await func()
  } catch (err) {
    if ((err as Error).message === 'Access token устарел') {
      await refreshRequest()
      return await func()
    } else {
      throw err
    }
  }
}

let refreshPromise: Promise<any> | null = null

api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 403 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true

      try {
        if (!refreshPromise) {
          refreshPromise = refreshRequest()
        }

        await refreshPromise

        refreshPromise = null

        return await api.request(originalRequest)
      } catch (e) {
        console.log('НЕ АВТОРИЗОВАН')
      }
    }
    throw error
  }
)

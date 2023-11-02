import { type IUser } from './types'

export interface ILoginResponse {
  accessToken: string
  refreshToken: string
  userWithoutPassword: IUser
}
export interface IRegistrationResponse {
  id: number
}
export interface IUserInfoResponse {
  user: IUser
}
export interface IRefreshResponse {
  accessToken: string
  refreshToken: string
}

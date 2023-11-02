import { type FriendsRequestStatus, type IUser } from './types'

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

// Friends api

export interface IFriendsRequestResponse {
  id: number
  fromId: number
  toId: number
  status: FriendsRequestStatus
  createdAt: string
}

export interface IAllUsersResponse {
  users: IUser[]
}

export interface IAddFriendResponse {
  msg: string
}

export interface IFriendsResponse {
  friends: IFriendsRequestResponse[]
}
export interface IDeleteResponse {
  msg: string
}

// Requests api

export interface IReceivedResponse {
  received: IFriendsRequestResponse[]
}
export interface ISendedResponse {
  sended: IFriendsRequestResponse[]
}
export interface IAcceptResponse {
  msg: string

}
export interface IRejectResponse {
  msg: string

}
export interface ICancelResponse {
  msg: string
}

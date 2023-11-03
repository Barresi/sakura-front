import { type IUser } from './types'

export interface INoContentResponse {
  msg: string
}

// Auth api

export enum AuthStatus {
  pending = 'pending',
  authorized = 'authorized',
  notAuthorized = 'not authorized',
}

export interface ILoginResponse {
  accessToken: string
  refreshToken: string
  userWithoutPassword: IUser
}
export interface IRegistrationResponse {
  id: number
}
export interface ILogoutResponse extends INoContentResponse {}
export interface IUserInfoResponse {
  user: IUser
}
export interface IRefreshResponse {
  accessToken: string
  refreshToken: string
}

// Friends api

export enum FriendsRequestStatus {
  pending = 'PENDING',
  accepted = 'ACCEPTED',
  rejected = 'REJECTED',
}

export interface IFriend {
  id: number
  fromId: number
  toId: number
  status: FriendsRequestStatus
  createdAt: string
}

export interface IAllUsersResponse extends Array<IUser> {}
export interface IAddFriendResponse extends INoContentResponse {}
export interface IFriendsResponse extends Array<IFriend> {}
export interface IDeleteResponse extends INoContentResponse {}

// Requests api

export interface IReceivedResponse extends Array<IFriend> {}
export interface ISendedResponse extends Array<IFriend> {}
export interface IAcceptResponse extends INoContentResponse {}
export interface IRejectResponse extends INoContentResponse {}
export interface ICancelResponse extends INoContentResponse {}

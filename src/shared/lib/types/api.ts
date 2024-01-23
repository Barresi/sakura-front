import { type AxiosError } from 'axios'
import { type IUser } from './types'

export interface INoContentResponse {
  msg: string
}
export interface IAxiosError extends AxiosError<{ msg?: string }> {}

// Auth api

export enum AuthStatus {
  pending = 'pending',
  authorized = 'authorized',
  notAuthorized = 'not authorized'
}

export interface ILoginResponse {
  accessToken: string
  refreshToken: string
  userWithoutPassword: IUser
}
export interface IRegistrationResponse {
  id: string
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
  rejected = 'REJECTED'
}

export enum FriendState {
  isFriend = 'isFriend',
  isRequestSended = 'isRequestSended',
  isRequestReceived = 'isRequestReceived',
  isNoFriend = 'isNoFriend'
}

export interface IFriend {
  id: string
  fromId: string
  toId: string
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

// Messenger api

export interface IMessage {
  updatedAt: string
  createdAt: string
  chatId: string
  senderId: string
  text: string
  read: boolean
}

export interface IChat {
  newMessage: {
    senderId: 'string'
    text: 'string'
    chatId: 'string'
    read: true
    createdAt: 'string'
    updatedAt: 'string'
  }
  participants: Array<{ id: string }>
  chatId: string
  unread: number
  createdAt: string
  updatedAt: string
}

export interface ICreateChatResponse {
  chatId: string
}

export interface IGetUserChatsResponse {
  userChats: IChat[]
}

// Notification api

export enum NotificationTypeEnum {
  sendFriendRequest = 'sendFriendRequest',
  acceptFriendRequest = 'acceptFriendRequest',
  rejectFriend = 'rejectFriendRequest',
  getMessage = 'getMessageRequest'
}

export interface INotification {
  id: 'string'
  type: NotificationTypeEnum
  content: 'string'
  read: false
  createdAt: 'string'
  updatedAt: 'string'
}
export interface IGetUserNotificationsResponse {
  notifications: INotification[]
}

// UserInfo api

export interface IEditUserInfoResponse {
  updatedFields: {
    username: 'string'
    firstName: 'string'
    lastName: 'string'
    city: 'string'
    birthDate: 'string'
    gender: 'string'
    description: 'string'
  }
}

export interface IEditUserSecurityInfo {
  msg: string
}

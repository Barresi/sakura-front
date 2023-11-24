import { type IMessage } from './api'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
}

export interface IFormattedMessages {
  date: string
  chats: IMessage[]
}

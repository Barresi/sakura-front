import { createContext } from 'react'
import socketio, { type Socket } from 'socket.io-client'

export const getSocket = (id: string): Socket => {
  return socketio(import.meta.env.VITE_BACKEND_DOMEN, { query: { userId: id } })
}

export const SocketContext = createContext<{
  socket: ReturnType<typeof socketio> | null
}>({
  socket: null
})

export enum SocketEvents {
  JOIN_CHAT_EVENT = 'joinChat',
  LEAVE_CHAT_EVENT = 'leaveChat',
  SEND_MESSAGE_EVENT = 'sendMessage',
  GET_MESSAGE_EVENT = 'getMessage',
  GET_HISTORY_EVENT = 'getHistory',
  NTF_USER_SEND_FRIEND_EVENT = 'ntfSendFriend',
  NTF_USER_ACCEPT_FRIEND_EVENT = 'ntfAcceptFriend',
  NTF_USER_REJECT_FRIEND_EVENT = 'ntfRejectFriend',
  NTF_GET_MESSAGE_EVENT = 'ntfGetMessage'
}

import { createContext } from 'react'
import socketio, { type Socket } from 'socket.io-client'

export const getSocket = (id: string): Socket => {
  return socketio('http://localhost:5000', { query: { userId: id } })
}

export const SocketContext = createContext<{
  socket: ReturnType<typeof socketio> | null
}>({
  socket: null
})

export const JOIN_CHAT_EVENT = 'joinChat'
export const LEAVE_CHAT_EVENT = 'leaveChat'
export const SEND_MESSAGE_EVENT = 'sendMessage'
export const GET_MESSAGE_EVENT = 'getMessage'
export const GET_HISTORY_EVENT = 'getHistory'

export const NTF_USER_SEND_FRIEND_REQUEST = 'ntfSendFriendRequest'
export const NTF_USER_ACCEPT_FRIEND_REQUEST = 'ntfAcceptFriendRequest'
export const NTF_USER_REJECT_FRIEND_REQUEST = 'ntfRejectFriendRequest'
export const NTF_GET_MESSAGE_EVENT = 'ntfGetMessage'

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

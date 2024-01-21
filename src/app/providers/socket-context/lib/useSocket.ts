import { useContext } from 'react'
import { type Socket } from 'socket.io-client'
import { SocketContext } from './socket-context'

export interface useSocketResult {
  socket: Socket | null
}

export const useSocket = (): useSocketResult => useContext(SocketContext)

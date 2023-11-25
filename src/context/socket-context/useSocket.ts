import { useContext } from 'react'
import { SocketContext } from './socket-context'
import { type Socket } from 'socket.io-client'

export interface useSocketResult {
  socket: Socket | null
}

export const useSocket = (): useSocketResult => useContext(SocketContext)

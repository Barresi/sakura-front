import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useEffect, useState, type FC } from 'react'
import type socketio from 'socket.io-client'
import { SocketContext, getSocket } from '../lib/socket-context'

interface ISocketProviderProps {
  children: React.ReactNode
}

const SocketProvider: FC<ISocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<ReturnType<typeof socketio> | null>(null)
  const { id } = useAppSelector(selectUser)

  useEffect(() => {
    if (id) {
      setSocket(getSocket(id))
    } else {
      setSocket(null)
    }
  }, [id])

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}

export default SocketProvider

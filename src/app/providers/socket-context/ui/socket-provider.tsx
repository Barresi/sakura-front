import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { useEffect, useState, type FC } from 'react'
import type socketio from 'socket.io-client'
import { SocketContext, getSocket } from '../lib/socket-context'

interface ISocketProviderProps {
  children: React.ReactNode
}

const SocketProvider: FC<ISocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<ReturnType<typeof socketio> | null>(null)
  const user = useAppSelector(selectUser)

  useEffect(() => {
    if (user?.id) {
      setSocket(getSocket(user?.id))
    } else {
      setSocket(null)
    }
  }, [user?.id])

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}

export { SocketProvider }

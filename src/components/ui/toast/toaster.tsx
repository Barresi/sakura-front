import {
  Toast,
  ToastClose,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@src/components/ui/toast/toast'
import { useToast } from './use-toast'
import { type FC } from 'react'
import { useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers } from '@src/store/reducers/friends/selectors'
import UserAvatar from '../avatar/avatar'

export const renderType = {
  sendFriend: 'подал заявку в друзья',
  acceptFriend: 'принял Вашу заявку в друзья',
  rejectFriend: 'отклонил Вашу заявку в друзья',
  getMessage: 'написал вам личное сообщение'
}

const Toaster: FC = () => {
  const { toasts } = useToast()
  const users = useAppSelector(selectAllUsers)

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, action, notificationType, userId }) {
        const user = users.filter((user) => user.id === userId)[0]
        return (
          <Toast className='' key={id}>
            <div className='w-full grid gap-1'>
              <div className='flex items-center justify-between mb-[5px]'>
                {title ? <ToastTitle className=''>{title}</ToastTitle> : <div></div>}
                <ToastClose />
              </div>
              <div className='flex items-center gap-[15px]'>
                <UserAvatar />
                <div className='flex flex-col gap-[5px]'>
                  <span className='font-bold text-twitter'>
                    {user?.firstName} {user?.lastName}
                  </span>
                  <span>{renderType[notificationType as keyof typeof renderType]}</span>
                </div>
              </div>
            </div>
            {action}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
export default Toaster

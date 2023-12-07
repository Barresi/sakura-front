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
  sendFriendRequest: 'подал заявку в друзья',
  acceptFriendRequest: 'принял Вашу заявку в друзья',
  rejectFriendRequest: 'отклонил Вашу заявку в друзья',
  getMessage: 'написал вам личное сообщение'
}

const Toaster: FC = () => {
  const { toasts } = useToast()
  const users = useAppSelector(selectAllUsers)

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        action,
        notificationType,
        userId,
        description
      }) {
        const user = users.filter((user) => user.id === userId)[0]

        console.log(renderType[notificationType as keyof typeof renderType])

        return (
          <Toast className='' key={id}>
            <div className='w-full grid gap-1'>
              <div className='flex items-center justify-between mb-[5px]'>
                {title ? <ToastTitle className=''>{title}</ToastTitle> : <div></div>}
                <ToastClose />
              </div>
              <div className='flex items-center gap-[15px]'>
                {notificationType ? (
                  <>
                    <UserAvatar />
                    <div className='flex flex-col gap-[5px]'>
                      <span className='font-bold text-twitter'>
                        {user?.firstName} {user?.lastName}
                      </span>
                      <span>
                        {renderType[notificationType as keyof typeof renderType]}
                      </span>
                    </div>
                  </>
                ) : (
                  <span>{description}</span>
                )}
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

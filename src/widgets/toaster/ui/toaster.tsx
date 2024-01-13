import { friendActions } from '@shared/lib/friend-actions'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { UserAvatar } from '@shared/ui/user-avatar'
import { selectAllUsers } from '@store/reducers/friends/selectors'
import { type FC } from 'react'
import { useToast } from '../lib/use-toast'
import {
  Toast,
  ToastClose,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from './toast/toast'

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
                        {friendActions[notificationType as keyof typeof friendActions]}
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
export { Toaster }

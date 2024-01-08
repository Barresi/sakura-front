import {
  Toast,
  ToastClose,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@src/widgets/toaster/ui/toast/toast'
import { useToast } from '../../lib/use-toast'
import { type FC } from 'react'
import { useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import { selectAllUsers } from '@src/app/store/reducers/friends/selectors'
import UserAvatar from '../../../../shared/ui/avatar/avatar'
import { NotificationTypeEnum } from '@src/shared/lib/types/api'

export const renderType = {
  [NotificationTypeEnum.sendFriendRequest]: 'Подал Вам заявку в друзья',
  [NotificationTypeEnum.acceptFriendRequest]: 'Принял Вашу заявку в друзья',
  [NotificationTypeEnum.rejectFriend]: 'Отклонил Вашу заявку в друзья',
  [NotificationTypeEnum.getMessage]: 'Написал Вам личное сообщение'
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

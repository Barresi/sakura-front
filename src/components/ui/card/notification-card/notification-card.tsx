import { type FC } from 'react'
import Card from '../card'
import UserAvatar from '@ui/avatar/avatar'
import { cn } from '@utils/utils'
import { type NotificationType } from '@src/types/api'
import { useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers } from '@src/store/reducers/friends/selectors'

export interface RequestCardProps {
  img?: string
  id?: string
  date?: string
  type?: NotificationType
  className?: string
}

export const textForNotificationType = {
  sendFriendRequest: 'подал заявку в друзья',
  acceptFriendRequest: 'принял Вашу заявку в друзья',
  rejectFriendRequest: 'отклонил Вашу заявку в друзья',
  getMessage: 'написал вам личное сообщение'
}

const NotificationCard: FC<RequestCardProps> = ({ className, date, id, type }) => {
  const user = useAppSelector(selectAllUsers).filter((user) => user.id === id)[0]

  return (
    <Card className={cn('block', className)}>
      <div className='flex items-center gap-[15px]'>
        <UserAvatar className='w-[60px] h-[60px]' />

        <div className='flex flex-col gap-[5px]'>
          <h3 className='flex flex-col lg:flex-row lg:items-center gap-[5px] leading-6 '>
            <span className='font-bold text-signalBlack dark:text-darkWhite'>
              {user?.firstName} {user?.lastName}
            </span>
            <span className='text-darkElectricBlue'>
              {textForNotificationType[type as keyof typeof textForNotificationType]}
            </span>
          </h3>
          {date ? (
            <span className='leading-6 text-signalBlack dark:text-darkWhite'>{date}</span>
          ) : null}
        </div>
      </div>
    </Card>
  )
}

export default NotificationCard

import { type FC } from 'react'
import Card from '../card'
import UserAvatar from '@ui/avatar/avatar'
import { cn } from '@utils/utils'
import { type NotificationType } from '@src/types/api'
import { useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers } from '@src/store/reducers/friends/selectors'

export interface RequestCardProps {
  img?: string
  name?: string
  date?: string
  type?: NotificationType
  className?: string
}

const text = {
  sendFriendRequest: 'Подал заявку в друзья',
  acceptFriendRequest: 'Принял Вашу заявку в друзья',
  rejectFriendRequest: 'Отклонил Вашу заявку в друзья'
}

const NotificationCard: FC<RequestCardProps> = ({ className, date, name, type }) => {
  const user = useAppSelector(selectAllUsers).filter((user) => user.id === name)[0]

  return (
    <Card className={cn('block', className)}>
      <div className='flex items-center gap-[15px]'>
        <UserAvatar className='w-[60px] h-[60px]' />

        <div>
          <h3 className='leading-6 text-[#55677D]'>
            <span className='font-bold text-liked-foreground flex flex-col lg:flex-row'>
              {user?.firstName} {user?.lastName}
            </span>{' '}
            {text[type as keyof typeof text]}
          </h3>
          <span className='leading-6 text-liked-dateForeground'>{date}</span>
        </div>
      </div>
    </Card>
  )
}

export default NotificationCard

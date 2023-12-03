import { type FC } from 'react'
import UserAvatar from '../../avatar/avatar'
import { type NotificationType } from '@src/types/api'
import { useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers } from '@src/store/reducers/friends/selectors'
import { textForNotificationType } from '../notification-card/notification-card'

interface ISimpleNotificationCard {
  id?: string
  type: NotificationType
}

const SimpleNotificationCard: FC<ISimpleNotificationCard> = ({ id, type }) => {
  const user = useAppSelector(selectAllUsers).filter((user) => user.id === id)[0]

  return (
    <div className='flex items-center gap-[15px]'>
      <UserAvatar />
      <div className='flex flex-col gap-[5px]'>
        <span className='font-bold text-twitter'>
          {user?.firstName} {user?.lastName}
        </span>
        <span>
          {textForNotificationType[type as keyof typeof textForNotificationType]}
        </span>
      </div>
    </div>
  )
}

export default SimpleNotificationCard

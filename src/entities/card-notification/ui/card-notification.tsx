import { friendActions } from '@shared/lib/friend-actions'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
import { type NotificationTypeEnum } from '@shared/lib/types/api'
import { Card } from '@shared/ui/card'
import { UserAvatar } from '@shared/ui/user-avatar'
import { selectAllUsers } from '@store/reducers/friends/selectors'
import { type FC } from 'react'

interface ICardNotificationProps {
  img?: string
  id?: string
  date?: string
  type?: NotificationTypeEnum
  className?: string
}

const CardNotification: FC<ICardNotificationProps> = ({ className, date, id, type }) => {
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
              {friendActions[type as keyof typeof friendActions]}
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

export { CardNotification }

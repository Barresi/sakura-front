import { friendActions } from '@shared/lib/friend-actions'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
import { type NotificationTypeEnum } from '@shared/lib/types/api'
import { Card } from '@shared/ui/card'
import { LinkName } from '@shared/ui/link-name'
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
  const user = useAppSelector(selectAllUsers).find((user) => user.id === id)

  return (
    <Card className={cn('', className)}>
      <div className='flex items-center gap-[15px]'>
        <div className='self-start'>
          <UserAvatar
            className='w-[60px] h-[60px] '
            src={user?.avatar || null}
            link={id}
          />
        </div>

        <div className='flex flex-col gap-[5px]'>
          <h3 className='flex flex-col md:flex-row lg:items-center gap-[5px] leading-6 '>
            <LinkName
              link={user?.id}
              className='font-bold text-signalBlack dark:text-darkWhite'
            >
              {user?.firstName} {user?.lastName}
            </LinkName>
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

import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
import { parseDateToMonth } from '@shared/lib/parse-date'
import { type IChat } from '@shared/lib/types/api'
import { Badge } from '@shared/ui/badge'
import { Card } from '@shared/ui/card'
import { UserAvatar } from '@shared/ui/user-avatar'
import { selectAllUsers } from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'

interface ICardMessageProps extends IChat {
  className?: string
}

const CardMessage: FC<ICardMessageProps> = ({
  className,
  participants,
  newMessage,
  unread,
  updatedAt
}) => {
  // Эта логика нужна чтобы найти объект друга, с которым у вас есть чат
  const user = useAppSelector(selectUser)
  const allUsers = useAppSelector(selectAllUsers)
  const friendId = participants.find((item) => item.id !== user?.id)?.id
  const friend = allUsers.find((item) => item.id === friendId)
  return (
    <Card
      className={cn(
        'flex items-center justify-between cursor-pointer gap-[15px] border-b-0',
        className
      )}
    >
      <UserAvatar className='w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]' />

      <div className='flex-1'>
        <h3 className='font-bold leading-6 whitespace-nowrap'>{`${friend?.firstName} ${friend?.lastName}`}</h3>
        <span className='w-[120px] lg:w-[150px] block leading-6 whitespace-nowrap overflow-hidden text-ellipsis'>
          {newMessage?.text}
        </span>
      </div>

      <div className='flex flex-col self-start items-center gap-[5px] mt-[10px]'>
        <span className='text-darkElectricBlue whitespace-nowrap'>
          {parseDateToMonth(newMessage?.createdAt || updatedAt)}
        </span>
        {unread ? <Badge>{unread}</Badge> : null}
      </div>
    </Card>
  )
}

export { CardMessage }

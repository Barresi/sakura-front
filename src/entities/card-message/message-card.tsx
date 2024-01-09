import { type FC } from 'react'
import { cn } from '@src/shared/lib/merge-classes'
import Card from '../../shared/ui/card/card'
import UserAvatar from '../../shared/ui/avatar/avatar'
import { type IChat } from '@src/shared/lib/types/api'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import { selectUser } from '@src/app/store/reducers/profileInfo/selectors'
import { selectAllUsers } from '@src/app/store/reducers/friends/selectors'
import { Badge } from '@src/shared/ui/badge/badge'
import { parseDateToMonth } from '@src/shared/lib/parse-date'

export interface IMessageCardProps extends IChat {
  className?: string
}

const MessageCard: FC<IMessageCardProps> = ({
  className,
  participants,
  chatId,
  newMessage,
  unread,
  updatedAt
}) => {
  // Эта логика нужна чтобы найти объект друга, с которым у вас есть чат
  const { id: userId } = useAppSelector(selectUser)
  const allUsers = useAppSelector(selectAllUsers)
  const friendId = participants.find((item) => item.id !== userId)?.id
  const friend = allUsers.find((item) => item.id === friendId)
  return (
    <NavLink
      to={chatId}
      className={({ isActive }) =>
        isActive ? '[&>div]:bg-ghostlyWhite [&>div]:dark:bg-brownBlack' : ''
      }
    >
      <Card className={cn('flex items-center justify-between cursor-pointer', className)}>
        <div className='flex items-center gap-[15px]'>
          <UserAvatar className='w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]' />
          <div>
            <h3 className='font-bold leading-6 whitespace-nowrap'>{`${friend?.firstName} ${friend?.lastName}`}</h3>
            <span className='w-[120px] lg:w-[150px] block leading-6 whitespace-nowrap overflow-hidden text-ellipsis'>
              {newMessage?.text}
            </span>
          </div>
        </div>

        <div className='flex flex-col self-start items-center gap-[5px] mt-[10px]'>
          <span className='text-darkElectricBlue whitespace-nowrap'>
            {parseDateToMonth(newMessage?.createdAt || updatedAt)}
          </span>
          {unread ? <Badge>{unread}</Badge> : null}
        </div>
      </Card>
    </NavLink>
  )
}

export default MessageCard

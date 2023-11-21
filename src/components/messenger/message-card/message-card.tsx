import { type FC } from 'react'
import { cn, parseDateToMonth } from '@utils/utils'
import Card from '../../ui/card/card'
import UserAvatar from '../../ui/avatar/avatar'
import { type IChat } from '@src/types/api'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '@src/hooks/store-hooks'
import { selectUser } from '@src/store/reducers/profileInfo/selectors'
import { selectAllUsers } from '@src/store/reducers/friends/selectors'

export interface IMessageCardProps extends IChat {
  className?: string
}

const MessageCard: FC<IMessageCardProps> = ({
  className,
  id,
  participants,
  messages
}) => {
  // Эта логика нужна чтобы найти объект друга, с которым у вас есть чат
  const { id: userId } = useAppSelector(selectUser)
  const allUsers = useAppSelector(selectAllUsers)
  const friendId = participants.find((item) => item.id !== userId)?.id
  const friend = allUsers.find((item) => item.id === friendId)
  return (
    <NavLink
      to={id}
      className={({ isActive }) => (isActive ? '[&>div]:bg-message-hover' : '')}
    >
      <Card className={cn('flex items-center justify-between cursor-pointer', className)}>
        <div className='flex items-center gap-[15px]'>
          <UserAvatar className='w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]' />
          <div>
            <h3 className='font-bold leading-6'>{`${friend?.firstName} ${friend?.lastName}`}</h3>
            <span className='w-[120px] lg:w-[150px] block leading-6 whitespace-nowrap overflow-hidden text-ellipsis'>
              {messages[0].text}
            </span>
          </div>
        </div>

        <div className='flex flex-col  self-start gap-[5px]'>
          <span className='text-[#55677D]'>
            {parseDateToMonth(messages[0].createdAt)}
          </span>
        </div>
      </Card>
    </NavLink>
  )
}

export default MessageCard

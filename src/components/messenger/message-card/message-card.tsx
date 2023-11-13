import { type FC } from 'react'
import { cn } from '@utils/utils'
import Card from '../../ui/card/card'
import UserAvatar from '../../ui/avatar/avatar'
import { type IChat } from '@src/types/api'
import { NavLink } from 'react-router-dom'

export interface IMessageCardProps extends IChat {
  className?: string
}

const MessageCard: FC<IMessageCardProps> = ({ className, chatId }) => {
  return (
    <NavLink
      to={chatId}
      className={({ isActive }) => (isActive ? '[&>div]:bg-message-hover' : '')}
    >
      <Card className={cn('flex items-center justify-between cursor-pointer', className)}>
        <div className='flex items-center gap-[15px]'>
          <UserAvatar className='w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]' />
          <div>
            <h3 className='font-bold leading-6'>{`хардкод`}</h3>
            <span className='w-[120px] lg:w-[150px] block leading-6 whitespace-nowrap overflow-hidden text-ellipsis'>
              {'Пока хардкод текст'}
            </span>
          </div>
        </div>

        <div className='flex flex-col  self-start gap-[5px]'>
          <span className='text-[#55677D]'>{'хардкод'}</span>
        </div>
      </Card>
    </NavLink>
  )
}

export default MessageCard

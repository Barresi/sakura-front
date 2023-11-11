import { type FC } from 'react'
import { Badge } from '@src/components/ui/badge/badge'
import { cn } from '@utils/utils'

import Card from '../../ui/card/card'
import UserAvatar from '../../ui/avatar/avatar'

export interface IMessageCardProps {
  className?: string
  data: {
    img: string
    name: string
    message?: string
    date?: string
    badge?: number | string
  }
}

const MessageCard: FC<IMessageCardProps> = ({
  className,
  data: { img, name, message, date, badge }
}) => {
  return (
    <Card className={cn('flex items-center justify-between cursor-pointer', className)}>
      <div className='flex items-center gap-[15px]'>
        <UserAvatar src={img} className='w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]' />
        <div>
          <h3 className='font-bold leading-6'>{name}</h3>
          <span className='w-[120px] lg:w-[150px] block leading-6 whitespace-nowrap overflow-hidden text-ellipsis'>
            {message}
          </span>
        </div>
      </div>

      <div className='flex flex-col  self-start gap-[5px]'>
        <span className='text-[#55677D]'>{date}</span>
        {badge && <Badge className='self-end'>{badge}</Badge>}
      </div>
    </Card>
  )
}

export default MessageCard

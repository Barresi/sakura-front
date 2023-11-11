import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@utils/utils'
import UserAvatar from '@src/components/ui/avatar/avatar'
import Card from '../card'

export interface ILikedCardProps {
  img: string
  name: string
  date?: string
  link?: string
  className?: string
}

const LikedCard: FC<ILikedCardProps> = ({ className, img, name, date, link }) => {
  return (
    <Card className={cn('', className)}>
      <div className='flex gap-[15px] items-start lg:items-center'>
        <UserAvatar src={img} className='w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]' />
        <div>
          <h3 className='leading-6 text-[#55677D] flex flex-col lg:flex-row'>
            <span className='font-bold text-liked-foreground mr-1'>{name}</span>
            <span className='mr-1 text-normal'>оценил вашу</span>
            <Link className='text-[#4791FF] hover:underline' to='/'>
              фотографию
            </Link>
          </h3>
          <span className='leading-6 text-liked-dateForeground'>{date}</span>
        </div>
        {link && <UserAvatar src={link} className='w-[67px] h-[67px] rounded-none' />}
      </div>
    </Card>
  )
}

export default LikedCard

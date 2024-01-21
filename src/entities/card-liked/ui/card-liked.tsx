import { cn } from '@shared/lib/merge-classes'
import { Card } from '@shared/ui/card'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'
import { Link } from 'react-router-dom'

interface ICardLikedProps {
  img: string
  name: string
  date?: string
  link?: string
  className?: string
}

const CardLiked: FC<ICardLikedProps> = ({ className, img, name, date, link }) => {
  return (
    <Card className={cn('', className)}>
      <div className='flex gap-[15px] items-start lg:items-center'>
        <UserAvatar src={img} className='w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]' />
        <div>
          <h3 className='leading-6 text-darkElectricBlue flex flex-col lg:flex-row'>
            <span className='font-bold text-liked-foreground mr-1'>{name}</span>
            <span className='mr-1 text-normal'>оценил вашу</span>
            <Link className='text-[#4791FF] hover:underline' to='/'>
              фотографию
            </Link>
          </h3>
          <span className='leading-6 text-signalBlack dark:text-cadet'>{date}</span>
        </div>
        {link && <UserAvatar src={link} className='w-[67px] h-[67px] rounded-none' />}
      </div>
    </Card>
  )
}

export { CardLiked }

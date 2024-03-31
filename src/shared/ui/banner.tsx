import { cn } from '@shared/lib/merge-classes'
import { type FC } from 'react'

import banner from '@assets/banner/default user banner.jpg'

interface IBannerProps {
  className?: string
}

const Banner: FC<IBannerProps> = ({ className }) => {
  return (
    <img
      src={banner}
      alt='banner'
      className={cn('w-full h-full object-cover rounded-[6px]', className)}
    />
  )
}

export { Banner }

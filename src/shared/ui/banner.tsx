import { cn } from '@shared/lib/merge-classes'
import { type FC } from 'react'

import banner from '@assets/banner/default user banner.jpg'

interface IBannerProps {
  className?: string
  src?: string
}

const Banner: FC<IBannerProps> = ({ className, src }) => {
  return (
    <img
      src={src || banner}
      alt='banner'
      className={cn('w-full h-full object-cover rounded-[6px]', className)}
    />
  )
}

export { Banner }

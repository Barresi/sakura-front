import { cn } from '@shared/lib/merge-classes'
import { type FC } from 'react'

import banner from '@assets/banner/default user banner.jpg'
import { URL_BANNERS } from '@shared/lib/url'

interface IBannerProps {
  className?: string
  src: string | null
  isImgNotOnBackend?: boolean
  userId: string
}

const Banner: FC<IBannerProps> = ({ className, src, isImgNotOnBackend, userId }) => {
  const img = isImgNotOnBackend ? src : `${URL_BANNERS}${userId}/${src}`
  return (
    <img /* Todo убрать иконку файла при отсутствии урл */
      src={src && img ? img : banner}
      className={cn('w-full h-full object-cover rounded-[6px]', className)}
    />
  )
}

export { Banner }

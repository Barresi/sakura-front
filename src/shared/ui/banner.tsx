import { cn } from '@shared/lib/merge-classes'
import { type FC } from 'react'

import banner from '@assets/banner/default user banner.jpg'

interface IBannerProps {
  className?: string
  src: string | null
}

const Banner: FC<IBannerProps> = ({ className, src }) => {
  const img = import.meta.env.VITE_BACKEND_DOMEN + '/ftp/banners/' + src || banner
  return (
    <img /* Todo убрать иконку файла при отсутствии урл */
      src={img}
      className={cn('w-full h-full object-cover rounded-[6px]', className)}
    />
  )
}

export { Banner }

import { useWindowSize } from '@src/shared/lib/hooks/useWindowSize'
import { cn } from '@src/shared/lib/merge-classes/merge-classes'
import { type FC } from 'react'

interface IFriendsProps {
  avatars: string[]
}

const Friends: FC<IFriendsProps> = ({ avatars }) => {
  const isMobile = useWindowSize(1024)

  const maxCount = isMobile ? 3 : 5

  const imgClasses = [
    'mr-[-20px] z-[100]',
    'mr-[-20px] z-[90]',
    'mr-[-20px] z-[80]',
    'mr-[-20px] z-[70]',
    'mr-[-0px] z-[60]'
  ]

  const renderImg = (avatars: string[]): JSX.Element[] => {
    return avatars.map((avatar, i) => {
      return (
        <img
          key={i}
          className={cn('w-[50px] h-[50px]', avatars.length > 1 && imgClasses[i])}
          src={avatar}
          alt=''
        />
      )
    })
  }

  return (
    <div className='my-[20px] px-[20px] py-[10px] rounded-[10px] border border-[#f2f2f2] flex items-center justify-between'>
      <span>{avatars.length} друзей</span>

      <div className='flex items-center mr-[20px] lg:mr-0'>
        {renderImg(
          avatars.slice(0, avatars.length > maxCount ? maxCount : avatars.length)
        )}
      </div>
    </div>
  )
}

export default Friends

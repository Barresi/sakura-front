import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { cn } from '@shared/lib/merge-classes'
import { type FC } from 'react'

interface IRowFriendsProps {
  avatars: string[]
}

const RowFriends: FC<IRowFriendsProps> = ({ avatars }) => {
  const isMobile = useWindowSize(1024)

  const maxCount = isMobile ? 3 : 5

  const imgClasses = [
    'mr-[-20px] z-[100]',
    'mr-[-20px] z-[90]',
    'mr-[-20px] z-[80]',
    'mr-[-20px] z-[70]',
    'mr-[-20px] z-[60]'
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
    <div className='w-full px-[20px] py-[10px] rounded-[10px] border border-smokyWhite dark:border-cadet flex items-center justify-between'>
      <span>{avatars.length} друзей</span>

      <div className='flex items-center mr-5'>
        {renderImg(
          avatars.slice(0, avatars.length > maxCount ? maxCount : avatars.length)
        )}
      </div>
    </div>
  )
}

export { RowFriends }

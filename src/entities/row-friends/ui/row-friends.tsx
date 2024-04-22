import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { cn } from '@shared/lib/merge-classes'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

import { useTheme } from '@app/providers/theme-context'
import { Theme } from '@app/providers/theme-context/lib/theme-context'
import avatarLight from '@assets/avatar/default avatar light.svg'
import { icons } from '@shared/lib/button-icons'

interface IRowFriendsProps {
  avatars: Array<string | null> | undefined
}

const RowFriends: FC<IRowFriendsProps> = ({ avatars }) => {
  const { theme } = useTheme()
  const isMobile = useWindowSize(500)

  const maxCount = isMobile ? 3 : 5

  const imgClasses = [
    'z-[1]',
    'mr-[-20px] z-[2]',
    'mr-[-20px] z-[3]',
    'mr-[-20px] z-[4]',
    'mr-[-20px] z-[5]'
  ]

  const renderImg = (avatars: Array<string | null>): JSX.Element[] => {
    return avatars.map((avatar, i) => {
      return (
        <UserAvatar
          key={i}
          className={cn(
            'w-[50px] h-[50px] border-2 rounded-full border-White dark:border-grayBlue',
            avatars.length > 0 && imgClasses[i]
          )}
          src={avatar || avatarLight}
          isImgNotOnBackend={!avatar}
        />
      )
    })
  }

  return (
    <div className='w-full px-[20px] py-[10px] rounded-[10px] border border-smokyWhite dark:border-cadet flex items-center justify-between'>
      <span>{avatars?.length ? `${avatars.length} друзей` : 'Пока нет друзей'}</span>

      <div className='flex items-center  flex-row-reverse'>
        {avatars?.length ? (
          renderImg(
            avatars.slice(0, avatars.length > maxCount ? maxCount : avatars.length)
          )
        ) : (
          <div className='w-[50px] h-[50px] flex items-center justify-center border-2 rounded-full border-smokyWhite dark:border-cadet'>
            {theme === Theme.LIGHT ? icons.noFriendsBlack : icons.noFriendsWhite}
          </div>
        )}
      </div>
    </div>
  )
}

export { RowFriends }

import { useTheme } from '@app/providers/theme-context'
import { Theme } from '@app/providers/theme-context/lib/theme-context'
import { icons } from '@shared/lib/button-icons'
import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { cn } from '@shared/lib/merge-classes'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

interface IRowFriend {
  avatar: string | null
  userId: string | undefined
}

interface IRowFriendsProps {
  friends: IRowFriend[] | undefined
}

const RowFriends: FC<IRowFriendsProps> = ({ friends }) => {
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

  const renderImg = (friends: IRowFriend[]): JSX.Element[] => {
    return friends.map((friend, i) => {
      return (
        <UserAvatar
          key={i}
          userId={friend.userId}
          className={cn(
            'w-[50px] h-[50px] border-2 rounded-full border-White dark:border-grayBlue',
            friends.length > 0 && imgClasses[i]
          )}
          src={friend.avatar}
          isImgNotOnBackend={!friend.avatar}
        />
      )
    })
  }

  return (
    <div className='w-full px-[20px] py-[10px] rounded-[10px] border border-smokyWhite dark:border-cadet flex items-center justify-between'>
      <span>{friends?.length ? `${friends.length} друзей` : 'Пока нет друзей'}</span>

      <div className='flex items-center  flex-row-reverse'>
        {friends?.length ? (
          renderImg(
            friends.slice(0, friends.length > maxCount ? maxCount : friends.length)
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

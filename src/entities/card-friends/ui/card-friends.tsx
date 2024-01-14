import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { cn } from '@shared/lib/merge-classes'
import { type FriendTabs } from '@shared/lib/types/other'
import { Card } from '@shared/ui/card'
import { UserAvatar } from '@shared/ui/user-avatar'
import {
  selectAllUsers,
  selectFriends,
  selectReceived,
  selectSended
} from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'
import { checkFriendState } from '../lib/check-friend-state'

interface ICardFriendsProps {
  className?: string
  id: string
  type?: FriendTabs
  isMine?: boolean
}

const CardFriends: FC<ICardFriendsProps> = ({ className, id, type, isMine }) => {
  const isMobile = useWindowSize(500)

  const { id: currentId } = useAppSelector(selectUser)
  const friends = useAppSelector(selectFriends)
  const sended = useAppSelector(selectSended)
  const received = useAppSelector(selectReceived)

  const user = useAppSelector(selectAllUsers).filter((user) => user.id === id)[0]
  const { firstName, lastName } = user

  const isFriend = checkFriendState(friends, currentId, user?.id)
  const isRequestSended = checkFriendState(sended, currentId, user?.id)
  const isRequestReceived = checkFriendState(received, currentId, user?.id)

  const avatar = (
    <UserAvatar className='w-[50px] h-[50px] usm:w-[75px] usm:h-[75px] lg:w-[100px] lg:h-[100px]' />
  )

  const info = (
    <div className={`flex flex-col justify-between ${type === 'requests' && 'flex-col'}`}>
      <h3 className='font-bold leading-6 text-signalBlack dark:text-smokyWhite text-lg'>
        {firstName} {lastName} {isMine ? '(Вы)' : null}
      </h3>
      {type === 'requests' && (
        <span className='text-darkElectricBlue'>подал вам заявку в друзья</span>
      )}
      {type === 'sended' && (
        <span className='text-darkElectricBlue'>вы отправили заявку в друзья</span>
      )}
    </div>
  )

  if (isMobile) {
    return (
      <Card
        className={cn(
          'block hover:border-b-smokyWhite hover:bg-transparent dark:hover:bg-transparent',
          className
        )}
      >
        <div className='flex items-start lg:items-center gap-[15px]'>
          {avatar}

          {info}
        </div>
        <div className='mt-[10px] lg:max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]'>
          {isMine || <div></div>}
        </div>
      </Card>
    )
  }

  return (
    <Card
      className={cn(
        'block hover:border-b-smokyWhite hover:bg-transparent dark:hover:bg-transparent',
        className
      )}
    >
      <div className='flex items-start lg:items-center gap-[15px]'>
        {avatar}

        <div className='w-full'>
          {info}

          <div className='mt-[15px] max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]'>
            {isMine || <div></div>}
          </div>
        </div>
      </div>
    </Card>
  )
}

export { CardFriends }

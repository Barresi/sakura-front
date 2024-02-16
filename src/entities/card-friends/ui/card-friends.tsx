import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { cn } from '@shared/lib/merge-classes'
import { FriendTabs } from '@shared/lib/types/other'
import { Card } from '@shared/ui/card'
import { UserAvatar } from '@shared/ui/user-avatar'
import { selectAllUsers } from '@store/reducers/friends/selectors'
import { type FC, type ReactNode } from 'react'

interface ICardFriendsProps {
  className?: string
  friendId: string
  type?: FriendTabs
  children?: ReactNode
  isMine: boolean
}

const CardFriends: FC<ICardFriendsProps> = ({
  className,
  friendId,
  type,
  children,
  isMine
}) => {
  const isMobile = useWindowSize(500)

  // конкретный друг в карточке
  const users = useAppSelector(selectAllUsers)
  const friend = users.find((user) => user.id === friendId)

  const avatar = (
    <UserAvatar className='w-[50px] h-[50px] usm:w-[75px] usm:h-[75px] lg:w-[100px] lg:h-[100px]' />
  )

  const info = (
    <div
      className={`flex flex-col justify-between ${
        type === FriendTabs.RECEIVED && 'flex-col'
      }`}
    >
      <h3 className='font-bold leading-6 text-signalBlack dark:text-smokyWhite text-lg'>
        {friend?.firstName} {friend?.lastName} {isMine ? '(Вы)' : null}
      </h3>
      {type === FriendTabs.RECEIVED && (
        <span className='text-darkElectricBlue'>подал вам заявку в друзья</span>
      )}
      {type === FriendTabs.SENDED && (
        <span className='text-darkElectricBlue'>вы отправили заявку в друзья</span>
      )}
    </div>
  )

  if (isMobile) {
    return (
      <Card className={cn('', className)}>
        <div className='flex items-start lg:items-center gap-[15px]'>
          {avatar}

          {info}
        </div>
        <div className='mt-[10px] lg:max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]'>
          {isMine || children}
        </div>
      </Card>
    )
  }

  return (
    <Card className={cn('block ', className)}>
      <div className='flex items-start lg:items-center gap-[15px]'>
        {avatar}

        <div className='w-full'>
          {info}

          <div className='mt-[15px] max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]'>
            {isMine || children}
          </div>
        </div>
      </div>
    </Card>
  )
}

export { CardFriends }

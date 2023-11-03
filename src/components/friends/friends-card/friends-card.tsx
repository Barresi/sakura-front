import { type FC } from 'react'
import FriendButton, {
  type Tab
} from '@src/components/friends/friend-button/friend-button'
import Card from '../../ui/card/card'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectUser } from '@src/store/reducers/profileInfo/selectors'
import {
  selectAllUsers,
  selectFriends,
  selectReceived,
  selectSended
} from '@src/store/reducers/friends/selectors'
import {
  acceptRequestHandler,
  addFriendHandler,
  cancelRequestHandler,
  deleteFriendHandler,
  rejectRequestHandler
} from '@src/utils/friends/handlers'
import { cn } from '@src/utils/utils'
import { checkStates } from '@src/utils/friends/other'
import UserAvatar from '@src/components/ui/avatar/avatar'
import { useWindowSize } from '@src/hooks/useWindowSize'

interface IFriendsCardProps {
  className?: string
  id: number
  type?: Tab
  isMine?: boolean
}

const FriendsCard: FC<IFriendsCardProps> = ({
  className,
  id,
  type = 'friends',
  isMine
}) => {
  const isMobile = useWindowSize(1024)
  const dispatch = useAppDispatch()

  const { id: currentId } = useAppSelector(selectUser)
  const friends = useAppSelector(selectFriends)
  const sended = useAppSelector(selectSended)
  const received = useAppSelector(selectReceived)

  const user = useAppSelector(selectAllUsers).filter((user) => Number(user.id) === id)[0]
  const { firstName, lastName } = user || {}

  const isFriend = checkStates(friends, Number(currentId), Number(user?.id))
  const isRequestSended = checkStates(sended, Number(currentId), Number(user?.id))
  const isRequestReceived = checkStates(received, Number(currentId), Number(user?.id))

  // mock
  const img = ''
  const date = ''

  const avatar = (
    <UserAvatar src={img} className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' />
  )

  const info = (
    <div className={`flex flex-col justify-between ${type === 'requests' && 'flex-col'}`}>
      <h3 className='font-bold leading-6 text-friendCard-foreground text-lg'>
        {firstName} {lastName} {isMine ? '(Вы)' : null}
      </h3>
      {type === 'requests' && (
        <span className='text-[#55677D]'>подал вам заявку в друзья</span>
      )}
      {type === 'requests' && date && (
        <span className='text-liked-dateForeground'>{date}</span>
      )}
      {type === 'sended' && (
        <span className='text-[#55677D]'>вы отправили заявку в друзья</span>
      )}
    </div>
  )

  const clickHandlers = {
    friends: [
      () => {},
      async () => {
        await deleteFriendHandler(id, dispatch)
      }
    ],
    all: [
      () => {},
      async () => {
        await addFriendHandler(id, dispatch)
      }
    ],
    requests: [
      async () => {
        await acceptRequestHandler(id, received, Number(currentId), dispatch)
      },
      async () => {
        await rejectRequestHandler(id, received, Number(currentId), dispatch)
      }
    ],
    sended: [
      () => {},
      async () => {
        await cancelRequestHandler(id, sended, Number(currentId), dispatch)
      }
    ]
  }

  if (isMobile) {
    return (
      <Card
        className={cn(
          'block hover:border-b-message-border hover:bg-background',
          className
        )}
      >
        <div className='flex items-start lg:items-center gap-[15px]'>
          {avatar}

          {info}
        </div>
        <div className='mt-[10px] lg:max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]'>
          {isMine || (
            <FriendButton
              isFriend={isFriend}
              isSended={isRequestSended}
              isReceived={isRequestReceived}
              type={type}
              clickHandlers={clickHandlers}
            />
          )}
        </div>
      </Card>
    )
  }

  return (
    <Card
      className={cn('block hover:border-b-message-border hover:bg-background', className)}
    >
      <div className='flex items-start lg:items-center gap-[15px]'>
        {avatar}

        <div className='w-full'>
          {info}

          <div className='mt-[15px] max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]'>
            {isMine || (
              <FriendButton
                isFriend={isFriend}
                isSended={isRequestSended}
                isReceived={isRequestReceived}
                type={type}
                clickHandlers={clickHandlers}
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default FriendsCard

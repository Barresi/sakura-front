import { type FC } from 'react'
import FriendButton from '@src/entities/card-friends/ui/button-friend/friend-button'
import Card from '../../../shared/ui/card/card'
import { useAppDispatch, useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import { selectUser } from '@src/app/store/reducers/profileInfo/selectors'
import {
  selectAllUsers,
  selectFriends,
  selectReceived,
  selectSended
} from '@src/app/store/reducers/friends/selectors'
import {
  acceptRequestHandler,
  addFriendHandler,
  cancelRequestHandler,
  createChatRequestHandler,
  deleteFriendHandler,
  rejectRequestHandler
} from '@src/entities/card-friends/lib/handlers'
import { cn } from '@src/shared/lib/merge-classes'
import { checkFriendState } from '@src/entities/card-friends/lib/check-friend-state'
import UserAvatar from '@src/shared/ui/avatar/avatar'
import { useWindowSize } from '@src/shared/lib/hooks/useWindowSize'
import { type FriendTabs } from '@src/shared/lib/types/other'
import { useNavigate } from 'react-router-dom'

interface IFriendsCardProps {
  className?: string
  id: string
  type?: FriendTabs
  isMine?: boolean
}

const FriendsCard: FC<IFriendsCardProps> = ({ className, id, type, isMine }) => {
  const isMobile = useWindowSize(500)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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

  const clickHandlers = {
    friends: [
      async () => {
        await createChatRequestHandler(currentId, id, navigate)
      },
      async () => {
        await deleteFriendHandler(id, dispatch)
      }
    ],
    all: [
      async () => {
        await createChatRequestHandler(currentId, id, navigate)
      },
      async () => {
        await addFriendHandler(id, dispatch)
      }
    ],
    requests: [
      async () => {
        await acceptRequestHandler(id, received, currentId, dispatch)
      },
      async () => {
        await rejectRequestHandler(id, received, currentId, dispatch)
      }
    ],
    sended: [
      async () => {
        await createChatRequestHandler(currentId, id, navigate)
      },
      async () => {
        await cancelRequestHandler(id, sended, currentId, dispatch)
      }
    ]
  }

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

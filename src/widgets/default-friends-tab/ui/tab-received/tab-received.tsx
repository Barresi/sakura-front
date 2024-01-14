import { CardFriends } from '@entities/card-friends'
import { ButtonsFriendActions } from '@features/buttons-friend-actions'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendState } from '@shared/lib/types/api'
import { type IBaseTabProps } from '@shared/lib/types/props'
import { selectAllUsers, selectReceived } from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'
import { filterRequests } from '../../lib/filters'

interface ITabReceivedProps extends IBaseTabProps {}

const TabReceived: FC<ITabReceivedProps> = ({ search }) => {
  const received = useAppSelector(selectReceived)
  const users = useAppSelector(selectAllUsers)

  const { id: userId } = useAppSelector(selectUser)

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {received
          .filter((item) => filterRequests(users, userId, item, search))
          .map((friend, index) => {
            const friendId = userId === friend.fromId ? friend.toId : friend.fromId

            return (
              <CardFriends
                key={index}
                type='requests'
                friendId={friendId}
                isMine={friendId === userId}
              >
                <ButtonsFriendActions
                  friendId={friendId}
                  friendState={FriendState.isFriend}
                />
              </CardFriends>
            )
          })}
      </div>
      {received?.length < 1 ? (
        <span className='text-lg flex justify-center'>Здесь пока ничего нет</span>
      ) : null}
    </>
  )
}

export { TabReceived }

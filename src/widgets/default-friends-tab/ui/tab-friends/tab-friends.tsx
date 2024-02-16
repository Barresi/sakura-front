import { CardFriends } from '@entities/card-friends'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendState } from '@shared/lib/types/api'
import { type IBaseTabProps } from '@shared/lib/types/props'
import { selectAllUsers, selectFriends } from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'
import { filterRequests } from '../../lib/filters'
import { ButtonsFriendActions } from '../buttons-friend-actions/buttons-friend-actions'

interface ITabFriendsProps extends IBaseTabProps {}

const TabFriends: FC<ITabFriendsProps> = ({ search }) => {
  const friends = useAppSelector(selectFriends)
  const users = useAppSelector(selectAllUsers)
  const user = useAppSelector(selectUser)

  return (
    <>
      {friends?.length < 1 ? (
        <span className='text-lg flex justify-center mt-5'>Здесь пока ничего нет</span>
      ) : (
        <div className='flex flex-col gap-[20px]'>
          {friends
            .filter((item) => {
              if (!user?.id) return null
              return filterRequests(users, user?.id, item, search)
            })
            .map((friend, index) => {
              const friendId = user?.id === friend.fromId ? friend.toId : friend.fromId

              return (
                <CardFriends
                  key={index}
                  type='friends'
                  friendId={friendId}
                  isMine={friendId === user?.id}
                >
                  <ButtonsFriendActions
                    friendId={friendId}
                    friendState={FriendState.isFriend}
                  />
                </CardFriends>
              )
            })}
        </div>
      )}
    </>
  )
}

export { TabFriends }

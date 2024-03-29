import { CardFriends } from '@entities/card-friends/ui/card-friends'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendState } from '@shared/lib/types/api'
import { FriendTabs } from '@shared/lib/types/other'
import { type IBaseTabProps } from '@shared/lib/types/props'
import {
  selectAllUsers,
  selectFriends,
  selectReceived,
  selectSended
} from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'
import { checkFriendState } from '../../lib/check-friend-state'
import { filterUsers } from '../../lib/filters'
import { ButtonsFriendActions } from '../buttons-friend-actions/buttons-friend-actions'

interface ITabAllUsersProps extends IBaseTabProps {}

const TabAllUsers: FC<ITabAllUsersProps> = ({ search }) => {
  const users = useAppSelector(selectAllUsers)
  const user = useAppSelector(selectUser)

  const friends = useAppSelector(selectFriends)
  const sended = useAppSelector(selectSended)
  const received = useAppSelector(selectReceived)

  return (
    <>
      {users?.length < 1 ? (
        <span className='text-lg flex justify-center mt-5'>Здесь пока ничего нет</span>
      ) : (
        <div className='flex flex-col gap-[20px]'>
          {users
            .filter((item) => filterUsers(item, search))
            .map((friend, index) => {
              if (!user?.id) return null
              const friendState = checkFriendState(
                user?.id,
                friend.id,
                friends,
                sended,
                received
              )
              let requestId
              if (friendState === FriendState.isRequestSended)
                requestId = sended.find((item) => item.fromId === user?.id)?.id
              if (friendState === FriendState.isRequestReceived)
                requestId = received.find((item) => item.toId === user?.id)?.id
              return (
                <CardFriends
                  key={index}
                  type={FriendTabs.ALL}
                  friendId={friend.id}
                  isMine={friend.id === user?.id}
                >
                  <ButtonsFriendActions
                    friendId={friend.id}
                    friendState={friendState}
                    requestId={requestId}
                  />
                </CardFriends>
              )
            })}
        </div>
      )}
    </>
  )
}

export { TabAllUsers }

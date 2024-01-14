import { CardFriends } from '@entities/card-friends/ui/card-friends'
import { ButtonsFriendActions } from '@features/buttons-friend-actions'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
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

interface ITabAllUsersProps extends IBaseTabProps {}

const TabAllUsers: FC<ITabAllUsersProps> = ({ search }) => {
  const users = useAppSelector(selectAllUsers)
  const { id: userId } = useAppSelector(selectUser)

  const friends = useAppSelector(selectFriends)
  const sended = useAppSelector(selectSended)
  const received = useAppSelector(selectReceived)

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {users
          .filter((item) => filterUsers(item, search))
          .map((friend, index) => {
            const friendState = checkFriendState(
              userId,
              friend.id,
              friends,
              sended,
              received
            )
            return (
              <CardFriends
                key={index}
                type='all'
                friendId={friend.id}
                isMine={friend.id === userId}
              >
                <ButtonsFriendActions friendId={friend.id} friendState={friendState} />
              </CardFriends>
            )
          })}
      </div>
      {users?.length < 1 ? (
        <span className='text-lg flex justify-center'>Здесь пока ничего нет</span>
      ) : null}
    </>
  )
}

export { TabAllUsers }

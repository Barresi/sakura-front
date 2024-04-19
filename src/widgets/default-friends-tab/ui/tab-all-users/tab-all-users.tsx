import { CardFriends } from '@entities/card-friends/ui/card-friends'
import { ButtonsFriendActions } from '@features/buttons-friend-actions/buttons-friend-actions'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendTabs } from '@shared/lib/types/other'
import { type IBaseTabProps } from '@shared/lib/types/props'
import { selectAllUsers } from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'
import { filterUsers } from '../../lib/filters'

interface ITabAllUsersProps extends IBaseTabProps {}

const TabAllUsers: FC<ITabAllUsersProps> = ({ search }) => {
  const users = useAppSelector(selectAllUsers)
  const user = useAppSelector(selectUser)

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
              return (
                <CardFriends
                  key={index}
                  type={FriendTabs.ALL}
                  friendId={friend.id}
                  isMine={friend.id === user?.id}
                >
                  <ButtonsFriendActions friendId={friend.id} />
                </CardFriends>
              )
            })}
        </div>
      )}
    </>
  )
}

export { TabAllUsers }

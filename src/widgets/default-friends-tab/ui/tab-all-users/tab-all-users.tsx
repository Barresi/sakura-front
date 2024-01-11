import { CardFriends } from '@entities/card-friends/ui/card-friends'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { type IBaseTabProps } from '@shared/lib/types/props'
import { selectAllUsers } from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'
import { filterUsers } from '../../lib/filters'

interface ITabAllUsersProps extends IBaseTabProps {}

const TabAllUsers: FC<ITabAllUsersProps> = ({ search }) => {
  const users = useAppSelector(selectAllUsers)
  const { id: currentId } = useAppSelector(selectUser)

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {users
          .filter((item) => filterUsers(item, search))
          .map((friend, index) => {
            return (
              <CardFriends
                key={index}
                type='all'
                id={friend.id}
                isMine={friend.id === currentId}
              />
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

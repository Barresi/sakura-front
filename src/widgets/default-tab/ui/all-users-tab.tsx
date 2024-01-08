import { type FC } from 'react'
import { useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import { selectAllUsers } from '@src/app/store/reducers/friends/selectors'

import { selectUser } from '@src/app/store/reducers/profileInfo/selectors'
import FriendsCard from '../../../entities/friends-card/ui/friends-card'
import { type IBaseTabProps } from '@src/shared/lib/types/props'
import { filterUsers } from '@src/widgets/default-tab/lib/filters'

interface IAllUsersTabProps extends IBaseTabProps {}

const AllUsersTab: FC<IAllUsersTabProps> = ({ search }) => {
  const users = useAppSelector(selectAllUsers)
  const { id: currentId } = useAppSelector(selectUser)

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {users
          .filter((item) => filterUsers(item, search))
          .map((friend, index) => {
            return (
              <FriendsCard
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

export default AllUsersTab

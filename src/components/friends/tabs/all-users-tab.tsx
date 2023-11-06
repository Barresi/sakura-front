import { useEffect, type FC } from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers } from '@src/store/reducers/friends/selectors'
import { getAllUsersThunk } from '@src/store/reducers/friends/async-thunks'
import { selectUser } from '@src/store/reducers/profileInfo/selectors'
import FriendsCard from '../friends-card/friends-card'
import { type IBaseTabProps } from '@src/types/props'
import { filterUsers } from '@src/utils/friends/filters'

interface IAllUsersTabProps extends IBaseTabProps {}

const AllUsersTab: FC<IAllUsersTabProps> = ({ search }) => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectAllUsers)
  const { id: currentId } = useAppSelector(selectUser)

  useEffect(() => {
    dispatch(getAllUsersThunk())
  }, [])

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
                id={Number(friend.id)}
                isMine={Number(friend.id) === Number(currentId)}
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

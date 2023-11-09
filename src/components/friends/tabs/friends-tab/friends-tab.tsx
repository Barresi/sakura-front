import { type FC } from 'react'
import { useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers, selectFriends } from '@src/store/reducers/friends/selectors'
import FriendsCard from '../../friends-card/friends-card'
import { selectUser } from '@src/store/reducers/profileInfo/selectors'
import { type IBaseTabProps } from '@src/types/props'
import { filterRequests } from '@src/utils/friends/filters'

interface IFriendsTabProps extends IBaseTabProps {}

const FriendsTab: FC<IFriendsTabProps> = ({ search }) => {
  const friends = useAppSelector(selectFriends)
  const users = useAppSelector(selectAllUsers)
  const { id: currentId } = useAppSelector(selectUser)

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {friends
          .filter((item) => filterRequests(users, Number(currentId), item, search))
          .map((friend, index) => {
            const dataId =
              Number(currentId) === friend.fromId ? friend.toId : friend.fromId

            return (
              <FriendsCard
                key={index}
                type='friends'
                id={Number(dataId)}
                isMine={Number(dataId) === Number(currentId)}
              />
            )
          })}
      </div>
      {friends?.length < 1 ? (
        <span className='text-lg flex justify-center'>Здесь пока ничего нет</span>
      ) : null}
    </>
  )
}

export default FriendsTab

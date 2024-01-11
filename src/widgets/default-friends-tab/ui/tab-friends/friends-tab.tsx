import { selectAllUsers, selectFriends } from '@src/app/store/reducers/friends/selectors'
import { selectUser } from '@src/app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import { type IBaseTabProps } from '@src/shared/lib/types/props'
import { filterRequests } from '@src/widgets/default-friends-tab/lib/filters'
import { type FC } from 'react'
import FriendsCard from '../../../../entities/card-friends/ui/card-friends'

interface IFriendsTabProps extends IBaseTabProps {}

const FriendsTab: FC<IFriendsTabProps> = ({ search }) => {
  const friends = useAppSelector(selectFriends)
  const users = useAppSelector(selectAllUsers)
  const { id: currentId } = useAppSelector(selectUser)

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {friends
          .filter((item) => filterRequests(users, currentId, item, search))
          .map((friend, index) => {
            const dataId = currentId === friend.fromId ? friend.toId : friend.fromId

            return (
              <FriendsCard
                key={index}
                type='friends'
                id={dataId}
                isMine={dataId === currentId}
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

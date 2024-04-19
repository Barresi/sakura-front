import { CardFriends } from '@entities/card-friends'
import { ButtonsFriendActions } from '@features/buttons-friend-actions/buttons-friend-actions'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendTabs } from '@shared/lib/types/other'
import { type IBaseTabProps } from '@shared/lib/types/props'
import { selectAllUsers, selectReceived } from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'
import { filterRequests } from '../../lib/filters'

interface ITabReceivedProps extends IBaseTabProps {}

const TabReceived: FC<ITabReceivedProps> = ({ search }) => {
  const received = useAppSelector(selectReceived)
  const users = useAppSelector(selectAllUsers)

  const user = useAppSelector(selectUser)

  return (
    <>
      {received?.length < 1 ? (
        <span className='text-lg flex justify-center mt-5'>Здесь пока ничего нет</span>
      ) : (
        <div className='flex flex-col gap-[20px]'>
          {received
            .filter((item) => {
              if (!user?.id) return null
              return filterRequests(users, user?.id, item, search)
            })
            .map((friend, index) => {
              const friendId = user?.id === friend.fromId ? friend.toId : friend.fromId

              return (
                <CardFriends
                  key={index}
                  type={FriendTabs.RECEIVED}
                  friendId={friendId}
                  isMine={friendId === user?.id}
                >
                  <ButtonsFriendActions friendId={friendId} />
                </CardFriends>
              )
            })}
        </div>
      )}
    </>
  )
}

export { TabReceived }

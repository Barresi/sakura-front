import { CardFriends } from '@entities/card-friends'
import { ButtonsFriendActions } from '@features/buttons-friend-actions'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendState } from '@shared/lib/types/api'
import { type IBaseTabProps } from '@shared/lib/types/props'
import { selectAllUsers, selectSended } from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'
import { filterRequests } from '../../lib/filters'

interface ITabSendedProps extends IBaseTabProps {}

const TabSended: FC<ITabSendedProps> = ({ search }) => {
  const sended = useAppSelector(selectSended)
  const users = useAppSelector(selectAllUsers)

  const user = useAppSelector(selectUser)

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {sended
          .filter((item) => {
            if (!user?.id) return null
            return filterRequests(users, user?.id, item, search)
          })
          .map((friend, index) => {
            const friendId = user?.id === friend.fromId ? friend.toId : friend.fromId

            return (
              <CardFriends
                key={index}
                type='sended'
                friendId={friendId}
                isMine={friendId === user?.id}
              >
                <ButtonsFriendActions
                  friendId={friendId}
                  friendState={FriendState.isRequestSended}
                  requestId={friend.id}
                />
              </CardFriends>
            )
          })}
      </div>
      {sended?.length < 1 ? (
        <span className='text-lg flex justify-center'>Здесь пока ничего нет</span>
      ) : null}
    </>
  )
}

export { TabSended }

import { CardFriends } from '@entities/card-friends'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { type IBaseTabProps } from '@shared/lib/types/props'
import { selectAllUsers, selectReceived } from '@store/reducers/friends/selectors'
import { selectUser } from '@store/reducers/profileInfo/selectors'
import { type FC } from 'react'
import { filterRequests } from '../../lib/filters'

interface ITabReceivedProps extends IBaseTabProps {}

const TabReceived: FC<ITabReceivedProps> = ({ search }) => {
  const received = useAppSelector(selectReceived)
  const users = useAppSelector(selectAllUsers)

  const { id: currentId } = useAppSelector(selectUser)

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {received
          .filter((item) => filterRequests(users, currentId, item, search))
          .map((friend, index) => {
            const dataId = currentId === friend.fromId ? friend.toId : friend.fromId

            return (
              <CardFriends
                key={index}
                type='requests'
                id={dataId}
                isMine={dataId === currentId}
              />
            )
          })}
      </div>
      {received?.length < 1 ? (
        <span className='text-lg flex justify-center'>Здесь пока ничего нет</span>
      ) : null}
    </>
  )
}

export { TabReceived }

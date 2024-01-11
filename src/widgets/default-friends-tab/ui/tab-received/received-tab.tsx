import { selectAllUsers, selectReceived } from '@src/app/store/reducers/friends/selectors'
import { useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import { type FC } from 'react'

import { selectUser } from '@src/app/store/reducers/profileInfo/selectors'
import { type IBaseTabProps } from '@src/shared/lib/types/props'
import FriendsCard from '../../../../entities/card-friends/ui/card-friends'
import { filterRequests } from '../../lib/filters'

interface IReceivedTabProps extends IBaseTabProps {}

const ReceivedTab: FC<IReceivedTabProps> = ({ search }) => {
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
              <FriendsCard
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

export default ReceivedTab

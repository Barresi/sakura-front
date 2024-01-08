import { type FC } from 'react'
import { useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import { selectAllUsers, selectSended } from '@src/app/store/reducers/friends/selectors'
import { selectUser } from '@src/app/store/reducers/profileInfo/selectors'
import FriendsCard from '@src/entities/friends-card/ui/friends-card'
import { type IBaseTabProps } from '@src/shared/lib/types/props'
import { filterRequests } from '@src/widgets/default-tab/lib/filters'

interface ISendedTabProps extends IBaseTabProps {}

const SendedTab: FC<ISendedTabProps> = ({ search }) => {
  const sended = useAppSelector(selectSended)
  const users = useAppSelector(selectAllUsers)

  const { id: currentId } = useAppSelector(selectUser)

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {sended
          .filter((item) => filterRequests(users, currentId, item, search))
          .map((friend, index) => {
            const dataId = currentId === friend.fromId ? friend.toId : friend.fromId

            return (
              <FriendsCard
                key={index}
                type='sended'
                id={dataId}
                isMine={dataId === currentId}
              />
            )
          })}
      </div>
      {sended?.length < 1 ? (
        <span className='text-lg flex justify-center'>Здесь пока ничего нет</span>
      ) : null}
    </>
  )
}

export default SendedTab

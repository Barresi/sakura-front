import { useEffect, type FC } from 'react'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectAllUsers, selectSended } from '@src/store/reducers/friends/selectors'
import { getSendedThunk } from '@src/store/reducers/friends/async-thunks'
import { selectUser } from '@src/store/reducers/profileInfo/selectors'
import FriendsCard from '../friends-card/friends-card'
import { type IBaseTabProps } from '@src/types/props'
import { filterRequests } from '@src/utils/friends/filters'
import { type FriendTabs } from '@src/types/other'
import { useSearchParams } from 'react-router-dom'

interface ISendedTabProps extends IBaseTabProps {}

const SendedTab: FC<ISendedTabProps> = ({ search }) => {
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()
  const sended = useAppSelector(selectSended)
  const users = useAppSelector(selectAllUsers)
  const { id: currentId } = useAppSelector(selectUser)

  useEffect(() => {
    dispatch(getSendedThunk())
  }, [])

  return (
    <>
      <div className='flex flex-col gap-[20px]'>
        {sended
          .filter((item) => filterRequests(users, Number(currentId), item, search))
          .map((friend, index) => {
            const dataId =
              Number(currentId) === friend.fromId ? friend.toId : friend.fromId

            return (
              <FriendsCard
                key={index}
                type={searchParams.get('usertype') as FriendTabs}
                id={Number(dataId)}
                isMine={Number(dataId) === Number(currentId)}
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

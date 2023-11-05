import { useAppSelector } from '@src/hooks/store-hooks'
import {
  selectAllUsers,
  selectFriendsIsLoading
} from '@src/store/reducers/friends/selectors'
import { type IFriend } from '@src/types/api'
import { type IUser } from '@src/types/types'
import { useEffect, type FC, type ChangeEventHandler, useState } from 'react'
import Search from '@src/components/ui/form/search/search'
import { type FriendTabs } from '@src/types/other'
import FriendsCard from '../friends-card/friends-card'
import { filterData } from '@src/utils/friends/filters'
import { selectUser } from '@src/store/reducers/profileInfo/selectors'

interface IDefaultTabProps {
  data: IUser[] | IFriend[]
  type: FriendTabs
}

const text = {
  friends: 'Мои друзья',
  all: 'Все пользователи',
  requests: 'Заявки в друзья',
  sended: 'Отправленные заявки'
}

const DefaultTab: FC<IDefaultTabProps> = ({ data, type }) => {
  const [filteredData, setData] = useState<IUser[] | IFriend[]>(data)
  const users = useAppSelector(selectAllUsers)
  const { id: currentId } = useAppSelector(selectUser)

  const isLoading = useAppSelector(selectFriendsIsLoading)

  const [search, setSearch] = useState('')

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (data.length < 1) return

    setData(filterData(data, search, users, Number(currentId)))
  }, [data, search])

  return (
    <>
      <h2 className='font-medium text-[24px] leading-[32px]'>
        {text[type as keyof typeof text]}
      </h2>

      <div className='mt-[20px]'>
        <Search onChange={handleSearchChange} />
      </div>

      {isLoading ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <div className='flex flex-col gap-[20px]'>
            {filteredData.map((friend, index) => {
              let dataId = friend.id

              // Объясняю, зачем код ниже: user1 может отправить запрос user2, в итоге у нас будет
              // request: {id: number, fromId: user1.id, toId: user2.id}
              // а если user2 добавит user1
              // то request: {id: id запроса, fromId: user2.id, toId: user1.id}.
              // при type == 'all' у нас прилетает список пользователей
              // user: {id: id пользователя, ...data}
              // и проверка нужна, чтобы правильно определять id пользователя для отображения
              if (type !== 'all' && 'fromId' in friend && 'toId' in friend) {
                dataId = Number(currentId) === friend.fromId ? friend.toId : friend.fromId
              }

              return (
                <FriendsCard
                  key={index}
                  type={type}
                  id={Number(dataId)}
                  isMine={Number(dataId) === Number(currentId)}
                />
              )
            })}
          </div>
          {data?.length < 1 ? (
            <span className='text-lg flex justify-center'>Здесь пока ничего нет</span>
          ) : null}
        </>
      )}
    </>
  )
}

export default DefaultTab

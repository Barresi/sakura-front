import { type ChangeEventHandler, type FC, useEffect, useState } from 'react'
import Search from '@src/components/ui/form/search/search'
import FriendsCard from '@src/components/friends/friends-card/friends-card'
import { useAppSelector } from '@src/hooks/store-hooks'
import { filterUsers, filterRequests } from '@src/utils/friends/filters'
import { type IFriendsRequestResponse, type IUser } from '@src/types/types'
import {
  selectFriends,
  selectReceived,
  selectSended,
  selectAllUsers,
  selectFriendsIsLoading
} from '@src/store/reducers/friends/selectors'
import { selectUser } from '@src/store/reducers/profileInfo/selectors'

const text = {
  friends: 'Мои друзья',
  all: 'Все пользователи',
  requests: 'Заявки в друзья',
  sended: 'Отправленные заявки'
}

interface IFriendsTabContentProps {
  type: 'all' | 'requests' | 'sended' | 'friends'
}

const FriendsTabContent: FC<IFriendsTabContentProps> = ({ type }) => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState<IUser[] | IFriendsRequestResponse[]>([])

  const { id: currentId } = useAppSelector(selectUser)
  const users = useAppSelector(selectAllUsers)
  const friends = useAppSelector(selectFriends)
  const received = useAppSelector(selectReceived)
  const sended = useAppSelector(selectSended)

  const isLoading = useAppSelector(selectFriendsIsLoading)

  useEffect(() => {
    const filter = (item: IFriendsRequestResponse): boolean =>
      filterRequests(users, Number(currentId), item, search)

    switch (type) {
      case 'all':
        setData(users.filter((item) => filterUsers(item, search)))
        break

      case 'friends':
        setData(friends.filter(filter))
        break

      case 'requests':
        setData(received.filter(filter))
        break

      case 'sended':
        setData(sended.filter(filter))
        break
    }
  }, [type, users, friends, received, sended, search, currentId])

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => { setSearch(e.target.value) }

  return (
    <>
      <h2 className="font-medium text-[24px] leading-[32px]">
        {text[type as keyof typeof text]}
      </h2>

      <div className="mt-[20px]">
        <Search onChange={handleChange} />
      </div>

      {isLoading
        ? (
          <div style={{ textAlign: 'center' }}>
            <h2>Loading...</h2>
          </div>)
        : (
          <>
            <div className="flex flex-col gap-[20px]">
              {data
              // .filter((item) => filterFriendsData(item, search))
                ?.map((friend, index) => {
                  let dataId = friend.id

                  // Объясняю, зачем код ниже: user1 может отправить запрос user2, в итоге у нас будет
                  // request: {id: number, fromId: user1.id, toId: user2.id}
                  // а если user2 добавит user1
                  // то request: {id: id запроса, fromId: user2.id, toId: user1.id}.
                  // при type == 'all' у нас прилетает список пользователей
                  // user: {id: id пользователя, ...data}
                  // и проверка нужна, чтобы правильно определять id пользователя для отображения
                  if (type !== 'all' && 'fromId' in friend && 'toId' in friend) {
                    dataId =
                    Number(currentId) === friend.fromId ? friend.toId : friend.fromId
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
            {data?.length < 1
              ? (
                <span className="text-lg flex justify-center">Здесь пока ничего нет</span>)
              : null}
          </>)}
    </>
  )
}

export default FriendsTabContent

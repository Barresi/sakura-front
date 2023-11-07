import { type FC, type ChangeEventHandler, useState, useEffect } from 'react'
import Search from '@src/components/ui/form/search/search'
import { type FriendTabs } from '@src/types/other'
import FriendsTab from './friends-tab'
import ReceivedTab from './received-tab'
import SendedTab from './sended-tab'
import AllUsersTab from './all-users-tab'
import { getAllUsersThunk } from '@src/store/reducers/friends/async-thunks'
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { selectUserStatus } from '@src/store/reducers/profileInfo/selectors'
import { AuthStatus } from '@src/types/api'

interface IDefaultTabProps {
  type: FriendTabs
}

const text = {
  friends: 'Мои друзья',
  all: 'Все пользователи',
  requests: 'Заявки в друзья',
  sended: 'Отправленные заявки'
}

const DefaultTab: FC<IDefaultTabProps> = ({ type }) => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')
  const status = useAppSelector(selectUserStatus)

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (status === AuthStatus.authorized) dispatch(getAllUsersThunk())
  }, [status])

  const tabs = {
    all: <AllUsersTab search={search} />,
    friends: <FriendsTab search={search} />,
    requests: <ReceivedTab search={search} />,
    sended: <SendedTab search={search} />
  }

  return (
    <>
      <h2 className='font-medium text-[24px] leading-[32px]'>
        {text[type as keyof typeof text]}
      </h2>

      <div className='mt-[20px]'>
        <Search onChange={handleSearchChange} />
      </div>

      {tabs[type as keyof typeof tabs]}
    </>
  )
}

export default DefaultTab

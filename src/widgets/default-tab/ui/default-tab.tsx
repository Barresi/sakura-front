import { type FC, type ChangeEventHandler, useState } from 'react'
import Search from '@src/shared/ui/search-input/search'
import { type FriendTabs } from '@src/shared/lib/types/other'
import FriendsTab from './friends-tab'
import ReceivedTab from './received-tab'
import SendedTab from './sended-tab'
import AllUsersTab from './all-users-tab'

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
  const [search, setSearch] = useState('')

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }

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

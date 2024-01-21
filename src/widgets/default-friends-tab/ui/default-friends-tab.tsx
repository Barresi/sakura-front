import { type FriendTabs } from '@shared/lib/types/other'
import { InputSearch } from '@shared/ui/input-search'
import { useState, type ChangeEventHandler, type FC } from 'react'
import { TabAllUsers } from './tab-all-users/tab-all-users'
import { TabFriends } from './tab-friends/tab-friends'
import { TabReceived } from './tab-received/tab-received'
import { TabSended } from './tab-sended/tab-sended'

interface IDefaultFriendsTabProps {
  type: FriendTabs
}

const text = {
  friends: 'Мои друзья',
  all: 'Все пользователи',
  requests: 'Заявки в друзья',
  sended: 'Отправленные заявки'
}

const DefaultFriendsTab: FC<IDefaultFriendsTabProps> = ({ type }) => {
  const [search, setSearch] = useState('')

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }

  const tabs = {
    all: <TabAllUsers search={search} />,
    friends: <TabFriends search={search} />,
    requests: <TabReceived search={search} />,
    sended: <TabSended search={search} />
  }

  return (
    <>
      <h2 className='font-medium text-[24px] leading-[32px]'>
        {text[type as keyof typeof text]}
      </h2>

      <div className='mt-[20px]'>
        <InputSearch onChange={handleSearchChange} />
      </div>

      {tabs[type as keyof typeof tabs]}
    </>
  )
}

export { DefaultFriendsTab }

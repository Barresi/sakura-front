import { FriendTabs } from '@shared/lib/types/other'
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
  [FriendTabs.FRIENDS]: 'Мои друзья',
  [FriendTabs.ALL]: 'Все пользователи',
  [FriendTabs.RECEIVED]: 'Заявки в друзья',
  [FriendTabs.SENDED]: 'Отправленные заявки'
}

const DefaultFriendsTab: FC<IDefaultFriendsTabProps> = ({ type }) => {
  const [search, setSearch] = useState('')

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }

  const tabs = {
    [FriendTabs.ALL]: <TabAllUsers search={search} />,
    [FriendTabs.FRIENDS]: <TabFriends search={search} />,
    [FriendTabs.RECEIVED]: <TabReceived search={search} />,
    [FriendTabs.SENDED]: <TabSended search={search} />
  }

  return (
    <>
      <h2 className='font-medium text-[24px] leading-[32px]'>{text[type]}</h2>

      <div className='mt-[20px]'>
        <InputSearch onChange={handleSearchChange} />
      </div>

      {tabs[type]}
    </>
  )
}

export { DefaultFriendsTab }

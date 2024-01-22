import { type FriendTabs } from '@shared/lib/types/other'
import { DefaultFriendsTab } from '@widgets/default-friends-tab'
import { type FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FilterFriendsTabs } from './filter-friends-tabs/filter-friends-tabs'

const PageFriends: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ usertype: 'friends' })
  const type = searchParams.get('usertype') as FriendTabs
  const handleChangeType = (usertype: FriendTabs): void => {
    setSearchParams({ usertype })
  }
  return (
    <div className='w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] mb-[60px] lg:mb-[20px] px-[20px] lg:px-0'>
      <FilterFriendsTabs handleChangeType={handleChangeType} type={type} />

      <div className='list w-full xl:w-2/3 bg-white dark:bg-grayBlue rounded-[10px] p-[20px] xl:p-[30px]'>
        <DefaultFriendsTab type={type} />
      </div>
    </div>
  )
}

export { PageFriends }

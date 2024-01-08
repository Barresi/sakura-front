import { type FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import DefaultTab from '@src/widgets/default-tab/ui/default-tab'
import { type FriendTabs } from '@src/shared/lib/types/other'
import FriendsTabButtons from '@src/widgets/friends-tab-buttons/ui/friends-tab-buttons'

const FriendsPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ usertype: 'friends' })
  const type = searchParams.get('usertype') as FriendTabs
  const handleChangeType = (usertype: FriendTabs): void => {
    setSearchParams({ usertype })
  }
  return (
    <div className='w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] mb-[60px] lg:mb-[20px] px-[20px] lg:px-0'>
      <FriendsTabButtons handleChangeType={handleChangeType} type={type} />

      <div className='list w-full xl:w-2/3 bg-white dark:bg-grayBlue rounded-[10px] p-[20px] xl:p-[30px]'>
        <DefaultTab type={type} />
      </div>
    </div>
  )
}

export default FriendsPage

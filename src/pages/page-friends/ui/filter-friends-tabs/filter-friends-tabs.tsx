import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendTabs } from '@shared/lib/types/other'
import { ButtonTab } from '@shared/ui/button-tab'
import { selectReceived } from '@store/reducers/friends/selectors'
import { type FC } from 'react'

interface IFilterFriendsTabsProps {
  handleChangeType: (usertype: FriendTabs) => void
  type: FriendTabs
}

const FilterFriendsTabs: FC<IFilterFriendsTabsProps> = ({ handleChangeType, type }) => {
  const received = useAppSelector(selectReceived)
  return (
    <div className='w-full xxl:w-1/3 h-fit flex flex-col bg-white dark:bg-grayBlue rounded-[10px] p-[20px] [&>div]:w-[100%] sm:flex-row md:gap-[1rem] xxl:gap-0 xxl:p-[30px] xxl:flex-col'>
      <ButtonTab
        isActive={type === FriendTabs.FRIENDS}
        onClick={() => {
          handleChangeType(FriendTabs.FRIENDS)
        }}
      >
        Мои друзья
      </ButtonTab>
      <ButtonTab
        isActive={type === FriendTabs.ALL}
        onClick={() => {
          handleChangeType(FriendTabs.ALL)
        }}
      >
        Все пользователи
      </ButtonTab>
      <ButtonTab
        isActive={type === FriendTabs.RECEIVED}
        onClick={() => {
          handleChangeType(FriendTabs.RECEIVED)
        }}
        badge={received.length}
      >
        Заявки в друзья
      </ButtonTab>
      <ButtonTab
        isActive={type === FriendTabs.SENDED}
        onClick={() => {
          handleChangeType(FriendTabs.SENDED)
        }}
      >
        Отправленные заявки
      </ButtonTab>
    </div>
  )
}
export { FilterFriendsTabs }

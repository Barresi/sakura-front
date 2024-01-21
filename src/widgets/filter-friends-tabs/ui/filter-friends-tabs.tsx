import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { type FriendTabs } from '@shared/lib/types/other'
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
    <div className='w-full xl:w-1/3 h-fit flex flex-col bg-white dark:bg-grayBlue rounded-[10px] p-[20px] [&>div]:w-[100%] sm:flex-row md:gap-[1rem] xl:gap-0 xl:p-[30px] xl:flex-col'>
      <ButtonTab
        isActive={type === 'friends'}
        onClick={() => {
          handleChangeType('friends')
        }}
      >
        Мои друзья
      </ButtonTab>
      <ButtonTab
        isActive={type === 'all'}
        onClick={() => {
          handleChangeType('all')
        }}
      >
        Все пользователи
      </ButtonTab>
      <ButtonTab
        isActive={type === 'requests'}
        onClick={() => {
          handleChangeType('requests')
        }}
        badge={received.length}
      >
        Заявки в друзья
      </ButtonTab>
      <ButtonTab
        isActive={type === 'sended'}
        onClick={() => {
          handleChangeType('sended')
        }}
      >
        Отправленные заявки
      </ButtonTab>
    </div>
  )
}
export { FilterFriendsTabs }

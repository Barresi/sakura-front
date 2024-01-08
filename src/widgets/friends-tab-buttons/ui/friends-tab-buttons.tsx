import { useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import TabButton from '@src/widgets/friends-tab-buttons/ui/tab-button/tab-button'
import { selectReceived } from '@src/app/store/reducers/friends/selectors'
import { type FriendTabs } from '@src/shared/lib/types/other'
import { type FC } from 'react'

interface IFriendsTabButtonsProps {
  handleChangeType: (usertype: FriendTabs) => void
  type: FriendTabs
}

const FriendsTabButtons: FC<IFriendsTabButtonsProps> = ({ handleChangeType, type }) => {
  const received = useAppSelector(selectReceived)
  return (
    <div className='w-full xl:w-1/3 h-fit flex flex-col bg-white dark:bg-grayBlue rounded-[10px] p-[20px] [&>div]:w-[100%] sm:flex-row md:gap-[1rem] xl:gap-0 xl:p-[30px] xl:flex-col'>
      <TabButton
        isActive={type === 'friends'}
        onClick={() => {
          handleChangeType('friends')
        }}
      >
        Мои друзья
      </TabButton>
      <TabButton
        isActive={type === 'all'}
        onClick={() => {
          handleChangeType('all')
        }}
      >
        Все пользователи
      </TabButton>
      <TabButton
        isActive={type === 'requests'}
        onClick={() => {
          handleChangeType('requests')
        }}
        badge={received.length}
      >
        Заявки в друзья
      </TabButton>
      <TabButton
        isActive={type === 'sended'}
        onClick={() => {
          handleChangeType('sended')
        }}
      >
        Отправленные заявки
      </TabButton>
    </div>
  )
}
export default FriendsTabButtons

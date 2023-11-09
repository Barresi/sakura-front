import { type FC } from 'react'
import TabButton from '@src/components/friends/tab-button/tab-button'
import { useSearchParams } from 'react-router-dom'
import DefaultTab from '@src/components/friends/tabs/default-tab'
import { type FriendTabs } from '@src/types/other'

const FriendsPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ usertype: 'friends' })
  const type = searchParams.get('usertype') as FriendTabs
  const handleChangeType = (usertype: FriendTabs): void => {
    setSearchParams({ usertype })
  }
  return (
    <div className='w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] mt-[20px] xl:mt-[30px] mb-[60px] lg:mb-[20px] px-[20px] lg:px-0'>
      <div className='w-full xl:w-1/3 h-auto max-h-[220px] flex bg-background rounded-[10px] p-[20px] [&>div]:w-[100%] md:justify-between sm:flex-row md:gap-[1rem] xl:gap-0 xl:p-[30px] xl:flex-col'>
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

      <div className='list w-full xl:w-2/3 bg-background rounded-[10px] p-[20px] xl:p-[30px]'>
        <DefaultTab type={type} />
      </div>
    </div>
  )
}

export default FriendsPage

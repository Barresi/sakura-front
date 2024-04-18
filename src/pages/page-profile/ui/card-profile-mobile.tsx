import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { RowFriends } from '@entities/row-friends'
import { ButtonsFriendActions } from '@features/buttons-friend-actions/buttons-friend-actions'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { FriendState } from '@shared/lib/types/api'
import { Button } from '@shared/ui/button'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

import avatarLight from '@assets/avatar/default avatar light.svg'

const CardProfileMobile: FC = () => {
  const user = useAppSelector(selectUser)
  return (
    <div className='flex flex-col xxl:hidden relative bg-white dark:bg-grayBlue p-[30px] rounded-[10px]'>
      <div className='flex flex-row justify-between flex-[90px]'>
        <div className='flex flex-row justify-start w-full'>
          <UserAvatar
            src={user?.avatar || null}
            className='absolute w-[170px] sm:w-[200px] h-[170px] sm:h-[200px] sm:mr-[15px] inset-x-0 sm:inset-auto mx-auto top-[-100px] sm:left-[20px] sm:top-[-85px]'
          />
          <div className=' mt-[50px] sm:mt-0 sm:mx-0 sm:ml-[200px]'>
            <h4 className='text-[32px] leading-10 text-center sm:text-start'>
              Борис Маслов
            </h4>
            <div className='block text-center sm:hidden mt-[20px] w-full mb-[20px]'>
              Я - опытный UX/UI дизайнер с более чем 4-летним стажем работы в этой
              области.
            </div>
            {/* <CardProfileDesc /> */}
          </div>
        </div>
        <div className='hidden sm:block'>
          <Button icon={'edit'} iconPos='left' variant='secondary' />
        </div>
      </div>
      <div className='sm:mt-[15px] w-full gap-[20px] flex items-center flex-col lg:flex-row'>
        <div className='flex-[50%] hidden sm:block w-full self-start'>
          Я - опытный UX/UI дизайнер с более чем 4-летним стажем работы в этой области.
        </div>
        <div className='w-full lg:flex-[50%] self-start flex flex-col gap-[15px]'>
          <RowFriends avatars={[avatarLight, avatarLight, avatarLight]} />
          <div className='flex gap-[10px]'>
            <ButtonsFriendActions friendState={FriendState.isFriend} />
          </div>
        </div>
      </div>

      {/* <Button className='mt-[20px] block sm:hidden' variant={'secondary'}>
        Редактировать
      </Button> */}
    </div>
  )
}
export { CardProfileMobile }

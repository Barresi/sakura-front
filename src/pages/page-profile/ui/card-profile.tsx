import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { RowFriends } from '@entities/row-friends'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

import avatarLight from '@assets/avatar/default avatar light.svg'
import { ButtonsFriendActions } from '@features/buttons-friend-actions/buttons-friend-actions'
import { FriendState } from '@shared/lib/types/api'
import { Button } from '@shared/ui/button'

const CardProfile: FC = () => {
  const user = useAppSelector(selectUser)
  return (
    <div className='hidden xxl:block w-1/3'>
      <div className='bg-white dark:bg-grayBlue xl:p-[30px] rounded-[10px] flex flex-col gap-[15px] relative'>
        <Button
          icon='edit'
          iconPos='left'
          variant='secondary'
          className=' absolute top-[30px] right-[30px] w-[60px] h-[50px]'
        />
        <UserAvatar className='w-[150px] h-[150px]' src={user?.avatar || null} />
        <h4 className='text-[32px] leading-10 text-center'>Борис Маслов</h4>
        <div className=' text-center'>
          Я - опытный UX/UI дизайнер с более чем 4-летним стажем работы в этой области.
        </div>
        {/* <CardProfileDesc /> */}
        <RowFriends avatars={[avatarLight, avatarLight]} />
        <div className='flex gap-[10px]'>
          <ButtonsFriendActions friendState={FriendState.isFriend} />
        </div>
      </div>
    </div>
  )
}
export { CardProfile }

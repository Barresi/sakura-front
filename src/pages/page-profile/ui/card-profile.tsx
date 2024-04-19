import { RowFriends } from '@entities/row-friends'
import { ButtonsFriendActions } from '@features/buttons-friend-actions/buttons-friend-actions'
import { type IUser } from '@shared/lib/types/types'
import { Button } from '@shared/ui/button'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

import avatarLight from '@assets/avatar/default avatar light.svg'

interface ICardProfileProps {
  user: IUser | undefined
  isMyProfile: boolean
}

const CardProfile: FC<ICardProfileProps> = ({ user, isMyProfile }) => {
  return (
    <div className='hidden xxl:block w-1/3'>
      <div className='bg-white dark:bg-grayBlue xl:p-[30px] rounded-[10px] flex flex-col gap-[15px] relative'>
        <UserAvatar className='w-[150px] h-[150px]' src={user?.avatar || null} />
        <h4 className='text-[32px] leading-10 text-center'>
          {user?.firstName} {user?.lastName}
        </h4>
        {user?.description && <div className=' text-center'>{user?.description}</div>}
        {/* <CardProfileDesc /> */}
        <RowFriends avatars={[avatarLight, avatarLight]} />
        {isMyProfile ? (
          <Button variant='secondary'>Редактировать</Button>
        ) : (
          <div className='flex gap-[10px]'>
            <ButtonsFriendActions friendId={user?.id} />
          </div>
        )}
      </div>
    </div>
  )
}
export { CardProfile }

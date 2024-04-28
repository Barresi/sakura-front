import { RowFriends } from '@entities/row-friends'
import { ButtonEditProfile } from '@features/button-edit-profile'
import { ButtonsFriendActions } from '@features/buttons-friend-actions/buttons-friend-actions'
import { type IAllUser } from '@shared/lib/types/api'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

interface IBlockProfileProps {
  user: IAllUser | undefined
  isMyProfile: boolean
  friends: IAllUser[] | undefined
}

const BlockProfile: FC<IBlockProfileProps> = ({ user, isMyProfile, friends }) => {
  return (
    <div className='hidden xxl:block w-1/3'>
      <div className='bg-white dark:bg-grayBlue xl:p-[30px] rounded-[10px] flex flex-col gap-[15px] relative'>
        <UserAvatar className='w-[150px] h-[150px]' src={user?.avatar || null} />
        <h4 className='text-[32px] leading-10 text-center'>
          {user?.firstName} {user?.lastName}
        </h4>
        {user?.description && <div className=' text-center'>{user?.description}</div>}
        {/* <CardProfileDesc /> */}
        <RowFriends avatars={friends?.map((friend) => friend?.avatar)} />
        {isMyProfile ? (
          <ButtonEditProfile type='text' />
        ) : (
          <div className='flex gap-[10px]'>
            <ButtonsFriendActions friendId={user?.id} />
          </div>
        )}
      </div>
    </div>
  )
}
export { BlockProfile }

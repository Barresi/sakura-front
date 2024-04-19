import { RowFriends } from '@entities/row-friends'
import { ButtonsFriendActions } from '@features/buttons-friend-actions/buttons-friend-actions'
import { type IUser } from '@shared/lib/types/types'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

import avatarLight from '@assets/avatar/default avatar light.svg'
import { ButtonEditProfile } from '@features/button-edit-profile'

interface ICardProfileMobileProps {
  user: IUser | undefined
  isMyProfile: boolean
}

const CardProfileMobile: FC<ICardProfileMobileProps> = ({ user, isMyProfile }) => {
  return (
    <div className='flex flex-col xxl:hidden relative bg-white dark:bg-grayBlue p-[30px] rounded-[10px]'>
      <div className='flex flex-row justify-between flex-[90px]'>
        <div className='flex flex-row justify-center sm:justify-start w-full'>
          <UserAvatar
            src={user?.avatar || null}
            className='absolute w-[170px] sm:w-[200px] h-[170px] sm:h-[200px] sm:mr-[15px] inset-x-0 sm:inset-auto mx-auto top-[-100px] sm:left-[20px] sm:top-[-85px]'
          />
          <div className=' mt-[50px] sm:mt-0 sm:mx-0 sm:ml-[200px]'>
            <h4 className='text-[32px] leading-10 text-center sm:text-start'>
              {user?.firstName} {user?.lastName}
            </h4>
            <div className='block text-center sm:hidden mt-[20px] w-full mb-[20px]'>
              {user?.description}
            </div>
            {/* <CardProfileDesc /> */}
          </div>
        </div>
        {isMyProfile && (
          <div className='hidden sm:block'>
            <ButtonEditProfile type='icon' />
          </div>
        )}
      </div>
      <div className='sm:mt-[15px] w-full gap-[20px] flex items-center flex-col lg:flex-row'>
        {user?.description && (
          <div className='flex-[50%] hidden sm:block w-full self-start'>
            {user?.description}
          </div>
        )}
        <div className='w-full lg:flex-[50%] self-start flex flex-col gap-[15px]'>
          <RowFriends avatars={[avatarLight, avatarLight, avatarLight]} />
          {isMyProfile ? (
            <ButtonEditProfile type='text' className='sm:hidden' />
          ) : (
            <div className='flex gap-[10px]'>
              <ButtonsFriendActions friendId={user?.id} />
            </div>
          )}
        </div>
      </div>

      {/* <Button className='mt-[20px] block sm:hidden' variant={'secondary'}>
        Редактировать
      </Button> */}
    </div>
  )
}
export { CardProfileMobile }

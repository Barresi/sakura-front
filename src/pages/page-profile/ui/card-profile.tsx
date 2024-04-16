import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { RowFriends } from '@entities/row-friends'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'
import { CardProfileDesc } from './card-profile-desc'

import avatarLight from '@assets/avatar/default avatar light.svg'

const CardProfile: FC = () => {
  const user = useAppSelector(selectUser)
  return (
    <div className='hidden xxl:block w-[544px]'>
      <div className='bg-white dark:bg-grayBlue xl:p-[30px] rounded-[10px] flex flex-col gap-[20px]'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row justify-start w-full'>
            <UserAvatar
              className='w-[150px] h-[150px] mr-[15px]'
              src={user?.avatar || null}
            />
            <div className='grid gap-[10px]'>
              <h4 className='text-[32px]'>Борис Маслов</h4>
              <CardProfileDesc />
            </div>
          </div>
          <div>
            <Button icon='edit' iconPos='left' variant='secondary' />
          </div>
        </div>
        <RowFriends avatars={[avatarLight, avatarLight]} />
        <div>
          Я - опытный UX/UI дизайнер с более чем 4-летним стажем работы в этой области.
        </div>
      </div>
    </div>
  )
}
export { CardProfile }

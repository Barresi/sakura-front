import { RowFriends } from '@entities/row-friends'
import { Button } from '@shared/ui/button'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'
import { CardProfileDesc } from './card-profile-desc'

import avatarLight from '@assets/avatar/default avatar light.svg'

const CardProfileMobile: FC = () => {
  return (
    <div className='block xxl:hidden relative bg-white dark:bg-grayBlue p-[30px] rounded-[10px]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-start w-full'>
          <UserAvatar className='absolute w-[170px] sm:w-[200px] h-[170px] sm:h-[200px] sm:mr-[15px] inset-x-0 sm:inset-auto mx-auto top-[-100px] sm:left-[20px] sm:top-[-85px]' />
          <div className='mt-[50px] mx-auto sm:mt-auto sm:mx-0 sm:ml-[200px]'>
            <h4 className='text-[32px] mb-[0] sm:mb-[10px] text-center sm:text-start'>
              Борис Маслов
            </h4>
            <div className='block sm:hidden mt-[20px] w-full mb-[20px]'>
              Я - опытный UX/UI дизайнер с более чем 4-летним стажем работы в этой
              области.
            </div>
            <CardProfileDesc />
          </div>
        </div>
        <div className='hidden sm:block'>
          <Button icon={'edit'} iconPos='left' variant='secondary' />
        </div>
      </div>
      <div className='w-full mt-[30px] gap-[20px] flex items-center flex-col lg:flex-row'>
        <div className='hidden sm:block w-full'>
          Я - опытный UX/UI дизайнер с более чем 4-летним стажем работы в этой области.
        </div>
        <RowFriends avatars={[avatarLight, avatarLight, avatarLight]} />
      </div>
      <Button className='mt-[20px] block sm:hidden' variant={'secondary'}>
        Редактировать
      </Button>
    </div>
  )
}
export { CardProfileMobile }

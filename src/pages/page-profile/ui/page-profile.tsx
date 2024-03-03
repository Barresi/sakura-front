import avatarLight from '@assets/avatar/default avatar light.svg'
import banner from '@assets/banner/default user banner.jpg'
import { type FC } from 'react'

import { InputSendMessage } from '@shared/ui/input-send-message'
import { CardProfile } from './card-profile'
import { CardProfileMobile } from './card-profile-mobile'
import { PostNews } from './post-news'

const PageProfile: FC = () => {
  return (
    <div>
      <div className='w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] lg:mb-[20px] px-[20px] lg:px-0'>
        <CardProfile />
        <div className='w-full xxl:w-2/3 rounded-[10px] grid gap-[20px] xl:gap-[30px]'>
          <img
            src={banner}
            alt='banner'
            className='w-[100%] rounded-[6px] h-[180px] sm:h-auto'
          />

          {/* mobile user info */}
          <CardProfileMobile />

          <InputSendMessage
            avatar={avatarLight}
            sendMessage={() => {}}
            placeholder='Что у вас нового?'
            className='border-none'
          />

          <PostNews />
        </div>
      </div>
    </div>
  )
}
export { PageProfile }

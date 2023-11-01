import { type FC } from 'react'
import UserAvatar from '../avatar/avatar'

import photo from '@assets/photo.svg'
import more from '@assets/ui/More.svg'

const FriendPanel: FC = () => {
  return (
    <div className="w-full flex items-start justify-between">
      <div className="flex items-start gap-[15px]">
        <UserAvatar src={photo} className="w-[50px] h-[50px]" />
        <div className="">
          <h3 className="text-[18px] font-bold leading-[24px] text-[#D22828]">
            Борис Маслов
          </h3>
          <span className="text-[14px] leading-[18px] text-[#ADB5BD]">
            21 окт. в 13.11
          </span>
        </div>
      </div>

      <img
        src={more}
        className="px-2 cursor-pointer transition-all hover:scale-[1.1] active:scale-[0.9]"
      />
    </div>
  )
}

export default FriendPanel

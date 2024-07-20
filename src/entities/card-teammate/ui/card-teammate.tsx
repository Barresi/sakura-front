import { teamPhotos, type ITeammate } from '@shared/lib/team'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

import defAvatar from '@assets/avatar/default avatar light.svg'

interface ICardTeammateProps extends ITeammate {
  className?: string
  isMobile: boolean
}
const CardTeammate: FC<ICardTeammateProps> = ({
  className,
  avatar,
  desc,
  firstName,
  role,
  telegram,
  isMobile
}) => {
  return (
    <div
      className={`flex items-center  m-auto p-4 usm:px-8 usm:py-8 rounded-[10px] text-lg leading-5 ${className} ${
        isMobile
          ? 'flex-col  bg-ghostlyWhite dark:bg-[#3C3C51] gap-[10px] h-full'
          : 'gap-2 w-[100%] justify-between'
      }`}
    >
      <div className='flex flex-col gap-[10px] shrink-0 basis-[140px] w-full'>
        {/* @ts-expect-error Аватары берутся локально, userId не нужен */}
        <UserAvatar
          src={avatar ? teamPhotos[avatar] : defAvatar}
          className={isMobile ? 'rounded-[10px] w-full h-[250px]' : 'w-[120px] h-[120px]'}
          isImgNotOnBackend
        />
        <h4 className={`dark:text-[#7070BF] text-redHover text-center`}>
          {firstName} <br /> ({telegram})
        </h4>
      </div>
      <h5
        className={
          isMobile ? 'text-[#A3A3A3]' : 'text-[#A3A3A3] basis-[150px] grow-0 text-center'
        }
      >
        {role}
      </h5>
      <p
        className={
          isMobile ? 'text-center' : 'grow-0 shrink-0 basis-[65%] text-left leading-7'
        }
      >
        {desc}
      </p>
    </div>
  )
}
export { CardTeammate }

import { type ITeammate } from '@shared/lib/types/types'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

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
      className={`flex items-center  m-auto px-3 py-4 rounded-[10px] text-lg leading-5 ${className} ${
        isMobile
          ? 'flex-col max-w-[400px] bg-ghostlyWhite dark:bg-[#3C3C51] gap-[10px] justify-center h-full'
          : 'gap-2 w-[100%] justify-between'
      }`}
    >
      <div className='flex flex-col gap-[10px] shrink-0 basis-[140px]'>
        <UserAvatar src={avatar} className='w-[80px] h-[80px]' />
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
      <p className={isMobile ? 'text-center' : 'grow-0 shrink-0 basis-[65%] text-left'}>
        {desc}
      </p>
    </div>
  )
}
export { CardTeammate }

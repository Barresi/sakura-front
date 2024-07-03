import { type ITeammate } from '@shared/lib/types/types'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

interface ICardTeammateProps extends ITeammate {
  className?: string
}
const CardTeammate: FC<ICardTeammateProps> = ({
  className,
  avatar,
  desc,
  firstName,
  role,
  telegram
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[10px] px-3 py-4 rounded-[10px] ${className}`}
    >
      <div>
        <UserAvatar src={avatar} className='w-[80px] h-[80px]' />
        <h4>
          {firstName} ({telegram})
        </h4>
      </div>
      <h5>{role}</h5>
      <p>{desc}</p>
    </div>
  )
}
export { CardTeammate }

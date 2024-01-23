import { parseDateToTime } from '@shared/lib/parse-date'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

interface IMessageProps {
  text: string
  my: boolean
  date: string
  firstName: string | undefined | null
  lastName: string | undefined | null
}

const Message: FC<IMessageProps> = ({ text, my, date }) => {
  return (
    <div
      className={`p-[15px] flex items-center w-[60%] min-w-[250px] gap-[10px] ${
        my ? ' self-end  flex-row-reverse' : ' self-start'
      }`}
    >
      <div className='flex flex-col items-center self-start'>
        <UserAvatar />
        <span>{parseDateToTime(date)}</span>
      </div>
      <div
        className={`p-[15px] rounded-[5px] self-start break-all ${
          my ? 'bg-water dark:bg-nickel' : 'bg-darkWhite dark:bg-brownBlack'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export { Message }

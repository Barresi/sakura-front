import { selectAllUsers } from '@app/store/reducers/friends/selectors'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { parseDateToTime } from '@shared/lib/parse-date'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

interface IMessageProps {
  senderId: string
  text: string
  date: string
}

const Message: FC<IMessageProps> = ({ text, senderId, date }) => {
  const allUsers = useAppSelector(selectAllUsers)
  const userInfo = useAppSelector(selectUser)
  const isMyMessage = senderId === userInfo?.id
  const user = isMyMessage ? userInfo : allUsers.find((user) => user.id === senderId)
  return (
    <div
      className={`p-[15px] flex items-center gap-[10px] ${
        isMyMessage ? ' self-end  flex-row-reverse' : ' self-start'
      }`}
    >
      <div className='flex flex-col items-center self-start'>
        <UserAvatar src={user?.avatar || null} />
        <span>{parseDateToTime(date)}</span>
      </div>
      <div
        className={`p-[15px] rounded-[5px] self-start break-words max-w-[250px] usm:max-w-[350px] lg:max-w-[500px] xxl:max-w-[600px] ${
          isMyMessage ? 'bg-water dark:bg-nickel' : 'bg-darkWhite dark:bg-brownBlack'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export { Message }

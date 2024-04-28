import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
import { InputSendMessage } from '@shared/ui/input-send-message'
import { type FC } from 'react'

interface IInputCreatePostProps {
  className?: string
}
const InputCreatePost: FC<IInputCreatePostProps> = ({ className }) => {
  const user = useAppSelector(selectUser)
  return (
    <InputSendMessage
      avatar={user?.avatar}
      sendMessage={() => {}}
      placeholder='Что у вас нового?'
      className={cn(className, 'border-none')}
    />
  )
}
export { InputCreatePost }

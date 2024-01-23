import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { createChatRequest } from '@shared/api/messenger/messenger'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { Button } from '@shared/ui/button'
import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface ButtonFriendWriteMessageProps {
  className?: string
  isMobile: boolean
  friendId: string
}
const ButtonFriendWriteMessage: FC<ButtonFriendWriteMessageProps> = ({
  className,
  friendId,
  isMobile
}) => {
  const { id: userId } = useAppSelector(selectUser)
  const navigate = useNavigate()

  const createChatRequestHandler = async (): Promise<void> => {
    if (!userId) return
    const res = await createChatRequest(userId, friendId)

    if (res.chatId) navigate('/main/messenger/' + res.chatId)
  }

  if (isMobile) {
    return (
      <Button
        icon={'edit'}
        variant='default'
        className='w-[49%] whitespace-nowrap hover:bg-secondary-hover'
        onClick={async () => {
          await createChatRequestHandler()
        }}
      />
    )
  }
  return (
    <Button
      variant='default'
      className={className}
      onClick={async () => {
        await createChatRequestHandler()
      }}
    >
      Написать сообщение
    </Button>
  )
}
export { ButtonFriendWriteMessage }

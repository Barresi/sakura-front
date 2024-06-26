import { useState, type FC } from 'react'
import { cn } from '../lib/merge-classes'
import { Input, type IInputProps } from './input'
import { UserAvatar } from './user-avatar'

import send from '@assets/ui/send.svg'

interface IInputSendMessageProps extends IInputProps {
  avatar?: string | null
  sendMessage: (message: string) => void
}

const InputSendMessage: FC<IInputSendMessageProps> = ({
  avatar,
  className,
  sendMessage,
  ...props
}) => {
  const [message, setMessage] = useState('')

  const withAvatar = avatar !== undefined

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (message) {
          sendMessage(message)
          setMessage('')
        }
      }}
      className='w-full relative flex'
    >
      {withAvatar && (
        <UserAvatar
          src={avatar}
          className='absolute top-[10px] z-[2] left-[20px] w-[40px] h-[40px]'
        />
      )}
      <Input
        className={cn(
          'py-[20px] px-[20px] pr-[60px] rounded-[10px]',
          withAvatar && 'pl-[80px]',
          className
        )}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        value={message}
        {...props}
      />
      <button
        type='submit'
        className='absolute top-[50%] right-[20px] translate-y-[-50%]'
      >
        <img className='cursor-pointer  active:scale-[.95]' src={send} alt='send' />
      </button>
    </form>
  )
}

export { InputSendMessage }

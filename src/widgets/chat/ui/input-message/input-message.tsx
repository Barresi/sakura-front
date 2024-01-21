import { cn } from '@shared/lib/merge-classes'
import { Input, type IInputProps } from '@shared/ui/input'
import { useState, type FC } from 'react'

import smile from '@assets/ui/Smile.svg'
import media from '@assets/ui/paperclip.svg'
import send from '@assets/ui/send.svg'

interface IInputMessageProps extends IInputProps {
  sendMessage: (message: string) => void
}

const InputMessage: FC<IInputMessageProps> = ({ sendMessage, ...props }) => {
  const [message, setMessage] = useState('')
  return (
    <form
      className='w-full relative'
      onSubmit={(e) => {
        e.preventDefault()
        if (message) {
          sendMessage(message)
          setMessage('')
        }
      }}
    >
      <Input
        placeholder='Написать сообщение...'
        {...props}
        className={cn(props.className, 'pr-[120px]')}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        value={message}
      />

      <div className='absolute top-[50%] flex items-center gap-2 translate-y-[-90%] right-[10px]'>
        <button type='button'>
          <img
            className='cursor-pointer active:scale-[.95]'
            src={media}
            alt='media'
            onClick={() => {
              alert('Будет реализовано в будущем!')
            }}
          />
        </button>
        <button type='button'>
          <img
            className='cursor-pointer active:scale-[.95]'
            src={smile}
            alt='smile'
            onClick={() => {
              alert('Будет реализовано в будущем!')
            }}
          />
        </button>
        <button type='submit'>
          <img className='cursor-pointer active:scale-[.95]' src={send} alt='send' />
        </button>
      </div>
    </form>
  )
}

export { InputMessage }

import { type FC, useState } from 'react'
import Input, { type InputProps } from '../../ui/form/input/input'

import media from '@assets/ui/paperclip.svg'
import smile from '@assets/ui/Smile.svg'
import send from '@assets/ui/send.svg'
import { cn } from '@src/utils/utils'

interface IProps extends InputProps {
  sendMessage: (message: string) => void
}

const MessageInput: FC<IProps> = ({ sendMessage, ...props }) => {
  const [message, setMessage] = useState('')
  return (
    <form
      className='w-full relative'
      onSubmit={(e) => {
        e.preventDefault()
        sendMessage(message)
        setMessage('')
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
        <button>
          <img
            className='cursor-pointer active:scale-[.95]'
            src={media}
            alt='media'
            onClick={() => {
              alert('Будет реализовано в будущем!')
            }}
          />
        </button>
        <button>
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

export default MessageInput

import { type FC } from 'react'
import Input, { type IInputProps } from '../input/input'

import media from '@assets/ui/paperclip.svg'
import smile from '@assets/ui/Smile.svg'
import send from '@assets/ui/send.svg'
import { cn } from '@src/utils/utils'

interface IMessageInputProps extends IInputProps {}

const MessageInput: FC<IMessageInputProps> = ({ ...props }) => {
  return (
    <div className="w-full relative">
      <Input
        placeholder="Написать сообщение..."
        {...props}
        className={cn(props.className, 'pr-[120px]')}
      />

      <div className="absolute top-[50%] flex items-center gap-2 translate-y-[-90%] right-[10px]">
        <img
          className="cursor-pointer active:scale-[.95]"
          src={media}
          alt=""
          onClick={() => {
            alert('Будет реализовано в будущем!')
          }}
        />
        <img
          className="cursor-pointer active:scale-[.95]"
          src={smile}
          alt=""
          onClick={() => {
            alert('Будет реализовано в будущем!')
          }}
        />
        <img
          className="cursor-pointer active:scale-[.95]"
          src={send}
          alt=""
          onClick={() => {
            alert('Будет реализовано в будущем!')
          }}
        />
      </div>
    </div>
  )
}

export default MessageInput

import { useState, type ChangeEvent, type FC } from 'react'
import { cn } from '../lib/merge-classes'
import { Input, type IInputProps } from './input'
import { UserAvatar } from './user-avatar'

import clip from '@assets/ui/clip.svg'
import send from '@assets/ui/send.svg'
import { handleFilesChange } from '@shared/lib/handle-file-change'
import { toast } from '@widgets/toaster/lib/use-toast'

interface IInputSendMessageProps extends IInputProps {
  avatar?: string | null
  pictures?: string[]
  sendMessage: (message: string) => void
}

// Todo Переписать в textarea

const InputSendMessage: FC<IInputSendMessageProps> = ({
  pictures,
  avatar,
  className,
  sendMessage,
  ...props
}) => {
  const [message, setMessage] = useState('')
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  const withAvatar = avatar !== undefined

  const handleInputFiles = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files as FileList
    if (files.length > 4) {
      toast({
        title: 'Системное уведомление',
        description: 'Максимумальное количество файлов для загрузки - 4.'
      })
    } else {
      handleFilesChange(files, setPreviewUrls)
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (message) {
          sendMessage(message)
          setMessage('')
        }
      }}
    >
      <div className='flex gap-1'>
        {previewUrls.map((item, ind) => (
          <div key={ind} className='w-[50px] h-[50px]'>
            <img src={item} />
          </div>
        ))}
      </div>
      <div className='w-full relative flex'>
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
        <div className='absolute top-[50%] right-[20px] translate-y-[-50%] flex gap-1'>
          <button
            className='p-1'
            type='button'
            onClick={() =>
              (document.getElementById('clipRef') as HTMLInputElement | null)?.click()
            }
          >
            <img className='cursor-pointer  active:scale-[.95]' src={clip} alt='clip' />
          </button>

          <div className='hidden'>
            <Input
              type='file'
              id='clipRef'
              accept='image/*'
              multiple
              onChange={handleInputFiles}
            />
          </div>

          <button type='submit' className='p-1'>
            <img className='cursor-pointer  active:scale-[.95]' src={send} alt='send' />
          </button>
        </div>
      </div>
    </form>
  )
}

export { InputSendMessage }

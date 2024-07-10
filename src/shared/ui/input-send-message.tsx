import { handleFilesChange } from '@shared/lib/handle-file-change'
import { toast } from '@widgets/toaster/lib/use-toast'
import { useState, type ChangeEvent, type FC } from 'react'
import { cn } from '../lib/merge-classes'
import { Input, type IInputProps } from './input'
import { UserAvatar } from './user-avatar'

import clear from '@assets/ui/Clear.svg'
import clip from '@assets/ui/clip.svg'
import send from '@assets/ui/send.svg'

interface IInputSendMessageProps extends IInputProps {
  avatar?: string | null
  withPicture: boolean
  sendMessage: (message: string, pictures?: FileList) => Promise<void>
}

// Todo Переписать в textarea

const InputSendMessage: FC<IInputSendMessageProps> = ({
  withPicture = false,
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

  const deletePictureFromInput = (ind: number): void => {
    setPreviewUrls(previewUrls.filter((_, i) => ind !== i))
  }

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={(e) => {
        const files = (document.getElementById('clipRef') as HTMLInputElement)?.files
        e.preventDefault()
        if (message) {
          sendMessage(message, files || undefined)
          setMessage('')
          setPreviewUrls([])
        }
      }}
    >
      <div className='flex gap-2 pl-5 pr-5'>
        {previewUrls.map((item, ind) => (
          <div key={ind} className=' relative'>
            <img src={item} className='object-cover w-[70px] h-[70px] rounded-[10px]' />
            <button
              onClick={() => {
                deletePictureFromInput(ind)
              }}
              type='button'
              className='rounded-full bg-white w-5 h-5 lg:w-4 lg:h-4 p-[2px] absolute right-0 top-0'
            >
              <img src={clear} className='w-full h-full' />
            </button>
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
            withPicture && 'pr-[100px]',
            className
          )}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          value={message}
          {...props}
        />
        <div className='absolute top-[50%] right-[20px] translate-y-[-50%] flex gap-1'>
          {withPicture && (
            <div>
              <button
                className='p-1 w-full h-full'
                type='button'
                onClick={() =>
                  (document.getElementById('clipRef') as HTMLInputElement | null)?.click()
                }
              >
                <img
                  className='cursor-pointer  active:scale-[.95]'
                  src={clip}
                  alt='clip'
                />
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
            </div>
          )}

          <button type='submit' className='p-1'>
            <img className='cursor-pointer  active:scale-[.95]' src={send} alt='send' />
          </button>
        </div>
      </div>
    </form>
  )
}

export { InputSendMessage }

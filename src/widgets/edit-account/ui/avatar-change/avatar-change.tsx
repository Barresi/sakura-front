import { Input } from '@shared/ui/input'
import { UserAvatar } from '@shared/ui/user-avatar'
import { useState, type FC, type ReactNode } from 'react'
import { handleFileChange } from '../../lib/handle-file-change'

interface IAvatarChangeProps {
  children?: ReactNode
  className?: string
}
const AvatarChange: FC<IAvatarChangeProps> = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  return (
    <div
      className='cursor-pointer relative mt-[50px] h-[100%] w-[100%] usm:absolute usm:mt-0 usm:left-[20px] usm:bottom-[20px] usm:w-[150px] usm:h-[150px] lg:left-[30px] lg:bottom-[30px] xxl:left-[20px] rounded-full usm:border-[4px] dark:border-grayBlue'
      onClick={() =>
        (document.getElementById('avatarRef') as HTMLInputElement | null)?.click()
      }
    >
      {/* Todo сделать затемнение только при ховере */}
      <div className='absolute left-0 right-0 top-0 bottom-0 rounded-full flex justify-center items-center'>
        <span className='z-20 text-md usm:text-sm font-medium text-white'>
          Изменить фото
        </span>
        <div className='z-10 flex justify-center items-center bg-black opacity-20 absolute left-0 right-0 top-0 bottom-0 rounded-full' />
      </div>

      <UserAvatar className='h-[100%] w-[100%]' src={previewUrl || undefined} />
      <Input
        type='file'
        className='hidden'
        id='avatarRef'
        onChange={(e) => {
          handleFileChange(e, setPreviewUrl)
        }}
      />
    </div>
  )
}
export { AvatarChange }

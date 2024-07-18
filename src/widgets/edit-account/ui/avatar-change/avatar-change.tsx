import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { handleFilesChange } from '@shared/lib/handle-file-change'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { URL_AVATARS } from '@shared/lib/url'
import { Input } from '@shared/ui/input'
import { UserAvatar } from '@shared/ui/user-avatar'
import { useEffect, useState, type FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const AvatarChange: FC = () => {
  const { control } = useFormContext()
  const user = useAppSelector(selectUser)

  return (
    <Controller
      name='avatar'
      control={control}
      render={({ field: { onChange, value } }) => {
        const [previewUrl, setPreviewUrl] = useState<string[] | null>(null)
        useEffect(() => {
          if (value) {
            handleFilesChange(value, setPreviewUrl)
          } else {
            setPreviewUrl(null)
          }
        }, [value])

        const [avatarImg, setAvatarImg] = useState<string | null>(null)
        useEffect(() => {
          if (previewUrl) {
            setAvatarImg(previewUrl[0])
          } else if (user?.avatar) {
            const urlOnBackend = `${URL_AVATARS}${user?.id}/${user?.avatar}`
            setAvatarImg(urlOnBackend)
          } else {
            setAvatarImg(null)
          }
        }, [previewUrl, user?.avatar])
        return (
          <div
            className='cursor-pointer relative mt-[50px] h-[100%] w-[100%] usm:absolute usm:mt-0 usm:left-[20px] usm:bottom-[20px] usm:w-[150px] usm:h-[150px] lg:left-[30px] lg:bottom-[30px] xxl:left-[20px] rounded-full usm:border-[4px] dark:border-grayBlue group'
            onClick={() =>
              (document.getElementById('avatarRef') as HTMLInputElement | null)?.click()
            }
          >
            <div className='absolute left-0 right-0 top-0 bottom-0 rounded-full flex lg:hidden justify-center items-center group-hover:flex'>
              <span className='z-[3] text-md usm:text-sm font-medium text-white'>
                Изменить фото
              </span>
              <div className='z-[2] flex justify-center items-center bg-black opacity-20 absolute left-0 right-0 top-0 bottom-0 rounded-full' />
            </div>

            <UserAvatar
              className='h-[100%] w-[100%]'
              src={avatarImg || null}
              isImgNotOnBackend
              userId={user?.id}
            />
            <Input
              type='file'
              className='hidden'
              id='avatarRef'
              accept='image/*'
              onChange={(e) => {
                const files = e.target.files as FileList
                handleFilesChange(files, setPreviewUrl)
                onChange(files[0])
              }}
            />
          </div>
        )
      }}
    />
  )
}
export { AvatarChange }

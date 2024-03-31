import { Banner } from '@shared/ui/banner'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { useEffect, useState, type FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { handleFileChange } from '../../lib/handle-file-change'

const BannerChange: FC = () => {
  const { control } = useFormContext()

  return (
    <Controller
      name='banner'
      control={control}
      render={({ field: { onChange, value } }) => {
        const [previewUrl, setPreviewUrl] = useState<string | null>(null)

        useEffect(() => {
          if (value) {
            handleFileChange(value, setPreviewUrl)
          } else {
            setPreviewUrl(null)
          }
        }, [value])
        return (
          <div className='relative flex-grow h-[120px] usm:h-full w-full'>
            <Banner src={previewUrl || undefined} />
            <Button
              variant='secondary'
              className='absolute bottom-[40px] right-[50%] translate-x-[50%] usm:translate-x-0 usm:right-[20px] usm:bottom-[20px] w-[190px] h-[40px] lg:right-[30px] lg:bottom-[30px] xxl:right-[20px]'
              type='button'
              onClick={() =>
                (document.getElementById('bannerRef') as HTMLInputElement | null)?.click()
              }
            >
              Изменить обложку
            </Button>
            <Input
              type='file'
              className='hidden'
              id='bannerRef'
              accept='image/*'
              onChange={(e) => {
                const file = (e.target.files as FileList)[0]
                handleFileChange(file, setPreviewUrl)
                onChange(file)
              }}
            />
          </div>
        )
      }}
    />
  )
}
export { BannerChange }

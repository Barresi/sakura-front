import { Banner } from '@shared/ui/banner'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { useState, type FC, type ReactNode } from 'react'
import { handleFileChange } from '../../lib/handle-file-change'

interface IBannerChangeProps {
  children?: ReactNode
  className?: string
}
const BannerChange: FC<IBannerChangeProps> = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
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
        onChange={(e) => {
          handleFileChange(e, setPreviewUrl)
        }}
      />
    </div>
  )
}
export { BannerChange }

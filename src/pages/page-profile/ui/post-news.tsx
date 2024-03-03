import { Button } from '@shared/ui/button'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC, type ReactNode } from 'react'

import icon1 from './svg/icon1.svg'

import EyeIcon from './svg/Eye.svg'
import LikeIcon from './svg/Like.svg'
import ShareIcon from './svg/Share.svg'
import CommentIcon from './svg/comment.svg'

import SendIcon from './svg/Send.svg'
import SmileIcon from './svg/Smile.svg'
import PaperClipIcon from './svg/paperclip.svg'

import Image1 from './image/image.png'
import Image2 from './image/image2.png'
import Image3 from './image/image3.png'

interface IPostNewsProps {
  children?: ReactNode
  className?: string
}
const PostNews: FC<IPostNewsProps> = ({ className, children }) => {
  return (
    <div className='w-full bg-white dark:bg-grayBlue rounded-[10px] p-[30px] grid gap-[20px]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-start w-full'>
          <UserAvatar className='w-[50px] h-[50px] mr-[15px]' />
          <div>
            <h4 className='text-[#D22828] text-[18px] font-bold'>Борис Маслов</h4>
            <p className='text-[#ADB5BD]'>21 окт. в 13:11</p>
          </div>
        </div>
        <div>
          <Button variant='text'>
            <img src={icon1} />
          </Button>
        </div>
      </div>
      <p>
        15 октября прошёл финал онлайн-хакатона VTB API hackathon 2022, я принял в нем
        участие, участвовал впервые. Наша команда в составе 3-ёх человек заняла 7 место.
        Было 2 задачи:
        <br /> <br />
        1 Создайте продукты на основе API <br /> 2 Разработайте инструменты обеспечения
        безопасности API <br />
        <span className='text-[#20B5EE]'>Показать полностью</span>
      </p>
      <div className='grid grid-rows-1 grid-flow-col gap-3 md:h-[500px]'>
        <div>
          <img className='h-full object-cover rounded-[10px]' src={Image3} />
        </div>
        <div className='hidden md:grid md:gap-3'>
          <img className='h-full object-cover rounded-[10px]' src={Image2} />
          <img className='h-full object-cover rounded-[10px]' src={Image1} />
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-[2px] md:gap-[10px]'>
          <Button
            variant='text'
            className='md:border-2 md:border-[#D22828] rounded-[20px]'
          >
            <img src={LikeIcon} /> 10
          </Button>
          <Button
            variant='text'
            className='md:border-2 md:border-[#D22828] rounded-[20px]'
          >
            <img src={CommentIcon} /> 10
          </Button>
          <Button
            variant='text'
            className='md:border-2 md:border-[#D22828] rounded-[20px]'
          >
            <img src={ShareIcon} /> 10
          </Button>
        </div>
        <div>
          <p className='flex flex-row'>
            <img className='mr-1' src={EyeIcon} /> 1
          </p>
        </div>
      </div>
      <hr />
      <div className='flex flex-row justify-start w-full'>
        <UserAvatar className='w-[50px] h-[50px] mr-[15px]' />
        <div>
          <h4 className='text-[#D22828] text-[18px] font-bold'>Борис Маслов</h4>
          <p className='text-[16px]'>Классное фото</p>
          <p className='text-[#ADB5BD] text-[15px]'>
            21 окт. в 13:11 <span className='text-[#55677D]'>Ответить</span>
          </p>
        </div>
      </div>
      <div className='relative'>
        <input
          type='text'
          placeholder='Написать...'
          className='w-full border-2 border-[#ADB5BD] p-[10px] rounded-[10px]'
        />

        <div className='flex flex-row gap-[10px] absolute top-[4px] right-[5px]'>
          <Button variant='text' className='p-0'>
            <img src={PaperClipIcon} />
          </Button>
          <Button variant='text' className='p-0'>
            <img src={SmileIcon} />
          </Button>
          <Button variant='text' className='p-0'>
            <img src={SendIcon} />
          </Button>
        </div>
      </div>
    </div>
  )
}
export { PostNews }

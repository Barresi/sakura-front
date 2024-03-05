import { Button } from '@shared/ui/button'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC, type ReactNode } from 'react'

import icon1 from './svg/icon1.svg'

import EyeIcon from './svg/Eye.svg'

import { ButtonAction } from '@shared/ui/button-action'
import { InputSendMessage } from '@shared/ui/input-send-message'
import Image1 from './image/image.png'

interface IPostNewsProps {
  children?: ReactNode
  className?: string
}
const PostNews: FC<IPostNewsProps> = () => {
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
          <img className='h-full object-cover rounded-[10px]' src={Image1} />
        </div>
        <div className='hidden md:grid md:gap-3'>
          <img className='h-full object-cover rounded-[10px]' src={Image1} />
          <img className='h-full object-cover rounded-[10px]' src={Image1} />
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-[2px] md:gap-[10px]'>
          <ButtonAction icon='like'>10</ButtonAction>
          <ButtonAction icon='comment'>10</ButtonAction>
          <ButtonAction icon='share'>10</ButtonAction>
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
      <InputSendMessage sendMessage={() => {}} placeholder='Написать сообщение...' />
    </div>
  )
}
export { PostNews }

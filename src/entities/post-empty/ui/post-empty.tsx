import { parseDateToMonth, parseDateToTime } from '@shared/lib/parse-date'
import { Button } from '@shared/ui/button'
import { ButtonAction } from '@shared/ui/button-action'
import { LinkName } from '@shared/ui/link-name'
import { UserAvatar } from '@shared/ui/user-avatar'
import { useState, type FC, type ReactNode } from 'react'

import eye from '@assets/ui/Eye.svg'

interface IPostEmpty {
  children: ReactNode
}

const PostEmpty: FC<IPostEmpty> = ({ children }) => {
  const [isLiked, setLiked] = useState(false)
  const [date] = useState(new Date())

  return (
    <div className='w-full bg-white dark:bg-grayBlue rounded-[10px] p-[30px] grid gap-[20px]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-start w-full'>
          <UserAvatar
            src={undefined}
            userId={undefined}
            className='w-[50px] h-[50px] mr-[15px]'
          />
          <div>
            <LinkName
              link={undefined}
              className='text-[#D22828] text-[18px] font-bold cursor-default hover:no-underline'
            >
              Система Sakura
            </LinkName>
            <p className='text-[#ADB5BD]'>{`${parseDateToMonth(date)} в ${parseDateToTime(
              date
            )}`}</p>
          </div>
        </div>
        <div className='ml-2'>
          <Button variant='text' icon='more' className={'p-0'} />
        </div>
      </div>

      {children}

      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-[2px] md:gap-[10px]'>
          <ButtonAction
            icon='like'
            isActive={isLiked}
            onClick={() => {
              setLiked(!isLiked)
            }}
          >
            {isLiked ? 1 : 0}
          </ButtonAction>
        </div>
        <div>
          <div className='flex flex-row text-lg font-bold text-darkElectricBlue leading-[23px] gap-2'>
            <img src={eye} />
            {1}
          </div>
        </div>
      </div>
      <hr className='text-lg font-bold text-darkElectricBlue leading-[23px]' />
    </div>
  )
}
export { PostEmpty }

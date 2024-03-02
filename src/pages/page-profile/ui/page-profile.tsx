import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { UserAvatar } from '@shared/ui/user-avatar'
import { Button } from '@shared/ui/button'
import { type FC } from 'react'
import banner from '@assets/banner/default user banner.jpg'
import avatarLight from '@assets/avatar/default avatar light.svg'

import CalenderIcon from './svg/Calendar.svg'
import UserIcon from './svg/User.svg'
import BankIcon from './svg/bank.svg'
import LoacationIcon from './svg/Location Point.svg'

import icon1 from './svg/icon1.svg'

import EyeIcon from './svg/Eye.svg'
import CommentIcon from './svg/comment.svg'
import LikeIcon from './svg/Like.svg'
import ShareIcon from './svg/Share.svg'

import SmileIcon from './svg/Smile.svg'
import PaperClipIcon from './svg/paperclip.svg'
import SendIcon from './svg/Send.svg'

import Image1 from './image/image.png'
import Image2 from './image/image2.png'
import Image3 from './image/image3.png'

const PageProfile: FC = () => {
  const user = useAppSelector(selectUser)

  return (
    <div>
      <div className='w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] lg:mb-[20px] px-[20px] lg:px-0'>
        <div className='hidden xl:block w-full xl:w-1/3'>
          <div className='bg-white dark:bg-grayBlue xl:p-[30px] rounded-[10px]'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row justify-start w-full'>
                <UserAvatar src={avatarLight} className='w-[120px] h-[120px] mr-[15px]' />
                <div className='grid gap-[10px]'>
                  <h4 className='text-[18px]'>Борис Маслов</h4>
                  <p className='flex flex-row text-[15px]'>
                    <img src={LoacationIcon} alt='' /> Москва
                  </p>
                  <p className='flex flex-row text-[15px]'>
                    <img src={UserIcon} alt='' /> Мужской
                  </p>
                  <p className='flex flex-row text-[15px]'>
                    <img src={BankIcon} alt='' /> overcast
                  </p>
                  <p className='flex flex-row text-[15px]'>
                    <img src={CalenderIcon} alt='' />
                    20.05.1995
                  </p>
                </div>
              </div>
              <div>
                <Button icon={'edit'} iconPos='left' variant='secondary'></Button>
              </div>
            </div>
            <div className='flex flex-row justify-between items-center border-2 border-[#F2F2F2] rounded-[10px] px-[20px] py-[10px] mt-[20px]'>
              <p>8 друзей</p>
              <div className='relative flex flex-row justify-between'>
                <UserAvatar src={avatarLight} className='w-[40px] h-[40px] mr-[15px]' />
                <UserAvatar
                  src={avatarLight}
                  className='absolute w-[40px] h-[40px] mr-[15px] right-[15px]'
                />
                <UserAvatar
                  src={avatarLight}
                  className='absolute w-[40px] h-[40px] mr-[15px] right-[30px]'
                />
                <UserAvatar
                  src={avatarLight}
                  className='absolute w-[40px] h-[40px] mr-[15px] right-[45px]'
                />
                <UserAvatar
                  src={avatarLight}
                  className='absolute w-[40px] h-[40px] mr-[15px] right-[60px]'
                />
              </div>
            </div>
            <div className='mt-[20px]'>
              <p>
                Я - опытный UX/UI дизайнер с более чем 4-летним стажем работы в этой
                области.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full xl:w-2/3 rounded-[10px] grid gap-[20px] xl:gap-[30px]'>
          <img
            src={banner}
            alt='banner'
            className='w-[100%] object-cover rounded-[6px]'
          />
          {/* mobile user info */}

          <div className='relative bg-white dark:bg-grayBlue p-[30px] rounded-[10px]'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row justify-start w-full'>
                <div className='w-[120px]'></div>
                <UserAvatar
                  src={avatarLight}
                  className='absolute w-[120px] h-[120px] mr-[15px] left-[20px] top-[-40px]'
                />
                <div>
                  <h4 className='text-[18px] mb-[10px]'>Борис Маслов</h4>
                  <div className='flex flex-row'>
                    <p className='flex flex-row text-[15px] mr-[10px]'>
                      <img src={LoacationIcon} alt='' /> Москва
                    </p>
                    <p className='flex flex-row text-[15px] mr-[10px]'>
                      <img src={UserIcon} alt='' /> Мужской
                    </p>
                    <p className='flex flex-row text-[15px] mr-[10px]'>
                      <img src={BankIcon} alt='' /> overcast
                    </p>
                    <p className='flex flex-row text-[15px] mr-[10px]'>
                      <img src={CalenderIcon} alt='' />
                      20.05.1995
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Button icon={'edit'} iconPos='left' variant='secondary'></Button>
              </div>
            </div>
            <div className='w-full flex items-center flex-col lg:flex-row'>
              <div className='mt-[20px] w-full lg:w-1/2'>
                <p>
                  Я - опытный UX/UI дизайнер с более чем 4-летним стажем работы в этой
                  области.
                </p>
              </div>
              <div className='flex flex-row justify-between items-center lg:w-1/2 border-2 border-[#F2F2F2] rounded-[10px] px-[20px] py-[10px] mt-[20px]'>
                <p>8 друзей</p>
                <div className='relative flex flex-row justify-between'>
                  <UserAvatar src={avatarLight} className='w-[40px] h-[40px] mr-[15px]' />
                  <UserAvatar
                    src={avatarLight}
                    className='absolute w-[40px] h-[40px] mr-[15px] right-[15px]'
                  />
                  <UserAvatar
                    src={avatarLight}
                    className='absolute w-[40px] h-[40px] mr-[15px] right-[30px]'
                  />
                  <UserAvatar
                    src={avatarLight}
                    className='absolute w-[40px] h-[40px] mr-[15px] right-[45px]'
                  />
                  <UserAvatar
                    src={avatarLight}
                    className='absolute w-[40px] h-[40px] mr-[15px] right-[60px]'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* News Input */}

          <div className='w-full bg-white dark:bg-grayBlue rounded-[10px]'>
            <input
              type='text'
              className='bg-white dark:bg-grayBlue w-full p-[20px] rounded-[10px]'
              placeholder='Что у вас нового?'
            />
          </div>

          <div className='w-full bg-white dark:bg-grayBlue rounded-[10px] p-[30px] grid gap-[20px]'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row justify-start w-full'>
                <UserAvatar src={avatarLight} className='w-[50px] h-[50px] mr-[15px]' />
                <div>
                  <h4 className='text-[#D22828] text-[18px] font-bold'>Борис Маслов</h4>
                  <p className='text-[#ADB5BD]'>21 окт. в 13:11</p>
                </div>
              </div>
              <div>
                <Button variant='text'>
                  <img src={icon1} alt='' />
                </Button>
              </div>
            </div>
            <p>
              15 октября прошёл финал онлайн-хакатона VTB API hackathon 2022, я принял в
              нем участие, участвовал впервые. Наша команда "Hack the hackathon" в составе
              3-ёх человек заняла 7 место. Было 2 задачи:
              <br /> <br />
              1) Создайте продукты на основе API <br /> 2) Разработайте инструменты
              обеспечения безопасности API <br />
              <span className='text-[#20B5EE]'>Показать полностью</span>
            </p>
            <div className='grid grid-rows-1 grid-flow-col gap-3 md:h-[500px]'>
              <div>
                <img className='h-full object-cover rounded-[10px]' src={Image3} alt='' />
              </div>
              <div className='hidden md:grid md:gap-3'>
                <img className='h-full object-cover rounded-[10px]' src={Image2} alt='' />
                <img className='h-full object-cover rounded-[10px]' src={Image1} alt='' />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-row gap-[2px] md:gap-[10px]'>
                <Button
                  variant='text'
                  className='md:border-2 md:border-[#D22828] rounded-[20px]'
                >
                  <img src={LikeIcon} alt='' /> 10
                </Button>
                <Button
                  variant='text'
                  className='md:border-2 md:border-[#D22828] rounded-[20px]'
                >
                  <img src={CommentIcon} alt='' /> 10
                </Button>
                <Button
                  variant='text'
                  className='md:border-2 md:border-[#D22828] rounded-[20px]'
                >
                  <img src={ShareIcon} alt='' /> 10
                </Button>
              </div>
              <div>
                <p className='flex flex-row'>
                  <img className='mr-1' src={EyeIcon} alt='' /> 1
                </p>
              </div>
            </div>
            <hr />
            <div className='flex flex-row justify-start w-full'>
              <UserAvatar src={avatarLight} className='w-[50px] h-[50px] mr-[15px]' />
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
                  <img src={PaperClipIcon} alt='' />
                </Button>
                <Button variant='text' className='p-0'>
                  <img src={SmileIcon} alt='' />
                </Button>
                <Button variant='text' className='p-0'>
                  <img src={SendIcon} alt='' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export { PageProfile }

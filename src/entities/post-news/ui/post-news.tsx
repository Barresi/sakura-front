import { parseDateToMonth, parseDateToTime } from '@shared/lib/parse-date'
import { type IPost } from '@shared/lib/types/api'
import { LinkName } from '@shared/ui/link-name'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC, type ReactNode } from 'react'

import eye from '@assets/ui/Eye.svg'
import { CarouselItem, CarouselWithPoints } from '@shared/ui/carousel'

interface IPostNewsProps {
  post: IPost | undefined
  buttonLike: ReactNode
  buttonDelete: ReactNode
}
const PostNews: FC<IPostNewsProps> = ({ post, buttonLike, buttonDelete }) => {
  const createDate = post?.createdAt
    ? `${parseDateToMonth(post?.createdAt)} в ${parseDateToTime(post?.createdAt)}`
    : 'Дата неизвестна'
  const urlOnBackend = `${
    import.meta.env.VITE_BACKEND_DOMEN
  }/ftp/posts/${post?.createdById}/`
  return (
    <div className='w-full bg-white dark:bg-grayBlue rounded-[10px] p-[30px] grid gap-[20px]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-start w-full'>
          <UserAvatar
            className='w-[50px] h-[50px] mr-[15px]'
            src={post?.createdBy?.avatar || null}
            link={post?.createdBy?.id}
          />
          <div>
            <LinkName
              link={post?.createdBy.id}
              className='text-[#D22828] text-[18px] font-bold'
            >{`${post?.createdBy?.firstName} ${post?.createdBy?.lastName}`}</LinkName>
            <p className='text-[#ADB5BD]'>{createDate}</p>
          </div>
        </div>
        <div className='ml-2'>{buttonDelete}</div>
      </div>
      <p>
        {post?.text}
        {/* Todo добавить показать полностью */}
      </p>

      {post?.pictures.length && (
        <CarouselWithPoints className='sm:hidden'>
          {post?.pictures.map((picture, ind) => (
            <CarouselItem key={ind}>
              <img
                src={urlOnBackend + picture}
                className='object-cover w-full h-full rounded-[10px] max-h-[400px] min-h-[150px]'
              />
            </CarouselItem>
          ))}
        </CarouselWithPoints>
      )}

      <div className=' grid-cols-2 auto-rows-fr gap-3 max-h-[500px] hidden sm:grid'>
        {post?.pictures.map((picture, ind) => (
          <img
            src={urlOnBackend + picture}
            key={ind}
            className={`object-cover w-full h-full rounded-[10px] ${
              post?.pictures.length === 1 && ind === 0 ? 'col-span-2' : ''
            } ${post?.pictures.length === 3 && ind === 0 ? 'row-span-2' : ''}`}
          />
        ))}
      </div>

      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-[2px] md:gap-[10px]'>
          {buttonLike}
          {/* <ButtonAction icon='comment'>10</ButtonAction>
          <ButtonAction icon='share'>10</ButtonAction> */}
        </div>
        <div>
          <div className='flex flex-row text-lg font-bold text-darkElectricBlue leading-[23px] gap-2'>
            <img src={eye} />
            {post?.watchedBy.length}
          </div>
        </div>
      </div>
      <hr className='text-lg font-bold text-darkElectricBlue leading-[23px]' />
      {/* 
      <div className='flex flex-row justify-start w-full'>
        <UserAvatar src={} className='w-[50px] h-[50px] mr-[15px]' />
        <div>
          <h4 className='text-[#D22828] text-[18px] font-bold'>Борис Маслов</h4>
          <p className='text-[16px]'>Классное фото</p>
          <p className='text-[#ADB5BD] text-[15px]'>
            21 окт. в 13:11 <span className='text-[#55677D]'>Ответить</span>
          </p>
        </div>
      </div>
      <InputSendMessage sendMessage={() => {}} placeholder='Написать сообщение...' /> */}
    </div>
  )
}
export { PostNews }

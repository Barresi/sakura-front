import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { parseDateToMonth, parseDateToTime } from '@shared/lib/parse-date'
import { type IPost } from '@shared/lib/types/api'
import { LinkName } from '@shared/ui/link-name'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC, type ReactNode } from 'react'

import eye from '@assets/ui/Eye.svg'
import { CarouselItem, CarouselWithPoints } from '@shared/ui/carousel'
import { ShowFullText } from '@shared/ui/show-full-text'

interface IPostNewsProps {
  post: IPost | undefined
  buttonLike: ReactNode
  buttonDelete: ReactNode
}
const PostNews: FC<IPostNewsProps> = ({ post, buttonLike, buttonDelete }) => {
  const maxLength = useWindowSize(1024) ? 200 : 400
  const isMobile = useWindowSize(640)

  const createDate = post?.createdAt
    ? `${parseDateToMonth(post?.createdAt)} в ${parseDateToTime(post?.createdAt)}`
    : 'Дата неизвестна'

  const urlOnBackend = `${
    import.meta.env.VITE_BACKEND_DOMEN
  }/ftp/posts/${post?.createdById}/`

  const pictures = (): null | ReactNode => {
    if (!post?.pictures.length) return null
    // Десктоп версия картинок
    if (isMobile) {
      if (post?.pictures.length === 1)
        return (
          <img
            src={urlOnBackend + post?.pictures[0]}
            className='object-cover w-full h-full rounded-[10px] max-h-[400px] min-h-[150px]'
          />
        )

      return (
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
      )
    }

    return (
      <div className=' grid-cols-2 auto-rows-fr gap-3 max-h-[500px] grid'>
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
    )
  }

  return (
    <div className='w-full bg-white dark:bg-grayBlue rounded-[10px] p-[30px] grid gap-[20px]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-start w-full'>
          <UserAvatar
            className='w-[50px] h-[50px] mr-[15px]'
            src={post?.createdBy?.avatar || null}
            link={post?.createdBy?.id}
            userId={post?.createdById}
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

      <ShowFullText text={post?.text} maxLength={maxLength} />

      {pictures()}

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

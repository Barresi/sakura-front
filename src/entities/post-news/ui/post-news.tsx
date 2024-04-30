import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { parseDateToMonth, parseDateToTime } from '@shared/lib/parse-date'
import { type IPost } from '@shared/lib/types/api'
import { Button } from '@shared/ui/button'
import { ButtonAction } from '@shared/ui/button-action'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type FC } from 'react'

interface IPostNewsProps {
  post: IPost | undefined
  className?: string
}
const PostNews: FC<IPostNewsProps> = ({ post }) => {
  const user = useAppSelector(selectUser)
  const createDate = post?.createdAt
    ? `${parseDateToMonth(post?.createdAt)} в ${parseDateToTime(post?.createdAt)}`
    : 'Дата неизвестна'
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
            <h4 className='text-[#D22828] text-[18px] font-bold'>{`${post?.createdBy?.firstName} ${post?.createdBy?.lastName}`}</h4>
            <p className='text-[#ADB5BD]'>{createDate}</p>
          </div>
        </div>
        <div>
          <Button variant='text' icon='more' />
        </div>
      </div>
      <p>
        {post?.text}
        <span className='text-[#20B5EE]'>Показать полностью</span>
      </p>
      <div className='grid grid-rows-1 grid-flow-col gap-3 md:h-[500px]'>
        {post?.pictures.map((picture, ind) => <img src={picture} key={ind} />)}
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-[2px] md:gap-[10px]'>
          <ButtonAction
            icon='like'
            isActive={!!post?.likedBy.find((item) => item.id === user?.id)}
          >
            {post?.likedBy.length || 0}
          </ButtonAction>
          {/* <ButtonAction icon='comment'>10</ButtonAction>
          <ButtonAction icon='share'>10</ButtonAction> */}
        </div>
        <div>
          <p className='flex flex-row'>{post?.watched || 0}</p>
        </div>
      </div>
      <hr />
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

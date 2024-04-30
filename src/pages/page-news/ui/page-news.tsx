import { selectFriends } from '@app/store/reducers/friends/selectors'
import { selectAllPosts } from '@app/store/reducers/news/selectors'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { PostNews } from '@entities/post-news/ui/post-news'
import { InputCreatePost } from '@features/input-create-post'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { NewsTabs } from '@shared/lib/types/other'
import { type FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FilterNewsTabs } from './filter-news-tabs/filter-news-tabs'

const PageNews: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    newstype: NewsTabs.ALL
  })
  const type = searchParams.get('newstype') as NewsTabs
  const user = useAppSelector(selectUser)
  const friendsId = useAppSelector(selectFriends).map((item) =>
    item.fromId === user?.id ? item.toId : item.fromId
  )
  const posts = useAppSelector(selectAllPosts)
  const tabs = {
    [NewsTabs.ALL]: posts,
    [NewsTabs.FRIENDS]: posts.filter(
      (post) => friendsId.findIndex((id) => id === post.createdById) === 0
    )
  }
  const handleChangeType = (newstype: NewsTabs): void => {
    setSearchParams({ newstype })
  }
  return (
    <div className='w-full flex flex-col xxl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] lg:mb-[20px] px-[20px] lg:px-0'>
      <FilterNewsTabs handleChangeType={handleChangeType} type={type} />

      <div className='list w-full xxl:w-2/3 rounded-[10px] flex flex-col gap-[30px]'>
        <InputCreatePost />
        {tabs[type].map((post, ind) => (
          <PostNews post={post} key={ind} />
        ))}
      </div>
    </div>
  )
}
export { PageNews }

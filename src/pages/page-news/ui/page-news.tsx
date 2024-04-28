import { PostNews } from '@entities/post-news/ui/post-news'
import { InputCreatePost } from '@features/input-create-post'
import { NewsTabs } from '@shared/lib/types/other'
import { type FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FilterNewsTabs } from './filter-news-tabs/filter-news-tabs'

const PageNews: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    newstype: NewsTabs.ALL
  })
  const type = searchParams.get('newstype') as NewsTabs
  const handleChangeType = (newstype: NewsTabs): void => {
    setSearchParams({ newstype })
  }
  return (
    <div className='w-full flex flex-col xxl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] lg:mb-[20px] px-[20px] lg:px-0'>
      <FilterNewsTabs handleChangeType={handleChangeType} type={type} />

      <div className='list w-full xxl:w-2/3 rounded-[10px] flex flex-col gap-[30px]'>
        <InputCreatePost />
        <PostNews />
        <PostNews />
        <PostNews />
      </div>
    </div>
  )
}
export { PageNews }

import { NewsTabs } from '@shared/lib/types/other'
import { ButtonTab } from '@shared/ui/button-tab'
import { type FC } from 'react'

interface IFilterNewsTabsProps {
  handleChangeType: (newstype: NewsTabs) => void
  type: NewsTabs
}

const FilterNewsTabs: FC<IFilterNewsTabsProps> = ({ handleChangeType, type }) => {
  return (
    <div className='w-full xxl:w-1/3 h-fit flex flex-col bg-white dark:bg-grayBlue rounded-[10px] p-[20px] [&>div]:w-[100%] sm:flex-row md:gap-[1rem] xxl:gap-0 xxl:p-[30px] xxl:flex-col'>
      <ButtonTab
        isActive={type === NewsTabs.ALL}
        onClick={() => {
          handleChangeType(NewsTabs.FRIENDS)
        }}
      >
        Все
      </ButtonTab>
      <ButtonTab
        isActive={type === NewsTabs.FRIENDS}
        onClick={() => {
          handleChangeType(NewsTabs.ALL)
        }}
      >
        Друзья
      </ButtonTab>
    </div>
  )
}
export { FilterNewsTabs }

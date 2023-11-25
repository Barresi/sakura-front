import { type FC } from 'react'
import Input, { type IInputProps } from '../input/input'

import icon from '@assets/ui/Search.svg'
import { cn } from '@utils/utils'

interface ISearchInputProps extends Omit<IInputProps, 'type'> {}

const SearchInput: FC<ISearchInputProps> = ({ className, ...props }) => {
  return (
    <div className='flex items-center relative'>
      <Input
        className={cn(
          'bg-smokyWhite dark:bg-grayBlue py-[10px] rounded-[10px] pr-[60px]',
          className
        )}
        placeholder='Поиск'
        type='text'
        {...props}
      />

      <img className='absolute top-[52%] right-4 translate-y-[-100%]' src={icon} alt='' />
    </div>
  )
}

export default SearchInput

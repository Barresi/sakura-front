import { type FC } from 'react'
import { cn } from '../lib/merge-classes'
import { Input, type IInputProps } from './input'

import search from '@assets/ui/Search.svg'

interface IInputSearchProps extends Omit<IInputProps, 'type'> {}

const InputSearch: FC<IInputSearchProps> = ({ className, ...props }) => {
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
      <img
        className='absolute top-[50%] right-4 translate-y-[-50%]'
        src={search}
        alt='search'
      />
    </div>
  )
}

export { InputSearch }

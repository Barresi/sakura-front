import { type FC, type ReactNode } from 'react'
import { cn } from '../lib/merge-classes'

interface ICardProps {
  children: ReactNode
  className?: string
}

const Card: FC<ICardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'w-full bg-white dark:bg-grayBlue rounded-tl-[10px] border-2 border-white dark:border-grayBlue border-b-smokyWhite dark:border-b-cadet  px-[15px] lg:px-[30px] py-[20px]',
        className
      )}
    >
      {children}
    </div>
  )
}

export { Card }

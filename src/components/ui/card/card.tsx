import { type FC, type ReactNode } from 'react'
import { cn } from '@utils/utils'

interface ICardProps {
  children: ReactNode
  className?: string
}

const Card: FC<ICardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'w-full bg-white dark:bg-grayBlue rounded-tl-[10px] border border-white dark:border-grayBlue border-b-smokyWhite dark:border-b-cadet hover:bg-ghostlyWhite dark:hover:bg-brownBlack px-0 usm:px-[15px] lg:px-[30px] py-[20px] hover:border',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card

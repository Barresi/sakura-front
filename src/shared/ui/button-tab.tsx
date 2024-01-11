import { type FC, type ReactNode } from 'react'
import { Badge } from './badge'
import { Button } from './button'

interface IButtonTabProps {
  children: ReactNode
  badge?: number
  isActive: boolean
  onClick: () => void
}

const ButtonTab: FC<IButtonTabProps> = ({ children, badge, isActive, onClick }) => {
  return (
    <div
      className={isActive ? 'bg-smokyWhite dark:bg-brownBlack rounded-md' : 'rounded-md'}
    >
      <Button
        className={
          'w-full flex justify-between sm:justify-center whitespace-nowrap xl:justify-between text-left sm:text-center active:scale-[0.97]'
        }
        variant='text'
        onClick={onClick}
      >
        {children}
        {badge ? <Badge>{badge}</Badge> : null}
      </Button>
    </div>
  )
}

export { ButtonTab }

import { cn } from '@shared/lib/merge-classes'
import { type FC, type ReactNode } from 'react'
import { Badge } from './badge'
import { Button } from './button'

interface IButtonTabProps {
  className?: string
  children: ReactNode
  badge?: number
  isActive: boolean
  onClick: () => void
}

const ButtonTab: FC<IButtonTabProps> = ({
  children,
  badge,
  isActive,
  onClick,
  className
}) => {
  return (
    <div
      className={isActive ? 'bg-smokyWhite dark:bg-brownBlack rounded-md' : 'rounded-md'}
    >
      <Button
        className={cn(
          'w-full flex justify-between sm:justify-center xxl:justify-between whitespace-nowrap active:scale-[0.97]',
          className
        )}
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

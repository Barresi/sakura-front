import { type FC, type ReactNode } from 'react'
import { useTheme } from '@src/context/theme-context/useTheme'
import { cn } from '@utils/utils'

interface ICardProps {
  children: ReactNode
  className?: string
}

const Card: FC<ICardProps> = ({ children, className }) => {
  const { theme } = useTheme()

  const hover = {
    light: 'hover:border',
    dark: '',
    system: ''
  }

  return (
    <div
      className={cn(
        'w-full bg-message  rounded-tl-[10px] border border-background border-b-message-border px-[15px] lg:px-[30px] py-[20px]',
        hover[theme],
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card

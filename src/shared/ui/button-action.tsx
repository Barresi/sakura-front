import { useTheme } from '@app/providers/theme-context/lib/useTheme'
import { useState, type FC } from 'react'
import { cn } from '../lib/merge-classes'
import { Button, type IButtonProps } from './button'

interface IButtonActionProps extends IButtonProps {}

const ButtonAction: FC<IButtonActionProps> = ({
  children,
  icon,
  className,
  onClick,
  ...props
}) => {
  const [active, setActive] = useState(true)

  const { theme } = useTheme()

  const toggleActive = (): void => {
    setActive((active) => !active)
  }

  const whichLike = active ? (theme === 'dark' ? 'likeActiveDark' : 'likeActive') : 'like'

  return (
    <Button
      variant='text'
      className={cn(
        'px-[15px] py-[10px] rounded-[20px] items-center gap-[10px] border border-white dark:border-grayBlue  hover:bg-white dark:hover:bg-grayBlue lg:hover:bg-text',
        theme === 'light' ? 'lg:border-text' : '',
        className
      )}
      onClick={onClick || toggleActive}
      icon={icon === 'like' ? whichLike : icon}
      {...props}
    >
      <span className='text-lg font-bold text-darkElectricBlue leading-[23px]'>
        {children}
      </span>
    </Button>
  )
}

export { ButtonAction }

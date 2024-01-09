import { type FC, useState } from 'react'
import { cn } from '@src/shared/lib/merge-classes'
import Button, { type IButtonProps } from '../button/button'
import { useTheme } from '@src/app/providers/theme-context/useTheme'

interface IActionButtonProps extends IButtonProps {}

const ActionButton: FC<IActionButtonProps> = ({
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

export default ActionButton

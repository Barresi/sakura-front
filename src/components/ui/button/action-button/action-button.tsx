import { type FC, useState } from 'react'
import { cn } from '@utils/utils'
import Button, { type IButtonProps } from '../button'
import { useTheme } from '@src/hooks/useTheme'

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
        'px-[15px] py-[10px] rounded-[20px] items-center gap-[10px] border border-background  hover:bg-background lg:hover:bg-text',
        theme === 'light' ? 'lg:border-text' : '',
        className
      )}
      onClick={onClick || toggleActive}
      icon={icon === 'like' ? whichLike : icon}
      {...props}
    >
      <span className='text-lg font-bold text-[#55677D] leading-[23px]'>{children}</span>
    </Button>
  )
}

export default ActionButton

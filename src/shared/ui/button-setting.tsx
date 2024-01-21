import { useTheme } from '@app/providers/theme-context/lib/useTheme'
import { type FC } from 'react'
import { cn } from '../lib/merge-classes'
import { Badge } from './badge'
import { Button, type IButtonProps } from './button'

interface IButtonSettingProps extends IButtonProps {
  badge?: number
}

const ButtonSetting: FC<IButtonSettingProps> = ({
  className,
  icon,
  badge = 0,
  ...props
}) => {
  const { theme } = useTheme()

  return (
    <Button
      className={cn(
        'w-[45px] p-[10px] rounded-[10px] relative text-signalBlack dark:text-cadet bg-white dark:bg-grayBlue border-smokyWhite dark:border-cadet hover:text-signalBlack dark:hover:text-smokyWhite hover:bg-smokyWhite dark:hover:bg-brownBlack hover:border-smokyWHite dark:hover:border-cadet',
        className
      )}
      variant='secondary'
      icon={icon === 'theme' ? (theme === 'light' ? 'darkTheme' : 'theme') : icon}
      {...props}
    >
      {/* если ширина кнопки не равна 45px, тогда badge будет не в нужном месте, нужно как нибудь исправить */}
      {badge > 0 && (
        <Badge className='w-[19px] h-[19px] absolute top-[3px] right-[5px]'>
          {badge}
        </Badge>
      )}
    </Button>
  )
}

export { ButtonSetting }

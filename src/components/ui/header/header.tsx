import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'
import { cn } from '@utils/utils'
import SettingButton from '../button/setting-button/setting-button'
import Logo from '../logo/logo'
import { useTheme } from '@src/context/theme-context/useTheme'
import UserAvatar from '../avatar/avatar'
import { useWindowSize } from '@src/hooks/useWindowSize'

interface IHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string
  avatar?: string
}

const Header: FC<IHeaderProps> = ({ className, avatar, ...props }) => {
  const { toggleTheme } = useTheme()
  const isMobile = useWindowSize(1024)

  return (
    <header
      className={cn(
        'max-w-[100%] h-[54px] md:h-[84px] flex items-center justify-between py-[10px] px-[20px] lg:py-[20px] lg:px-[30px] bg-background lg:rounded-[10px] z-[100]',
        className
      )}
      {...props}
    >
      {/* пустой div нужен для того, чтобы иконки не уехали в левый край, а остались в правом */}
      {isMobile ? <Logo isAdaptive /> : <div></div>}

      <div className='flex items-center justify-center gap-[15px]'>
        <SettingButton icon='theme' onClick={toggleTheme} className='flex lg:hidden' />
        <SettingButton icon='notification' />

        <UserAvatar src={avatar} className='w-[44px] h-[44px] mt-2' />
      </div>
    </header>
  )
}

export default Header

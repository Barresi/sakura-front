import { useTheme } from '@src/app/providers/theme-context/lib/useTheme'
import { useWindowSize } from '@src/shared/lib/hooks/useWindowSize'
import { cn } from '@src/shared/lib/merge-classes'
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'
import SettingButton from '../../../shared/ui/button-setting'
import Logo from '../../../shared/ui/logo'
import UserAvatar from '../../../shared/ui/user-avatar'
import SheetBlock from '../../sheet/ui/sheet-block'

interface IHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  avatar?: string
}

const Header: FC<IHeaderProps> = ({ className, avatar, ...props }) => {
  const { toggleTheme } = useTheme()
  const isMobile = useWindowSize(1024)

  return (
    <header
      className={cn(
        'max-w-[100%] h-[54px] md:h-[84px] flex items-center justify-between py-[10px] px-[20px] lg:py-[20px] lg:px-[30px] bg-white dark:bg-grayBlue lg:rounded-[10px] z-[100]',
        className
      )}
      {...props}
    >
      {/* пустой div нужен для того, чтобы иконки не уехали в левый край, а остались в правом */}
      {isMobile ? <Logo isAdaptive /> : <div></div>}

      <div className='flex items-center justify-center gap-[15px]'>
        <SettingButton icon='theme' onClick={toggleTheme} className='flex lg:hidden' />
        <SheetBlock />
        <UserAvatar src={avatar} className='w-[44px] h-[44px] mt-2' />
      </div>
    </header>
  )
}

export default Header

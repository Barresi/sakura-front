import { ButtonChangeTheme } from '@features/button-change-theme'
import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { cn } from '@shared/lib/merge-classes'
import { Logo } from '@shared/ui/logo'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'
import { SheetBlock } from './sheet-block/sheet-block'

interface IHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  avatar?: string
}

const Header: FC<IHeaderProps> = ({ className, avatar, ...props }) => {
  const isMobile = useWindowSize(1024)

  return (
    <header
      className={cn(
        'max-w-[100%] h-[54px] md:h-[84px] flex items-center justify-between py-[10px] px-[20px] lg:py-[20px] lg:px-[30px] bg-white dark:bg-grayBlue lg:rounded-[10px]',
        className
      )}
      {...props}
    >
      {/* пустой div нужен для того, чтобы иконки не уехали в левый край, а остались в правом */}
      {isMobile ? <Logo isAdaptive /> : <div></div>}

      <div className='flex items-center justify-center gap-[15px]'>
        <ButtonChangeTheme className='flex lg:hidden' />
        <SheetBlock />
        <UserAvatar src={avatar} className='w-[44px] h-[44px] mt-2' />
      </div>
    </header>
  )
}

export { Header }

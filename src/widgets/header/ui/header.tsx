import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { ButtonChangeTheme } from '@features/button-change-theme'
import { ButtonOpenNotifications } from '@features/button-open-notifications'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { cn } from '@shared/lib/merge-classes'
import { Logo } from '@shared/ui/logo'
import { UserAvatar } from '@shared/ui/user-avatar'
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'

interface IHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Header: FC<IHeaderProps> = ({ className, ...props }) => {
  const isMobile = useWindowSize(1024)
  const user = useAppSelector(selectUser)
  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 max-w-[100%] h-[54px] md:h-[84px] flex items-center justify-between py-[10px] px-[20px] lg:py-[20px] lg:px-[30px] bg-white dark:bg-grayBlue lg:rounded-[10px] lg:relative z-40',
        className
      )}
      {...props}
    >
      {/* пустой div нужен для того, чтобы иконки не уехали в левый край, а остались в правом */}
      {isMobile ? <Logo isAdaptive /> : <div></div>}

      <div className='flex items-center justify-center gap-[15px]'>
        <ButtonChangeTheme className='flex lg:hidden' />
        <ButtonOpenNotifications />
        <UserAvatar src={user?.avatar || null} className='w-[44px] h-[44px]' />
      </div>
    </header>
  )
}

export { Header }

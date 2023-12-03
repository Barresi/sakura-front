import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'
import { cn, parseDateToMonth, parseDateToTime } from '@utils/utils'
import SettingButton from '../button/setting-button/setting-button'
import Logo from '../logo/logo'
import { useTheme } from '@src/context/theme-context/useTheme'
import UserAvatar from '../avatar/avatar'
import { useWindowSize } from '@src/hooks/useWindowSize'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@src/components/ui/sheet/sheet'
import { selectNotifications } from '@src/store/reducers/notifications/selectors'
import { useAppSelector } from '@src/hooks/store-hooks'
import NotificationCard from '../card/notification-card/notification-card'

interface IHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  avatar?: string
}

const Header: FC<IHeaderProps> = ({ className, avatar, ...props }) => {
  const { toggleTheme } = useTheme()
  const isMobile = useWindowSize(1024)
  const notifications = useAppSelector(selectNotifications)

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

        <Sheet>
          <SheetTrigger asChild>
            <SettingButton icon='notification' />
          </SheetTrigger>
          <SheetContent
            side='top'
            className='w-[97%] lg:max-w-[600px] max-h-[80vh] top-[60px] md:top-[100px] lg:top-[120px] right-[1%] shadow-xl dark:bg-grayBlue'
          >
            <SheetHeader>
              <SheetTitle>Уведомления</SheetTitle>
              {notifications.map(({ id, content, type, createdAt }) => {
                return (
                  <NotificationCard
                    key={id}
                    name={content.split(' ')[0]}
                    type={type}
                    date={`${parseDateToMonth(createdAt)} ${parseDateToTime(createdAt)}`}
                  />
                )
              })}
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <UserAvatar src={avatar} className='w-[44px] h-[44px] mt-2' />
      </div>
    </header>
  )
}

export default Header

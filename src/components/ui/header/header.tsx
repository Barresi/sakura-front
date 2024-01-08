import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@src/components/ui/sheet/sheet'
import { useTheme } from '@src/context/theme-context/useTheme'
import { useAppSelector } from '@src/hooks/store-hooks'
import { useWindowSize } from '@src/hooks/useWindowSize'
import { selectNotifications } from '@src/store/reducers/notifications/selectors'
import { cn, parseDateToMonth, parseDateToTime } from '@utils/utils'
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'
import UserAvatar from '../avatar/avatar'
import SettingButton from '../button/setting-button/setting-button'
import NotificationCard from '../card/notification-card/notification-card'
import Logo from '../logo/logo'

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
                    id={content.split(' ')[0]}
                    type={type}
                    date={`${parseDateToMonth(createdAt)} ${parseDateToTime(createdAt)}`}
                  />
                )
              })}

              {notifications.length <= 0 ? (
                <span className='bg-white dark:bg-grayBlue rounded-tl-[10px] border border-white dark:border-grayBlue border-b-smokyWhite dark:border-b-cadet py-[20px] text-center text-cadet'>
                  Уведомлений пока что нет
                </span>
              ) : null}
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <UserAvatar src={avatar} className='w-[44px] h-[44px] mt-2' />
      </div>
    </header>
  )
}

export default Header

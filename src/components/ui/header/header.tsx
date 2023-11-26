import { useEffect, type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'
import { cn, parseDateToMonth } from '@utils/utils'
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
import { useAppDispatch, useAppSelector } from '@src/hooks/store-hooks'
import { getUserNotificationsThunk } from '@src/store/reducers/notifications/async-thunks'

interface IHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  avatar?: string
}

const Header: FC<IHeaderProps> = ({ className, avatar, ...props }) => {
  const { toggleTheme } = useTheme()
  const dispatch = useAppDispatch()
  const isMobile = useWindowSize(1024)
  const notifications = useAppSelector(selectNotifications)

  useEffect(() => {
    dispatch(getUserNotificationsThunk())
  }, [])

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
          <SheetContent className='w-full md:max-w-[60%] lg:max-w-[40%] xxl:max-w-[600px]'>
            <SheetHeader>
              <SheetTitle>Уведомления</SheetTitle>
              {notifications.map((item) => {
                console.log(item)
                return (
                  <div key={item.id}>
                    {item.content}
                    <br />
                    {parseDateToMonth(item.createdAt)}
                  </div>
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

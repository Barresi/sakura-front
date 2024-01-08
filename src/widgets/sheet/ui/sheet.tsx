import NotificationCard from '@src/widgets/sheet/ui/notification-card/notification-card'
import { useAppSelector } from '@src/shared/lib/hooks/store-hooks'
import { parseDateToMonth, parseDateToTime } from '@src/shared/lib/parse-date/parse-date'
import SettingButton from '@src/shared/ui/button-setting/setting-button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@src/shared/ui/sheet/sheet'
import { selectNotifications } from '@src/app/store/reducers/notifications/selectors'
import { type FC } from 'react'

const SheetBlock: FC = () => {
  const notifications = useAppSelector(selectNotifications)
  return (
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
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
export default SheetBlock

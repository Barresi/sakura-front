import { CardNotification } from '@entities/card-notification'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { parseDateToMonth, parseDateToTime } from '@shared/lib/parse-date'
import { ButtonSetting } from '@shared/ui/button-setting'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@shared/ui/sheet'
import { selectNotifications } from '@store/reducers/notifications/selectors'
import { type FC } from 'react'

const SheetBlock: FC = () => {
  const notifications = useAppSelector(selectNotifications)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ButtonSetting icon='notification' />
      </SheetTrigger>
      <SheetContent
        side='top'
        className='w-[97%] lg:max-w-[600px] max-h-[80vh] top-[60px] md:top-[100px] lg:top-[120px] right-[1%] shadow-xl dark:bg-grayBlue'
      >
        <SheetHeader>
          <SheetTitle>Уведомления</SheetTitle>
          {notifications.map(({ id, content, type, createdAt }) => {
            return (
              <CardNotification
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
export { SheetBlock }

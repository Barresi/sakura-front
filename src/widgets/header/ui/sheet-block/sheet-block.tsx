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

import emptyNotifications from '@assets/notifications/Notification empty.svg'

const SheetBlock: FC = () => {
  const notifications = useAppSelector(selectNotifications)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ButtonSetting icon='notification' />
      </SheetTrigger>
      <SheetContent
        side='right'
        className='right-5 fixed lg:max-w-[600px] top-[70px] bottom-[90px] md:top-[100px] lg:top-[120px] lg:bottom-[20px] shadow-xl dark:bg-grayBlue'
      >
        <SheetHeader>
          <SheetTitle>Уведомления</SheetTitle>
        </SheetHeader>
        <div className='flex flex-col justify-center items-center h-[80%] '>
          {notifications.length ? (
            notifications.map(({ id, content, type, createdAt }) => {
              return (
                <CardNotification
                  key={id}
                  id={content.split(' ')[0]}
                  type={type}
                  date={`${parseDateToMonth(createdAt)} ${parseDateToTime(createdAt)}`}
                />
              )
            })
          ) : (
            <div className='flex flex-col flex-auto w-[100%] h-[100%] justify-center items-center'>
              <img src={emptyNotifications} alt='empty notifications' />
              <p className='text-lg text-center'>Уведомления отсутствуют</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
export { SheetBlock }

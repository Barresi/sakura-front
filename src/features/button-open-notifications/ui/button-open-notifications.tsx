import { CardNotification } from '@entities/card-notification'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { parseDateToMonth, parseDateToTime } from '@shared/lib/parse-date'
import { ButtonSetting } from '@shared/ui/button-setting'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@shared/ui/sheet'
import { readUserNotificationsThunk } from '@store/reducers/notifications/async-thunks'
import { selectNotifications } from '@store/reducers/notifications/selectors'
import { type FC } from 'react'

import emptyNotifications from '@assets/notifications/notification empty.svg'

const ButtonOpenNotifications: FC = () => {
  const notifications = useAppSelector(selectNotifications)
  const dispatch = useAppDispatch()
  const readNotifications = (): void => {
    dispatch(readUserNotificationsThunk(notifications.map((item) => item.id)))
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ButtonSetting
          icon='notification'
          badge={notifications.filter((item) => !item.read).length}
          onClick={readNotifications}
        />
      </SheetTrigger>
      <SheetContent
        side='right'
        className='lg:w-[600px] maxlg:max-w-none right-5 maxlg:left-5 fixed top-[70px] bottom-[90px] md:top-[100px] lg:top-[120px] lg:bottom-[20px] shadow-xl dark:bg-grayBlue'
      >
        <SheetHeader>
          <SheetTitle>Уведомления</SheetTitle>
        </SheetHeader>
        <div className='flex flex-col items-center h-[100%] overflow-y-scroll'>
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
              <p className='text-lg text-center mt-2'>Уведомления отсутствуют</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
export { ButtonOpenNotifications }

import { CardMessage } from '@entities/card-message'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { selectMessengerUserChats } from '@store/reducers/messenger/selectors'
import { type FC } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import chooseChat from '@assets/messenger/choose chat.svg'
import notActiveChats from '@assets/messenger/not active chats.svg'
import { useCurrentRoute } from '@shared/lib/hooks/useCurrentRoute'
import { AppRoutes } from '@shared/lib/types/routes'

const PageMessenger: FC = () => {
  const isChat = useCurrentRoute(AppRoutes.CHAT)
  const chats = useAppSelector(selectMessengerUserChats)

  const { pathname } = useLocation()
  const isMobile = useWindowSize(1440)

  if (!chats.length && !isChat)
    return (
      <div className='flex justify-center items-center flex-auto h-[calc(100vh-165px)] md:h-[calc(100vh-200px)] lg:h-[calc(100vh-154px)] px-5 flex-col bg-white dark:bg-grayBlue rounded-[10px] mx-5 lg:mx-0'>
        <img src={notActiveChats} alt='not active chat' />
        <p className='text-lg text-center'>У вас нет активных чатов</p>
      </div>
    )

  return (
    <div
      className={`${
        isChat
          ? 'h-[calc(100vh-94px)] md:h-[calc(110vh-200px)] lg:h-[calc(100vh-154px)]'
          : 'h-[calc(100vh-165px)] md:h-[calc(100vh-200px)] lg:h-[calc(100vh-154px)]'
      } flex justify-center items-center flex-auto  border-border mx-5 lg:m-0`}
    >
      {!isMobile || pathname === '/main/messenger' ? (
        <ul className='flex-auto w-[30%] overflow-auto overflow-x-hidden h-[100%] rounded-[10px] scrollbar-none bg-darkWhite dark:bg-brownBlack xxl:rounded-l-[10px] xxl:rounded-r-[0px] flex flex-col gap-[2px]'>
          {chats.map((item, ind) => {
            return (
              <NavLink
                key={ind}
                to={item.chatId}
                className={({ isActive }) =>
                  `${isActive && '[&>div]:dark:border-r-red [&>div]:border-r-red'} `
                }
              >
                <CardMessage className='rounded-none' {...item} />
              </NavLink>
            )
          })}
        </ul>
      ) : null}

      {pathname !== '/main/messenger' ? (
        <Outlet />
      ) : (
        !isMobile && (
          <div className='flex flex-col flex-auto w-[65%] relative h-[100%] bg-white dark:bg-grayBlue justify-center items-center rounded-r-[10px]'>
            <img src={chooseChat} alt='choose chat' />
            <p className='text-lg text-center'>Выберите Чат</p>
          </div>
        )
      )}
    </div>
  )
}

export { PageMessenger }

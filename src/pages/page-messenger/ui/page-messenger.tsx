import { CardMessage } from '@entities/card-message'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { useWindowSize } from '@shared/lib/hooks/useWindowSize'
import { selectMessengerUserChats } from '@store/reducers/messenger/selectors'
import { type FC } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import chooseChat from '@assets/messenger/choose chat.svg'
import notActiveChats from '@assets/messenger/not active chats.svg'

const PageMessenger: FC = () => {
  const chats = useAppSelector(selectMessengerUserChats)

  const { pathname } = useLocation()
  const isMobile = useWindowSize(1440)

  if (!chats.length && pathname.length <= 16)
    return (
      <div className='flex justify-center items-center flex-auto h-[calc(100vh-144px)] px-5 flex-col bg-white dark:bg-grayBlue rounded-[10px] mx-5 lg:mx-0'>
        <img src={notActiveChats} alt='not active chat' />
        <p className='text-lg text-center'>У вас нет активных чатов</p>
      </div>
    )

  return (
    <div
      className={`${
        pathname.includes('/main/messenger/') && pathname.length > 16
          ? 'h-[calc(100vh-94px)] md:h-[calc(110vh-220px)] lg:h-[calc(100vh-144px)]'
          : 'h-[calc(100vh-150px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-144px)]'
      } flex justify-center items-center flex-auto  border-border mx-5 lg:m-0`}
    >
      {!isMobile || pathname === '/main/messenger' ? (
        <ul className='flex-auto w-[30%] overflow-auto overflow-x-hidden h-[100%] rounded-[10px] scrollbar-none bg-white dark:bg-grayBlue border-r-smokyWhite dark:border-r-cadet xxl:border-r xxl:rounded-l-[10px] xxl:rounded-r-[0px]'>
          {chats.map((item, ind) => {
            return (
              <NavLink
                key={ind}
                to={item.chatId}
                className={({ isActive }) =>
                  isActive ? '[&>div]:bg-ghostlyWhite [&>div]:dark:bg-brownBlack' : ''
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

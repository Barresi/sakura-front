import MessageCard from "@src/components/ui/card/message-card/message-card";
import { useWindowSize } from "@src/utils/utils";
import { FC } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import notActiveChats from "@assets/messenger/not active chats.svg";
import chooseChat from "@assets/messenger/choose chat.svg";

const mockData = [
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",

    date: "18 авг",
    id: "dsa2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2f",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",

    date: "18 авг",
    id: "as32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas3sdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",

    date: "18 авг",
    id: "dsadfdsas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas3dsd2r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",

    date: "18 авг",
    id: "dsfddadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asfdsddf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",

    date: "18 авг",
    id: "dssdfadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asfddf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",

    date: "18 авг",
    id: "dsadddas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas3ff2r2asdf",
  },
];

const MessengerPage: FC = () => {
  const { pathname } = useLocation();
  const isMobile = useWindowSize(1440);

  if (!mockData.length)
    return (
      <div className="flex justify-center items-center flex-auto h-[calc(100vh-144px)] px-5 flex-col bg-background rounded-[10px] mx-5 lg:mx-0">
        <img src={notActiveChats} alt="not active chat" />
        <p className="text-lg">У вас нет активных чатов</p>
      </div>
    );

  return (
    <div
      className={`${
        pathname.includes("/main/messenger/") && pathname.length > 16
          ? "h-[calc(100vh-80px)] md:h-[calc(110vh-200px)] lg:h-[calc(100vh-144px)]"
          : "h-[calc(100vh-150px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-144px)]"
      } flex justify-center items-center flex-auto  border-border mx-5 lg:m-0`}
    >
      {!isMobile || pathname === "/main/messenger" ? (
        <ul className="flex-auto w-[30%] overflow-auto overflow-x-hidden h-[100%] rounded-[10px] scrollbar-none bg-background border-r-message-border 3xl:border-r 3xl:rounded-l-[10px] 3xl:rounded-r-[0px]">
          {mockData.map((item, ind) => (
            <NavLink
              to={item.id}
              key={ind}
              className={({ isActive }) => (isActive ? "[&>div]:bg-message-hover" : "")}
            >
              <MessageCard
                className="rounded-none"
                data={{
                  name: item.name,
                  message: item.message,
                  badge: item.badge,
                  img: "",
                  date: item.date,
                }}
              />
            </NavLink>
          ))}
        </ul>
      ) : null}

      {pathname !== "/main/messenger" ? (
        <Outlet />
      ) : (
        !isMobile && (
          <div className="flex flex-col flex-auto w-[65%] relative h-[100%] bg-background justify-center items-center rounded-r-[10px]">
            <img src={chooseChat} alt="choose chat" />
            <p className="text-lg">Выберите Чат</p>
          </div>
        )
      )}
    </div>
  );
};

export default MessengerPage;

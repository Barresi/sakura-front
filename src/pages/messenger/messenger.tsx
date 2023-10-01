import MessageCard from "@src/components/ui/card/message-card/message-card";
import { useWindowSize } from "@src/utils/utils";
import { FC } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const mockData = [
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",

    date: "18 авг",
    id: "dsadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",

    date: "18 авг",
    id: "dsadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asdf",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
    id: "dsadas32r2asdf",
  },
];

const MessengerPage: FC = () => {
  const { pathname } = useLocation();
  const mobile = useWindowSize(1440);

  return (
    <div
      className={`${
        pathname.includes("/main/messenger/") && pathname.length > 16
          ? "h-[calc(100vh-80px)] md:h-[calc(110vh-200px)] lg:h-[calc(100vh-144px)]"
          : "h-[calc(100vh-150px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-144px)]"
      } flex justify-center items-center flex-auto  border-border mx-5 lg:m-0`}
    >
      {!mobile || pathname === "/main/messenger" ? (
        <ul className=" flex-auto w-[30%] overflow-auto overflow-x-hidden h-[100%] scrollbar-none rounded-[10px] bg-background border-r-message-border 3xl:border-r 3xl:rounded-l-[10px] 3xl:rounded-r-[0px]">
          {mockData.map((item, ind) => (
            <Link to={item.id} key={ind}>
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
            </Link>
          ))}
        </ul>
      ) : null}

      {pathname !== "/main/messenger" ? (
        <Outlet />
      ) : (
        !mobile && (
          <div className="flex flex-col flex-auto w-[65%] relative h-[100%] bg-background justify-center items-center rounded-r-[10px]">
            Выберите Чат
          </div>
        )
      )}
    </div>
  );
};

export default MessengerPage;

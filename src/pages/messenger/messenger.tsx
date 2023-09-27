import MessageCard from "@src/components/ui/card/message-card/message-card";
import { useWindowSize } from "@src/utils/utils";
import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

const mockData = [
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
  {
    name: "Андрей Филяев",
    message: "Ты сегодня был на работе?",
    badge: 2,
    date: "18 авг",
  },
];

const MessengerPage: FC = () => {
  const { pathname } = useLocation();
  const mobile = useWindowSize(1024);
  return (
    <div className="flex justify-center items-center flex-auto h-[calc(100vh-144px)] gap-1 rounded-[10px] border-border">
      {!mobile || pathname === "/main/messenger/" ? (
        <ul className=" flex-auto w-[30%] overflow-auto overflow-x-hidden h-[100%] scrollbar-none">
          {mockData.map((item) => (
            <MessageCard
              className="rounded-none"
              data={{
                name: item.name,
                message: item.message,
                badge: item.badge,
                img: "",
                imgFallback: "avatar",
                date: item.date,
              }}
            />
          ))}
        </ul>
      ) : null}

      {pathname !== "/main/messenger/" ? <Outlet /> : !mobile && <h2>Выберите чат</h2>}
    </div>
  );
};

export default MessengerPage;

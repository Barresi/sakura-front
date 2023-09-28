import MessageCard from "@src/components/ui/card/message-card/message-card";
import { useWindowSize } from "@src/utils/utils";
import { FC } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const mockData = [
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
    <div className="flex justify-center items-center flex-auto h-[calc(100vh-175px)] md:h-[calc(100vh-205px)] lg:h-[calc(100vh-145px)] border-border mx-5 lg:m-0">
      {!mobile || pathname === "/main/messenger" ? (
        <ul className=" flex-auto w-[30%] overflow-auto overflow-x-hidden h-[100%] scrollbar-none rounded-[10px] bg-background border-r-message-border 3xl:border-r 3xl:rounded-l-[10px] 3xl:rounded-r-[0px]">
          {mockData.map((item) => (
            <Link to={item.id}>
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

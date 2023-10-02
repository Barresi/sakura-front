import { FC, useEffect, useState } from "react";

import { useAppSelector } from "@src/hooks/store-hooks";
import { selectUser } from "@store/reducers/profileInfo/selectors";

import TabButton from "@components/tab/tab-button/tab-button";
import FriendsTabContent from "@components/tab/tab-content/tab-content";

const FriendsPage: FC = () => {
  const [activeType, setActive] = useState("friends");
  const [data, setData] = useState<any[]>([]);

  const user = useAppSelector(selectUser);
  const outgoingReqLength = user?.outgoingRequests?.length;

  useEffect(() => {
    switch (activeType) {
      // mock data, will replaced in future

      case "friends":
        // setData(user.friends);
        setData([
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Dieter Phillips",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Sebastian Sellers",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Tamekah Oliver",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Jesse Hancock",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Keegan Colon",
          },
        ]);
        break;
      case "all":
        setData([
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Dieter Phillips",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Sebastian Sellers",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Tamekah Oliver",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Jesse Hancock",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Keegan Colon",
          },
        ]);
        break;
      case "requests":
        // setData(заявки в друзья)
        // setData(user.friendOf);
        setData([
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Dieter Phillips",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Sebastian Sellers",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Tamekah Oliver",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Jesse Hancock",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Keegan Colon",
          },
        ]);
        break;
      case "sended":
        // setData(отправленные заявки)
        // setData(user.outgoingRequests);
        setData([
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Dieter Phillips",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Sebastian Sellers",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Tamekah Oliver",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Jesse Hancock",
          },
          {
            img: "",
            imgFallback: "404 IMG",
            name: "Keegan Colon",
          },
        ]);
        break;

      default:
        setData([]);
        break;
    }
  }, [user, activeType]);

  return (
    <div className="w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] mt-[20px] xl:mt-[30px] mb-[120px] lg:mb-[20px] px-[20px] lg:px-0">
      <div className="w-full xl:w-1/3 h-auto max-h-[220px] flex flex-col bg-background rounded-[10px] p-[20px] xl:p-[30px]">
        <TabButton active={activeType == "friends"} onClick={() => setActive("friends")}>
          Мои друзья
        </TabButton>
        <TabButton active={activeType == "all"} onClick={() => setActive("all")}>
          Все пользователи
        </TabButton>
        <TabButton
          active={activeType == "requests"}
          onClick={() => setActive("requests")}
          badge={outgoingReqLength > 0 ? outgoingReqLength : undefined}
        >
          Заявки в друзья
        </TabButton>
        <TabButton
          active={activeType == "sended"}
          onClick={() => setActive("sended")}
          badge={outgoingReqLength > 0 ? outgoingReqLength : undefined}
        >
          Отправленные заявки
        </TabButton>
      </div>

      <div className="list w-full xl:w-2/3 bg-background rounded-[10px] p-[20px] xl:p-[30px]">
        <FriendsTabContent type={activeType} data={data} text="" />
      </div>
    </div>
  );
};

export default FriendsPage;

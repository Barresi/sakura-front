import FriendCard from "@src/components/ui/card/friend-card/friend-card";
import Search from "@src/components/ui/form/search/search";
import { FC, ReactNode, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs/tabs";
import TabButton from "@components/tab-button/tab-button";

import RequestCard from "@src/components/ui/card/request-card/request-card";
import { useAppDispatch, useAppSelector } from "@src/hooks/store-hooks";
import { selectUser } from "@src/store/reducers/profileInfo/selectors";
import { IFriend } from "@src/types/types";

import photo from "@assets/photo.svg";
import avatar from "@assets/404 avatar.jpg";
import { protectedInfoThunk } from "@src/store/reducers/profileInfo/async-thunks";

const buttons = [
  {
    text: "Мои друзья",
    type: "friends",
  },
  {
    text: "Все пользователи",
    type: "all",
  },
  {
    text: "Заявки в друзья",
    type: "requests",
    badge: 5,
  },
  {
    text: "Отправленные заявки",
    type: "sended",
  },
];

const render = (type: string, data: IFriend[]) => {
  return data?.map((friend, index) => {
    if (type === "friends") {
      return <FriendCard key={index} type={type} data={friend} />;
    }

    if (type === "all") {
      return <FriendCard key={index} type={type} data={friend} />;
    }

    if (type === "requests") {
      return <RequestCard key={index} data={friend} />;
    }

    if (type === "sended") {
      return <FriendCard key={index} type={type} data={friend} />;
    }
  });
};

const FriendsPage: FC = () => {
  const [activeType, setActive] = useState(buttons[0].type);
  const [data, setData] = useState<any[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(protectedInfoThunk());
  }, [dispatch]);

  const user = useAppSelector(selectUser);

  useEffect(() => {
    switch (activeType) {
      case "friends":
        setData(user.friends);
        break;
      case "all":
        setData([
          {
            img: photo,
            imgFallback: "",
            name: "Dieter Phillips",
          },
          {
            img: photo,
            imgFallback: "",
            name: "Sebastian Sellers",
          },
          {
            img: photo,
            imgFallback: "",
            name: "Tamekah Oliver",
          },
          {
            img: photo,
            imgFallback: "",
            name: "Jesse Hancock",
          },
          {
            img: photo,
            imgFallback: "",
            name: "Keegan Colon",
          },
        ]);
        break;
      case "requests":
        // setData(заявки в друзья)
        setData(user.friendOf);
        break;
      case "sended":
        // setData(отправленные заявки)
        setData(user.outgoingRequests);
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
          badge={user.friendOf.length}
        >
          Заявки в друзья
        </TabButton>
        <TabButton
          active={activeType == "sended"}
          onClick={() => setActive("sended")}
          badge={user.outgoingRequests.length}
        >
          Отправленные заявки
        </TabButton>
      </div>

      <div className="list w-full xl:w-2/3 bg-background rounded-[10px] p-[20px] xl:p-[30px]">
        <Tab type={activeType} data={data} text="" />
      </div>
    </div>
  );
};

interface TabProps {
  type: string;
  data: any[];
  text: string;
}

const Tab: FC<TabProps> = ({ type, data }) => {
  const text = {
    friends: "Мои друзья",
    all: "Все пользователи",
    requests: "Заявки в друзья",
    sended: "Отправленные заявки",
  };

  return (
    <>
      <h2 className="font-medium text-[24px] leading-[32px]">
        {text[type as keyof typeof text]}
      </h2>

      <div className="mt-[20px]">
        <Search />
      </div>

      <div className="flex flex-col gap-[20px]">{render(type, data)}</div>
      {data?.length < 1 && (
        <span className="text-lg flex justify-center">Здесь пока ничего нет</span>
      )}
    </>
  );
};

export default FriendsPage;

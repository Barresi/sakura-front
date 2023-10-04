import { FC } from "react";
import FriendCard from "@src/components/ui/card/friend-card/friend-card";
import RequestCard from "@src/components/ui/card/request-card/request-card";
import Search from "@src/components/ui/form/search/search";
import { IFriend } from "@src/types/types";

const mockData = [
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
];

const text = {
  friends: "Мои друзья",
  all: "Все пользователи",
  requests: "Заявки в друзья",
  sended: "Отправленные заявки",
};

const render = (type: string | undefined, data: IFriend[]) => {
  return data?.map((friend, index) => {
    switch (type) {
      case "all":
        return <FriendCard key={index} type={type} data={friend} />;
      case "requests":
        return <RequestCard key={index} data={friend} />;
      case "sended":
        return <FriendCard key={index} type={type} data={friend} />;
      case "friends":
        return <FriendCard key={index} type={type} data={friend} />;
    }
  });
};

const FriendsTabContent: FC<{ type: "all" | "requests" | "sended" | "friends" }> = ({
  type,
}) => {
  return (
    <>
      <h2 className="font-medium text-[24px] leading-[32px]">
        {text[type as keyof typeof text]}
      </h2>

      <div className="mt-[20px]">
        <Search />
      </div>

      <div className="flex flex-col gap-[20px]">{render(type, mockData)}</div>
      {mockData?.length < 1 && (
        <span className="text-lg flex justify-center">Здесь пока ничего нет</span>
      )}
    </>
  );
};

export default FriendsTabContent;

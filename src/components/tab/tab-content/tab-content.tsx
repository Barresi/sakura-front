import { FC } from "react";
import FriendCard from "@src/components/ui/card/friend-card/friend-card";
import RequestCard from "@src/components/ui/card/request-card/request-card";
import Search from "@src/components/ui/form/search/search";
import { IFriend } from "@src/types/types";

interface TabProps {
  type: string;
  data: any[];
  text: string;
}

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

const FriendsTabContent: FC<TabProps> = ({ type, data }) => {
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

export default FriendsTabContent;

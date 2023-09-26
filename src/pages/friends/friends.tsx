import FriendCard from "@src/components/ui/card/friend-card/friend-card";
import Search from "@src/components/ui/form/search/search";
import { FC } from "react";

import photo from "@assets/photo.svg";
import NavButton from "@src/components/ui/button/nav-button/nav-button";
import { TabContainer } from "@src/components/tab-button/tab-button";

const friends = [
  {
    img: photo,
    imgFallback: "",
    name: "Андрей Петров",
  },
  {
    img: photo,
    imgFallback: "",
    name: "Андрей Петров",
  },
  {
    img: photo,
    imgFallback: "",
    name: "Андрей Петров",
  },
  {
    img: photo,
    imgFallback: "",
    name: "Андрей Петров",
  },
  {
    img: photo,
    imgFallback: "",
    name: "Андрей Петров",
  },
];

const FriendsPage: FC = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] mt-[20px] xl:mt-[30px] mb-[20px]">
      <div className="w-full xl:w-1/3 max-h-[22%] bg-background rounded-[10px] p-[30px]">
        <TabContainer
          className="flex flex-row xl:flex-col justify-between xl:justify-start"
          buttons={[
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
          ]}
        />
      </div>

      <div className="list w-full xl:w-2/3 bg-background rounded-[10px] p-[30px]">
        <h2 className="font-medium text-[24px] leading-[32px]">Мои друзья</h2>

        <div className="mt-[20px]">
          <Search />
        </div>

        <div className="flex flex-col gap-[20px]">
          {friends.map(({ img, imgFallback, name }) => (
            <FriendCard img={img} imgFallback={imgFallback} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;

import FriendCard from "@src/components/ui/card/friend-card/friend-card";
import Search from "@src/components/ui/form/search/search";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs/tabs";
import TabButton from "@components/tab-button/tab-button";

import photo from "@assets/photo.svg";

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

const FriendsPage: FC = () => {
  return (
    <Tabs
      defaultValue={buttons[0].type}
      className="w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] mt-[20px] xl:mt-[30px] mb-[20px]"
    >
      <TabsList className="w-full xl:w-1/3 h-auto max-h-[200px] flex flex-col bg-background rounded-[10px] p-[30px]">
        {buttons.map(({ text, type, badge }, index) => (
          <TabsTrigger value={type} key={index}>
            <TabButton badge={badge}>{text}</TabButton>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="list w-full xl:w-2/3 bg-background rounded-[10px] p-[30px]">
        {buttons.map(({ text, type }, index) => (
          <TabsContent value={type} key={index}>
            <h2 className="font-medium text-[24px] leading-[32px]">{text}</h2>

            <div className="mt-[20px]">
              <Search />
            </div>

            <div className="flex flex-col gap-[20px]">
              {friends.map(({ img, imgFallback, name }) => (
                <FriendCard img={img} imgFallback={imgFallback} name={name} />
              ))}
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default FriendsPage;

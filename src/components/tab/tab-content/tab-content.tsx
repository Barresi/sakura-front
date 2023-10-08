import { ChangeEventHandler, FC, useState } from "react";
import Search from "@src/components/ui/form/search/search";
import FriendsCard from "@src/components/ui/card/friends-card/friends-card";

import photo from "@assets/photo.svg";

const mockData = [
  {
    img: photo,
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

const FriendsTabContent: FC<{ type: "all" | "requests" | "sended" | "friends" }> = ({
  type,
}) => {
  const [search, setSearch] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearch(e.target.value);

  return (
    <>
      <h2 className="font-medium text-[24px] leading-[32px]">
        {text[type as keyof typeof text]}
      </h2>

      <div className="mt-[20px]">
        <Search onChange={handleChange} />
      </div>

      <div className="flex flex-col gap-[20px]">
        {mockData
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .map((friend, index) => (
            <FriendsCard key={index} type={type} data={friend} />
          ))}
      </div>
      {mockData?.length < 1 && (
        <span className="text-lg flex justify-center">Здесь пока ничего нет</span>
      )}
    </>
  );
};

export default FriendsTabContent;

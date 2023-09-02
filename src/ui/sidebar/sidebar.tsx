import { FC } from "react";
import Logo from "../logo/logo";
import Button from "../button/button";

import user from "@assets/menu/user.svg";
import news from "@assets/menu/news.svg";
import friends from "@assets/menu/friends.svg";
import message from "@assets/menu/message.svg";
import photos from "@assets/menu/photos.svg";

const Sidebar: FC = () => {
  return (
    <div className="rounded-[10px] px-5 py-8 flex flex-col justify-start items-start">
      <Logo />

      <Button className="w-full justify-start mt-[50px] gap-[10px]" variant="text">
        <img src={user} alt="" />
        Моя страница
      </Button>

      <Button className="w-full justify-start gap-[10px]" variant="text">
        <img src={news} alt="" />
        Новости
      </Button>

      <Button className="w-full justify-start gap-[10px]" variant="text">
        <img src={message} alt="" />
        Мессенджер
      </Button>

      <Button className="w-full justify-start gap-[10px]" variant="text">
        <img src={friends} alt="" />
        Друзья
      </Button>

      <Button className="w-full justify-start gap-[10px]" variant="text">
        <img src={photos} alt="" />
        Фотографии
      </Button>
    </div>
  );
};

export default Sidebar;

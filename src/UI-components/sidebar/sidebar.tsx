import { FC } from "react";
import Logo from "../logo/logo";
import Button from "../button/button";

import user from "@assets/menu/user.svg";
import news from "@assets/menu/news.svg";
import friends from "@assets/menu/friends.svg";
import message from "@assets/menu/message.svg";
import photos from "@assets/menu/photos.svg";
import NavButton from "../button/nav-button/nav-button";

const Sidebar: FC = () => {
  return (
    <div className="rounded-[10px] px-5 py-8 flex flex-col justify-start items-start">
      <Logo />

      <NavButton
        className="w-full justify-start mt-[50px] gap-[10px]"
        icon={user}
        variant="text"
      >
        Моя страница
      </NavButton>

      <NavButton className="w-full justify-start gap-[10px]" icon={news} variant="text">
        Новости
      </NavButton>

      <NavButton
        className="w-full justify-start gap-[10px]"
        icon={message}
        badge={6}
        variant="text"
      >
        Мессенджер
      </NavButton>

      <NavButton
        className="w-full justify-start gap-[10px]"
        icon={friends}
        variant="text"
      >
        Друзья
      </NavButton>

      <NavButton className="w-full justify-start gap-[10px]" icon={photos} variant="text">
        Фотографии
      </NavButton>
    </div>
  );
};

export default Sidebar;

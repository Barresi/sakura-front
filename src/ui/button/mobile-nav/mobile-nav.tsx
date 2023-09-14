import { FC } from "react";
import NavButton from "../nav-button/nav-button";

import user from "@assets/menu/user.svg";
import news from "@assets/menu/news.svg";
import friends from "@assets/menu/friends.svg";
import message from "@assets/menu/message.svg";
import photos from "@assets/menu/photos.svg";

const MobileNav: FC = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 flex items-center gap-[5px] lg:gap-[10px] bg-navButton text-navButton-foreground py-[10px] px-[10px] lg:px-[20px] rounded-tl-[10px] rounded-tr-[10px] z-[10000]">
      <NavButton
        className="w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]"
        icon={user}
        variant="text"
      >
        Главная
      </NavButton>

      <NavButton
        className="w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]"
        icon={news}
        variant="text"
      >
        Новости
      </NavButton>

      <NavButton
        className="w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]"
        icon={message}
        variant="text"
      >
        Мессенджер
      </NavButton>

      <NavButton
        className="w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]"
        icon={friends}
        variant="text"
      >
        Друзья
      </NavButton>

      <NavButton
        className="w-full flex-col justify-center items-center text-center px-[5px] first-letter:lg:px-[15px] py-[30px] gap-[5px] text-[12px] md:text-[14px]"
        icon={photos}
        variant="text"
      >
        Фотографии
      </NavButton>
    </div>
  );
};

export default MobileNav;

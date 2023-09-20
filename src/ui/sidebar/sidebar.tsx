import { FC } from "react";
import Logo from "../logo/logo";
import NavButton from "../button/nav-button/nav-button";

const Sidebar: FC = () => {
  return (
    <div className="rounded-[10px] px-5 py-8 flex flex-col justify-start items-start">
      <Logo />

      <NavButton
        className="w-full justify-start mt-[50px] gap-[10px]"
        iconPos="left"
        icon="user"
        variant="text"
      >
        Моя страница
      </NavButton>

      <NavButton
        className="w-full justify-start gap-[10px]"
        iconPos="left"
        icon="news"
        variant="text"
      >
        Новости
      </NavButton>

      <NavButton
        className="w-full justify-start gap-[10px]"
        iconPos="left"
        icon="message"
        badge={6}
        variant="text"
      >
        Мессенджер
      </NavButton>

      <NavButton
        className="w-full justify-start gap-[10px]"
        iconPos="left"
        icon="friends"
        variant="text"
      >
        Друзья
      </NavButton>

      <NavButton
        className="w-full justify-start gap-[10px]"
        iconPos="left"
        icon="photos"
        variant="text"
      >
        Фотографии
      </NavButton>
    </div>
  );
};

export default Sidebar;

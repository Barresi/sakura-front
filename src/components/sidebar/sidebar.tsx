import { FC } from "react";
import Logo from "../ui/logo/logo";
import NavButton from "../ui/button/nav-button/nav-button";
import SettingButton from "@src/components/ui/button/setting-button/setting-button";
import { useAppDispatch } from "@src/hooks/store-hooks";
import { useTheme } from "@src/hooks/useTheme";
import { useLogoutMutation } from "@src/api/auth";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  const [logout, params] = useLogoutMutation();

  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme("dark");
    }
  };
  return (
    <div className="rounded-[10px] px-5 py-[30px] flex flex-col justify-between items-start w-[280px] bg-background fixed top-5 bottom-5">
      <div>
        <Logo />

        <div className="pt-[50px]">
          <NavButton className="w-full justify-start gap-[10px]" icon="user" to="profile">
            Моя страница
          </NavButton>

          <NavButton className="w-full justify-start gap-[10px]" icon="news" to="feed">
            Новости
          </NavButton>

          <NavButton
            className="w-full justify-start gap-[10px]"
            icon="message"
            to="messenger"
          >
            Мессенджер
          </NavButton>

          <NavButton
            className="w-full justify-start gap-[10px]"
            icon="friends"
            to="friends"
          >
            Друзья
          </NavButton>

          <NavButton
            className="w-full justify-start gap-[10px]"
            icon="photos"
            to="photos"
          >
            Фотографии
          </NavButton>
        </div>
      </div>

      <div className="flex justify-between w-[100%]">
        <SettingButton icon="exit" onClick={() => logout()} />
        <SettingButton icon="info" />
        <SettingButton icon="theme" onClick={toggleTheme} />
        <SettingButton icon="setting" />
      </div>
    </div>
  );
};

export default Sidebar;

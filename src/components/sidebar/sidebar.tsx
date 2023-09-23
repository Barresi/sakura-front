import { FC } from "react";
import Logo from "../ui/logo/logo";
import NavButton from "../ui/button/nav-button/nav-button";
import SettingButton from "@src/components/ui/button/setting-button/setting-button";
import { useTheme } from "../theme-provider/theme-provider";
import { useAppDispatch } from "@src/hooks/store-hooks";
import { logoutThunk } from "@src/store/reducers/profileInfo/async-thunks";
import { cn } from "@src/utils/utils";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
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
          <NavButton
            className={({ isActive }) => (isActive ? "clicked" : "")}
            icon="user"
            to="profile"
          >
            Моя страница
          </NavButton>

          <NavButton
            className={({ isActive }) => (isActive ? "clicked" : "")}
            icon="news"
            to="feed"
          >
            Новости
          </NavButton>

          <NavButton
            className={({ isActive }) => (isActive ? "clicked" : "")}
            icon="message"
            badge={6}
            to="messenger"
          >
            Мессенджер
          </NavButton>

          <NavButton
            className={({ isActive }) => (isActive ? "clicked" : "")}
            icon="friends"
            to="friends"
          >
            Друзья
          </NavButton>

          <NavButton
            className={({ isActive }) => (isActive ? "clicked" : "")}
            icon="photos"
            to="photos"
          >
            Фотографии
          </NavButton>
        </div>
      </div>

      <div className="flex justify-between w-[100%]">
        <SettingButton icon="exit" onClick={() => dispatch(logoutThunk())} />
        <SettingButton icon="info" />
        <SettingButton icon="theme" onClick={toggleTheme} />
        <SettingButton icon="setting" />
      </div>
    </div>
  );
};

export default Sidebar;

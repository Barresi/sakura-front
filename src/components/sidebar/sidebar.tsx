import { FC } from "react";
import Logo from "../../ui/logo/logo";
import NavButton from "../../ui/button/nav-button/nav-button";
import { useNavigate } from "react-router-dom";
import SettingButton from "@src/ui/button/setting-button/setting-button";
import { useTheme } from "../theme-provider/theme-provider";
import { useAppDispatch } from "@src/hooks/store-hooks";
import { logoutThunk } from "@src/store/reducers/profileInfo/async-thunks";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

        <div>
          <NavButton
            className="w-full justify-start mt-[50px] gap-[10px]"
            iconPos="left"
            icon="user"
            variant="text"
            onClick={() => navigate("profile")}
          >
            Моя страница
          </NavButton>

          <NavButton
            className="w-full justify-start gap-[10px]"
            iconPos="left"
            icon="news"
            variant="text"
            onClick={() => navigate("feed")}
          >
            Новости
          </NavButton>

          <NavButton
            className="w-full justify-start gap-[10px]"
            iconPos="left"
            icon="message"
            badge={6}
            variant="text"
            onClick={() => navigate("messenger")}
          >
            Мессенджер
          </NavButton>

          <NavButton
            className="w-full justify-start gap-[10px]"
            iconPos="left"
            icon="friends"
            variant="text"
            onClick={() => navigate("friends")}
          >
            Друзья
          </NavButton>

          <NavButton
            className="w-full justify-start gap-[10px]"
            iconPos="left"
            icon="photos"
            variant="text"
            onClick={() => navigate("photos")}
          >
            Фотографии
          </NavButton>
        </div>
      </div>

      <div className="flex justify-between w-[100%]">
        <SettingButton icon="theme" onClick={() => dispatch(logoutThunk())} />
        <SettingButton icon="theme" />
        <SettingButton icon="theme" onClick={toggleTheme} />
        <SettingButton icon="setting" />
      </div>
    </div>
  );
};

export default Sidebar;

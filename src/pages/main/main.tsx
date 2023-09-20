import Sidebar from "@src/components/sidebar/sidebar";
import Header from "@src/ui/header/header";
import { FC } from "react";
import { Outlet } from "react-router";

const MainPage: FC = () => {
  return (
    <div className="pt-5 px-5 flex ">
      <Sidebar />
      <div className=" flex-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;

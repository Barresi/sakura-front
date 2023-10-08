import { FC } from "react";
import { Outlet } from "react-router-dom";
import TabButton from "@components/tab/tab-button/tab-button";

const FriendsPage: FC = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] mt-[20px] xl:mt-[30px] mb-[60px] lg:mb-[20px] px-[20px] lg:px-0">
      <div className="w-full xl:w-1/3 h-auto max-h-[220px] flex flex-col bg-background rounded-[10px] p-[20px] xl:p-[30px] sm:flex-row xl:flex-col sm:[&>a]:w-[25%] lg:[&>a]:w-[100%]">
        <TabButton to="">Мои друзья</TabButton>
        <TabButton to="all">Все пользователи</TabButton>
        <TabButton to="requests">Заявки в друзья</TabButton>
        <TabButton to="sended">Отправленные заявки</TabButton>
      </div>

      <div className="list w-full xl:w-2/3 bg-background rounded-[10px] p-[20px] xl:p-[30px]">
        <Outlet />
      </div>
    </div>
  );
};

export default FriendsPage;

import { FC, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@src/hooks/store-hooks";
import { selectUser } from "@store/reducers/profileInfo/selectors";

import { protectedInfoThunk } from "@store/reducers/profileInfo/async-thunks";
import TabButton from "@components/tab/tab-button/tab-button";
import FriendsTabContent from "@components/tab/tab-content/tab-content";

import photo from "@assets/photo.svg";

const FriendsPage: FC = () => {
  const [activeType, setActive] = useState("friends");
  const [data, setData] = useState<any[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(protectedInfoThunk());
  }, [dispatch]);

  const user = useAppSelector(selectUser);

  useEffect(() => {
    switch (activeType) {
      case "friends":
        setData(user.friends);
        break;
      case "all":
        setData([
          {
            img: photo,
            imgFallback: "",
            name: "Dieter Phillips",
          },
          {
            img: photo,
            imgFallback: "",
            name: "Sebastian Sellers",
          },
          {
            img: photo,
            imgFallback: "",
            name: "Tamekah Oliver",
          },
          {
            img: photo,
            imgFallback: "",
            name: "Jesse Hancock",
          },
          {
            img: photo,
            imgFallback: "",
            name: "Keegan Colon",
          },
        ]);
        break;
      case "requests":
        // setData(заявки в друзья)
        setData(user.friendOf);
        break;
      case "sended":
        // setData(отправленные заявки)
        setData(user.outgoingRequests);
        break;

      default:
        setData([]);
        break;
    }
  }, [user, activeType]);

  return (
    <div className="w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] mt-[20px] xl:mt-[30px] mb-[120px] lg:mb-[20px] px-[20px] lg:px-0">
      <div className="w-full xl:w-1/3 h-auto max-h-[220px] flex flex-col bg-background rounded-[10px] p-[20px] xl:p-[30px]">
        <TabButton active={activeType == "friends"} onClick={() => setActive("friends")}>
          Мои друзья
        </TabButton>
        <TabButton active={activeType == "all"} onClick={() => setActive("all")}>
          Все пользователи
        </TabButton>
        <TabButton
          active={activeType == "requests"}
          onClick={() => setActive("requests")}
          badge={user.friendOf.length}
        >
          Заявки в друзья
        </TabButton>
        <TabButton
          active={activeType == "sended"}
          onClick={() => setActive("sended")}
          badge={user.outgoingRequests.length}
        >
          Отправленные заявки
        </TabButton>
      </div>

      <div className="list w-full xl:w-2/3 bg-background rounded-[10px] p-[20px] xl:p-[30px]">
        <FriendsTabContent type={activeType} data={data} text="" />
      </div>
    </div>
  );
};

export default FriendsPage;
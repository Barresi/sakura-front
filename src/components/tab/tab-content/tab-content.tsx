import { ChangeEventHandler, FC, useEffect, useState } from "react";
import Search from "@src/components/ui/form/search/search";
import FriendsCard from "@src/components/ui/card/friends-card/friends-card";
import { useAppSelector } from "@src/hooks/store-hooks";
import { selectUsers } from "@src/store/reducers/users/selectors";
import {
  selectProfileInfoFriends,
  selectProfileInfoIsLoading,
  selectProfileInfoReceived,
  selectProfileInfoSended,
  selectUser,
} from "@src/store/reducers/profileInfo/selectors";
import { filterFriendsData } from "@src/utils/utils";
import { IFriendsRequestResponse, IUser } from "@src/types/types";

const text = {
  friends: "Мои друзья",
  all: "Все пользователи",
  requests: "Заявки в друзья",
  sended: "Отправленные заявки",
};

interface IFriendsTabContentProps {
  type: "all" | "requests" | "sended" | "friends";
}

const FriendsTabContent: FC<IFriendsTabContentProps> = ({ type }) => {
  // TODO: fix searching
  const [search, setSearch] = useState("");
  const [data, setData] = useState<IUser[] | IFriendsRequestResponse[]>([]);
  const users = useAppSelector(selectUsers);
  const { id } = useAppSelector(selectUser);
  const friends = useAppSelector(selectProfileInfoFriends);
  const received = useAppSelector(selectProfileInfoReceived);
  const sended = useAppSelector(selectProfileInfoSended);
  const isLoading = useAppSelector(selectProfileInfoIsLoading);

  useEffect(() => {
    switch (type) {
      case "all":
        setData(users);
        break;

      case "friends":
        setData(friends);
        break;

      case "requests":
        setData(received);
        break;

      case "sended":
        setData(sended);
        break;
    }
  }, [type, users, friends, received, sended]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearch(e.target.value);

  return (
    <>
      <h2 className="font-medium text-[24px] leading-[32px]">
        {text[type as keyof typeof text]}
      </h2>

      <div className="mt-[20px]">
        <Search onChange={handleChange} />
      </div>

      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-[20px]">
            {data
              // ?.filter((item) => filterFriendsData(item, search))
              ?.map((friend, index) => {
                let dataId = friend.id;

                // Объясняю, зачем код ниже: user1 может отправить запрос user2, в итоге у нас будет
                // request: {id: number, fromId: user1, toId: user2}
                // а если user2 добавит user1
                // то request: {id: number, fromId: user2, toId: user1}
                // и проверка нужна, чтобы правильно передавать id для отображения
                if (type != "all" && "fromId" in friend && "toId" in friend) {
                  dataId = Number(id) == friend.fromId ? friend.toId : friend.fromId;
                }

                return (
                  <FriendsCard
                    key={index}
                    type={type}
                    id={Number(dataId)}
                    isMine={Number(dataId) == Number(id)}
                  />
                );
              })}
          </div>
          {data?.length < 1 ? (
            <span className="text-lg flex justify-center">Здесь пока ничего нет</span>
          ) : null}
        </>
      )}
    </>
  );
};

export default FriendsTabContent;

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
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const users = useAppSelector(selectUsers);
  const { id } = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectProfileInfoIsLoading);
  const friends = useAppSelector(selectProfileInfoFriends);
  const received = useAppSelector(selectProfileInfoReceived);
  const sended = useAppSelector(selectProfileInfoSended);

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
                let dataId = friend.toId;

                if (type == "all") dataId = friend.id;
                if (type == "requests") dataId = friend.fromId;

                return (
                  <FriendsCard
                    key={index}
                    type={type}
                    id={dataId}
                    isMine={dataId == id}
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

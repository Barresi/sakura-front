import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import FriendButton, { Tab } from "@src/components/friend-button/friend-button";
import { cn, useWindowSize } from "@src/utils/utils";
import Card from "../card";
import { useAppDispatch, useAppSelector } from "@src/hooks/store-hooks";
import { addFriend } from "@src/api/users";
import { acceptRequest, cancelRequest, getReceived, getSended } from "@src/api/requests";
import { rejectRequest } from "@src/api/requests";
import { deleteFriend } from "@src/api/friends";
import { selectUser } from "@src/store/reducers/profileInfo/selectors";
import {
  selectAllUsers,
  selectReceived,
  selectSended,
} from "@src/store/reducers/friends/selectors";
import {
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk,
} from "@src/store/reducers/friends/async-thunks";

interface IFriendsCardProps {
  className?: string;
  id: number;
  type?: Tab;
  isMine?: boolean;
}

const FriendsCard: FC<IFriendsCardProps> = ({
  className,
  id,
  type = "friends",
  isMine,
}) => {
  const isMobile = useWindowSize(1024);
  const dispatch = useAppDispatch();

  const { id: currentId } = useAppSelector(selectUser);
  const sended = useAppSelector(selectSended);
  const received = useAppSelector(selectReceived);
  const user = useAppSelector(selectAllUsers).filter((user) => Number(user.id) === id)[0];
  const { firstName, lastName } = user || { firstName: "Unknown", lastName: "User" };

  // mock
  const img = "";
  const imgFallback = "";
  const date = "";

  // handlers for buttons
  const addFriendHandler = async () => {
    await addFriend(id);

    dispatch(getSendedThunk());
  };
  const deleteFriendHandler = async () => {
    await deleteFriend(id);

    dispatch(getFriendsThunk());
  };

  const acceptRequestHandler = async () => {
    await acceptRequest(
      received.filter((item) => item.fromId === id && item.toId === Number(currentId))[0]
        ?.id,
    );

    dispatch(getFriendsThunk());
    dispatch(getReceivedThunk());
  };
  const rejectRequestHandler = async () => {
    await rejectRequest(
      received.filter((item) => item.fromId === id && item.toId === Number(currentId))[0]
        ?.id,
    );

    dispatch(getReceivedThunk());
  };
  const cancelRequestHandler = async () => {
    await cancelRequest(
      sended.filter((item) => item.fromId === Number(currentId) && item.toId === id)[0]
        ?.id,
    );

    dispatch(getSendedThunk());
  };

  const avatar = (
    <Avatar
      className={`w-[50px] h-[50px] lg:max-w-[120px] lg:w-[120px] lg:h-[100px] box-content ${
        img ? "" : "border rounded-full text-center flex justify-center items-center"
      }`}
    >
      <AvatarImage src={img} className="w-full" />
      <AvatarFallback>{imgFallback}</AvatarFallback>
    </Avatar>
  );

  const info = (
    <div className={`flex flex-col justify-between ${type === "requests" && "flex-col"}`}>
      <h3 className="font-bold leading-6 text-friendCard-foreground text-lg">
        {firstName} {lastName} {isMine ? "(Вы)" : null}
      </h3>
      {type === "requests" && (
        <span className="text-[#55677D]">подал вам заявку в друзья</span>
      )}
      {type === "requests" && date && (
        <span className="text-liked-dateForeground">{date}</span>
      )}
      {type === "sended" && (
        <span className="text-[#55677D]">вы отправили заявку в друзья</span>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <Card
        className={cn(
          "block hover:border-b-message-border hover:bg-background",
          className,
        )}
      >
        <div className="flex items-start lg:items-center gap-[15px]">
          {avatar}

          {info}
        </div>
        <div className="mt-[10px] lg:max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]">
          {isMine || (
            <FriendButton
              type={type}
              clickHandlers={{
                friends: [() => {}, deleteFriendHandler],
                all: [() => {}, addFriendHandler],
                requests: [acceptRequestHandler, rejectRequestHandler],
                sended: [() => {}, cancelRequestHandler],
              }}
            />
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={cn("block hover:border-b-message-border hover:bg-background", className)}
    >
      <div className="flex items-start lg:items-center gap-[15px]">
        {avatar}

        <div className="w-full">
          {info}

          <div className="mt-[15px] max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]">
            {isMine || (
              <FriendButton
                type={type}
                clickHandlers={{
                  friends: [() => {}, deleteFriendHandler],
                  all: [() => {}, addFriendHandler],
                  requests: [acceptRequestHandler, rejectRequestHandler],
                  sended: [() => {}, cancelRequestHandler],
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FriendsCard;

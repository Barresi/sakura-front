import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import FriendButton, { Tab } from "@src/components/friend-button/friend-button";
import { cn, useWindowSize } from "@src/utils/utils";
import Card from "../card";
import { useAppSelector } from "@src/hooks/store-hooks";
import { selectUsers } from "@src/store/reducers/users/selectors";
import { selectUser } from "@src/store/reducers/profileInfo/selectors";
import { addFriend } from "@src/api/users";
import { acceptRequest, cancelRequest } from "@src/api/requests";
import { rejectRequest } from "@src/api/requests";
import { deleteFriend } from "@src/api/friends";

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

  const { id: currentId, friended, received } = useAppSelector(selectUser);
  const user = useAppSelector(selectUsers).filter((user) => Number(user.id) === id)[0];
  const { firstName, lastName } = user || {};

  // mock
  const img = "";
  const imgFallback = "";
  const date = "";

  // handlers for buttons
  const addFriendHandler = async () => {
    await addFriend(id);
  };
  const deleteFriendHandler = async () => {
    await deleteFriend(id);
  };

  const acceptRequestHandler = async () => {
    console.log(
      received.filter((item) => item.fromId === id && item.toId === currentId)[0]?.id,
    );

    await acceptRequest(
      received.filter((item) => item.fromId === id && item.toId === currentId)[0]?.id,
    );
  };
  const rejectRequestHandler = async () => {
    // console.log(id, currentId);
    // console.log(received.filter((item) => item.fromId === id && item.toId === currentId));

    await rejectRequest(
      received.filter((item) => item.fromId === id && item.toId === currentId)[0]?.id,
    );
  };
  const cancelRequestHandler = async () => {
    await cancelRequest(
      friended.filter((item) => item.fromId === currentId && item.toId === id)[0]?.id,
    );
  };

  const avatar = (
    <Avatar
      className={`w-[50px] h-[50px] lg:w-[120px] lg:h-[100px] ${
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

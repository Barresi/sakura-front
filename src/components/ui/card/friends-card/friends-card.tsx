import { FC, ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import FriendButton, { Tab } from "@src/components/friend-button/friend-button";
import { cn, useWindowSize } from "@src/utils/utils";
import Card from "../card";
import { useAppSelector } from "@src/hooks/store-hooks";
import { selectUsers } from "@src/store/reducers/users/selectors";

interface IFriendsCardProps {
  className?: string;
  data: any;
  type?: Tab;
  buttons?: ReactNode;
}

const FriendsCard: FC<IFriendsCardProps> = ({
  className,
  data: { id },
  type = "friends",
}) => {
  const isMobile = useWindowSize(1024);

  const user = useAppSelector(selectUsers).filter((user) => user.id === id)[0];
  const { firstName, lastName } = user;

  // mock
  const img = "";
  const imgFallback = "";
  const date = "";

  // handlersfor buttons
  const sendRequest = () => {};
  const cancelRequest = () => {};
  const acceptRequest = () => {};
  const rejectRequest = () => {};

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
    <div className={`flex justify-between ${type === "requests" && "flex-col"}`}>
      <h3 className="font-bold leading-6 text-friendCard-foreground text-lg">
        {firstName} {lastName}
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
          <FriendButton type={type} />
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
            <FriendButton type={type} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FriendsCard;

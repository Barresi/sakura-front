import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar/avatar";
import Button from "@ui/button/button";
import { cn, useWindowSize } from "@utils/utils";
import { MessageCardProps } from "../message-card/message-card";
import Card from "../card";

export interface FriendCardProps {
  className?: string;
  data: Pick<MessageCardProps["data"], "img" | "imgFallback" | "name">;
  type?: "friends" | "sended" | "all" | "";
}

const types = {
  friends: "Удалить из друзей",
  sended: "Отменить заявку",
  all: "Добавить в друзья",
};

const FriendCard: FC<FriendCardProps> = (props) => {
  const {
    className,
    data: { img, imgFallback, name },
    type,
  } = props;

  const isMobile = useWindowSize(1024);

  if (isMobile) return <FriendCardMobile {...props} />;

  return (
    <Card
      className={cn("block hover:border-b-message-border hover:bg-background", className)}
    >
      <div className="flex items-start lg:items-center gap-[15px]">
        <Avatar className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]">
          <AvatarImage src={img} className="" />
          <AvatarFallback>{imgFallback}</AvatarFallback>
        </Avatar>

        <div className="w-full">
          <div className="flex justify-between">
            <h3 className="font-bold leading-6 text-friendCard-foreground text-lg">
              {name}
            </h3>
          </div>

          <div className="mt-[25px] max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]">
            <Button
              variant="secondary"
              className="w-[49%] hover:bg-background border-2 hover:border-secondary"
            >
              Написать сообщение
            </Button>
            <Button
              variant={type == "all" ? "default" : "text"}
              className="w-[49%] whitespace-nowrap"
            >
              {types[type as keyof typeof types]}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const FriendCardMobile: FC<FriendCardProps> = ({
  className,
  data: { img, imgFallback, name },
  type,
}) => (
  <Card
    className={cn("block hover:border-b-message-border hover:bg-background", className)}
  >
    <div className="flex items-start lg:items-center gap-[15px]">
      <Avatar className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]">
        <AvatarImage src={img} className="" />
        <AvatarFallback>{imgFallback}</AvatarFallback>
      </Avatar>

      <div className="flex justify-between">
        <h3 className="font-bold leading-6 text-friendCard-foreground text-lg">{name}</h3>
      </div>
    </div>
    <div className="mt-[10px] lg:max-w-[485px] whitespace-nowrap flex justify-between gap-[10px]">
      <Button
        icon="comment"
        variant="secondary"
        className="w-[49%] hover:bg-background border hover:border-secondary"
      />
      <Button
        icon={type == "friends" || type == "sended" ? "clear" : "add"}
        variant={type == "all" ? "default" : "text"}
        className="w-[49%] whitespace-nowrap hover:bg-background border-2 border-secondary hover:border-secondary"
      />
    </div>
  </Card>
);

export default FriendCard;

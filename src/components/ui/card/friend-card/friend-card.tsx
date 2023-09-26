import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar/avatar";
import Button from "@ui/button/button";
import { cn, useWindowSize } from "@utils/utils";
import { MessageCardProps } from "../message-card/message-card";
import Card from "../card";
import more from "@assets/ui/More.svg";

export interface FriendCardProps {
  className?: string;
  data: Pick<MessageCardProps["data"], "img" | "imgFallback" | "name">;
  type?: "friends" | "sended" | "all";
}

const types = {
  friends: "Удалить из друзей",
  sended: "Отменить заявку",
  all: "Добавить в друзья",
};

const FriendCard: FC<FriendCardProps> = ({
  className,
  data: { img, imgFallback, name },
  type,
}) => {
  const isMobile = useWindowSize(1024);

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
            <img
              src={more}
              className="px-2 cursor-pointer transition-all hover:scale-[1.1] active:scale-[0.9]"
            />
          </div>

          {isMobile ? (
            <div className="mt-[25px] whitespace-nowrap flex justify-between gap-[10px]">
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
          ) : (
            <div className="mt-[25px] whitespace-nowrap flex justify-between gap-[10px]">
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
          )}
        </div>
      </div>
    </Card>
  );
};

export default FriendCard;

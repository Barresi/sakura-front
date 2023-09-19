import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar/avatar";
import Button from "@ui/button/button";
import { cn, useWindowSize } from "@utils/utils";
import { MessageCardProps } from "../message-card/message-card";
import Card from "../card";

export interface FriendCardProps
  extends Pick<MessageCardProps["data"], "img" | "imgFallback" | "name"> {
  className?: string;
}

const FriendCard: FC<FriendCardProps> = ({ className, img, imgFallback, name }) => {
  const isMobile = useWindowSize(1024);

  return (
    <Card
      className={cn("block hover:border-b-message-border hover:bg-background", className)}
    >
      <div className="flex items-center gap-[15px]">
        <Avatar className="w-[60px] h-[60px]">
          <AvatarImage src={img} className="" />
          <AvatarFallback>{imgFallback}</AvatarFallback>
        </Avatar>

        <div>
          <h3 className="font-bold text-liked-foreground leading-6 text-[#55677D]">
            {name}
          </h3>

          {isMobile ? (
            <div className="mt-[10px] whitespace-nowrap flex justify-between gap-[10px]">
              <Button
                icon="edit"
                variant="secondary"
                className="w-[49%] hover:bg-background border-2 hover:border-secondary"
              />
              <Button
                icon="edit"
                variant="text"
                className="w-[49%] whitespace-nowrap hover:bg-background border-2 hover:border-secondary"
              />
            </div>
          ) : (
            <div className="mt-[10px] whitespace-nowrap flex justify-between gap-[10px]">
              <Button
                variant="secondary"
                className="w-[49%] hover:bg-background border-2 hover:border-secondary"
              >
                Написать сообщение
              </Button>
              <Button variant="default" className="w-[49%] whitespace-nowrap ">
                Удалить из друзей
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FriendCard;

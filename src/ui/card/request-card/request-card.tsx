import { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar/avatar";
import { MessageCardProps } from "../message-card/message-card";
import Card from "../card";
import Button from "@ui/button/button";
import { cn } from "@utils/utils";

export interface RequestCardProps
  extends Pick<MessageCardProps["data"], "img" | "imgFallback" | "name" | "date"> {
  className?: string;
}

const RequestCard: FC<RequestCardProps> = ({
  className,
  img,
  imgFallback,
  date,
  name,
}) => {
  return (
    <Card
      className={cn(
        "block hover:border-message-border hover:border-t-background hover:border-l-background",
        className,
      )}
    >
      <div className="flex items-center gap-[15px]">
        <Avatar className="w-[60px] h-[60px]">
          <AvatarImage src={img} className="" />
          <AvatarFallback>{imgFallback}</AvatarFallback>
        </Avatar>

        <div className="mr-16">
          <h3 className="leading-6 text-[#55677D]">
            <span className="font-bold text-liked-foreground">{name}</span> подал заявку в
            друзья
          </h3>
          <span className="leading-6 text-liked-dateForeground">{date}</span>
        </div>
      </div>

      <div className="mt-[10px] flex justify-between gap-[10px]">
        <Button variant="default" className="w-[49%]">
          Добавить в друзья
        </Button>
        <Button variant="secondary" className="w-[49%]">
          Отклонить
        </Button>
      </div>
    </Card>
  );
};

export default RequestCard;

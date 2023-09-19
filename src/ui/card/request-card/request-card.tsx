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
    <Card className={cn("block", className)}>
      <div className="flex items-center gap-[15px]">
        <Avatar className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]">
          <AvatarImage src={img} className="" />
          <AvatarFallback>{imgFallback}</AvatarFallback>
        </Avatar>

        <div>
          <h3 className="leading-6 text-[#55677D]">
            <span className="font-bold text-request-foreground flex flex-col lg:flex-row">
              {name}
            </span>{" "}
            подал заявку в друзья
          </h3>
          <span className="leading-6 text-liked-dateForeground">{date}</span>
        </div>
      </div>
      <div className="mt-[10px] flex justify-between gap-[10px] w-full flex-col lg:flex-row">
        <Button variant="default" className="lg:w-[49%]">
          Добавить в друзья
        </Button>
        <Button variant="secondary" className="lg:w-[49%]">
          Отклонить
        </Button>
      </div>
    </Card>
  );
};

export default RequestCard;

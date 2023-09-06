import { FC } from "react";
import { Badge } from "@ui/badge/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar/avatar";

import Card from "../card";

export interface MessageCardProps {
  data: {
    img: string;
    imgFallback: string;
    name: string;
    message: string;
    date: string;
    badge: number | string;
  };
}

const MessageCard: FC<MessageCardProps> = ({
  data: { img, imgFallback, name, message, date, badge },
}) => {
  return (
    <Card className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-[15px]">
        <Avatar className="w-[60px] h-[60px]">
          <AvatarImage src={img} className="" />
          <AvatarFallback>{imgFallback}</AvatarFallback>
        </Avatar>

        <div className="mr-16">
          <h3 className="font-bold leading-6">{name}</h3>
          <span className="w-[150px] block leading-6 whitespace-nowrap overflow-hidden text-ellipsis">
            {message}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-[#55677D]">{date}</span>
        <Badge className="self-end">{badge}</Badge>
      </div>
    </Card>
  );
};

export default MessageCard;

import { FC } from "react";
import { Badge } from "@src/components/ui/badge/badge";
import { cn } from "@utils/utils";

import Card from "../card";
import UserAvatar from "../../avatar/avatar";

export interface MessageCardProps {
  className?: string;
  data: {
    img: string;
    name: string;
    message?: string;
    date?: string;
    badge?: number | string;
  };
}

const MessageCard: FC<MessageCardProps> = ({
  className,
  data: { img, name, message, date, badge },
}) => {
  return (
    <Card
      className={cn(
        "flex items-center justify-between cursor-pointer hover:border-message-hoverBorder",
        className,
      )}
    >
      <div className="flex items-center gap-[15px]">
        <UserAvatar src={img} className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]" />
        <div>
          <h3 className="font-bold leading-6">{name}</h3>
          <span className="w-[120px] lg:w-[150px] block leading-6 whitespace-nowrap overflow-hidden text-ellipsis">
            {message}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <span className="text-[#55677D]">{date}</span>
        <Badge className="self-end">{badge}</Badge>
      </div>
    </Card>
  );
};

export default MessageCard;

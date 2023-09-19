import { FC } from "react";
import { Link } from "react-router-dom";
import { cn } from "@utils/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar/avatar";
import { MessageCardProps } from "../message-card/message-card";
import Card from "../card";

export interface LikedCardProps
  extends Pick<MessageCardProps["data"], "img" | "imgFallback" | "name" | "date"> {
  link?: string;
  className?: string;
}

const LikedCard: FC<LikedCardProps> = ({
  className,
  img,
  imgFallback,
  name,
  date,
  link,
}) => {
  return (
    <Card className={cn("", className)}>
      <div className="flex gap-[15px] items-start lg:items-center">
        <Avatar className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]">
          <AvatarImage src={img} className="" />
          <AvatarFallback>{imgFallback}</AvatarFallback>
        </Avatar>

        <div>
          <h3 className="leading-6 text-[#55677D] flex flex-col lg:flex-row">
            <span className="font-bold text-liked-foreground mr-1">{name}</span>
            <span className="mr-1 text-normal">оценил вашу</span>
            <Link className="text-[#4791FF] hover:underline" to="/">
              фотографию
            </Link>
          </h3>
          <span className="leading-6 text-liked-dateForeground">{date}</span>
        </div>
        {link && (
          <Avatar className="w-[67px] h-[67px] rounded-none">
            <AvatarImage src={link} className="" />
          </Avatar>
        )}
      </div>
    </Card>
  );
};

export default LikedCard;

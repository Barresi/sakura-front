import { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar/avatar";
import { MessageCardProps } from "../message-card/message-card";
import Card from "../card";

export interface LikedCardProps
  extends Pick<MessageCardProps["data"], "img" | "imgFallback" | "name" | "date"> {
  link?: string;
}

const LikedCard: FC<LikedCardProps> = ({ img, imgFallback, name, date, link }) => {
  return (
    <Card className="hover:border-message-border hover:border-t-background hover:border-l-background">
      <div className="flex items-center gap-[15px]">
        <Avatar className="w-[60px] h-[60px]">
          <AvatarImage src={img} className="" />
          <AvatarFallback>{imgFallback}</AvatarFallback>
        </Avatar>

        <div className="mr-16">
          <h3 className="leading-6 text-[#55677D]">
            <span className="font-bold text-liked-foreground">{name}</span> оценил вашу{" "}
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

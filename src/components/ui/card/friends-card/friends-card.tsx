import { cn, useWindowSize } from "@src/utils/utils";
import { FC, ReactNode } from "react";
import Card from "../card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

interface IData {
  img?: string;
  imgFallback?: string;
  name: string;
  date?: string;
}

interface IFriendsCardProps {
  className?: string;
  data: IData;
  type?: "friends" | "requests";
  buttons?: ReactNode;
  buttonsMobile?: ReactNode;
}

const FriendsCard: FC<IFriendsCardProps> = ({
  className,
  data,
  type = "friends",
  buttons,
  buttonsMobile,
}) => {
  const { img, imgFallback, name, date } = data;
  const isMobile = useWindowSize(1024);

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
      <h3 className="font-bold leading-6 text-friendCard-foreground text-lg">{name}</h3>
      {type === "requests" && (
        <span className="text-[#55677D]">подал заявку в друзья</span>
      )}
      {type === "requests" && date && (
        <span className="text-liked-dateForeground">{date}</span>
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
          {buttonsMobile}
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
            {buttons}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FriendsCard;

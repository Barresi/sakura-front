import { FC } from "react";
import { MessageCardProps } from "../message-card/message-card";
import Card from "../card";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar/avatar";
import Button from "@ui/button/button";
import { cn, useWindowSize } from "@utils/utils";

const edit = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3786 8.94975L8.96373 18.3648C8.68452 18.644 8.32892 18.8343 7.94174 18.9117L5 19.5001L5.58835 16.5583C5.66579 16.1711 5.85609 15.8155 6.13529 15.5363L15.5502 6.12132M18.3786 8.94975L19.7928 7.53553C20.1834 7.14501 20.1834 6.51184 19.7928 6.12132L18.3786 4.70711C17.9881 4.31658 17.3549 4.31658 16.9644 4.70711L15.5502 6.12132M18.3786 8.94975L15.5502 6.12132"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export interface FriendCardProps
  extends Pick<MessageCardProps["data"], "img" | "imgFallback" | "name"> {
  className?: string;
}

const FriendCard: FC<FriendCardProps> = ({ className, img, imgFallback, name }) => {
  const isMobile = useWindowSize(1024);

  return (
    <Card
      className={cn(
        "block hover:border-message-border hover:border-t-background hover:border-l-background hover:bg-background",
        className,
      )}
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
              <Button variant="secondary" className="w-[49%]">
                {edit}
              </Button>
              <Button variant="text" className="w-[49%] whitespace-nowrap">
                {edit}
              </Button>
            </div>
          ) : (
            <div className="mt-[10px] whitespace-nowrap flex justify-between gap-[10px]">
              <Button variant="secondary" className="w-[49%]">
                Написать сообщение
              </Button>
              <Button variant="text" className="w-[49%] whitespace-nowrap">
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

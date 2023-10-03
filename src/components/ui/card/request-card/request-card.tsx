import { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@src/components/ui/avatar/avatar";
import { MessageCardProps } from "../message-card/message-card";
import Card from "../card";
import Button from "@src/components/ui/button/button";
import { cn, useWindowSize } from "@utils/utils";

export interface RequestCardProps {
  className?: string;
  data: Pick<MessageCardProps["data"], "img" | "imgFallback" | "name" | "date">;
}

const RequestCard: FC<RequestCardProps> = ({
  className,
  data: { img, imgFallback, date, name },
}) => {
  const isMobile = useWindowSize(1024);

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
      <div className="mt-[10px] flex justify-between gap-[10px] w-full flex-row">
        {isMobile ? (
          <>
            <Button variant="default" icon="add" className="lg:w-[49%]" />

            <Button variant="secondary" icon="clear" className="lg:w-[49%]" />
          </>
        ) : (
          <>
            <Button variant="default" className="lg:w-[49%]">
              Добавить в друзья
            </Button>
            <Button
              variant="secondary"
              className="lg:w-[49%] hover:bg-background border-2 hover:border-secondary"
            >
              Отклонить
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};

export default RequestCard;

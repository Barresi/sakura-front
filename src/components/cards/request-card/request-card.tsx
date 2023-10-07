import { FC } from "react";
import Button from "@src/components/ui/button/button";
import FriendsCard from "@src/components/ui/card/friends-card/friends-card";
import { MessageCardProps } from "@src/components/ui/card/message-card/message-card";

export interface RequestCardProps {
  className?: string;
  data: Pick<MessageCardProps["data"], "img" | "imgFallback" | "name" | "date">;
}

const RequestCard: FC<RequestCardProps> = ({
  className,
  data: { img, imgFallback, date, name },
}) => {
  const buttons = (
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
  );

  const buttonsMobile = (
    <>
      <Button variant="default" icon="add" className="lg:w-[49%]" />

      <Button variant="secondary" icon="clear" className="lg:w-[49%]" />
    </>
  );

  return (
    <>
      <FriendsCard
        data={{ img, imgFallback, date, name }}
        type="requests"
        className={className}
        buttons={buttons}
        buttonsMobile={buttonsMobile}
      />

      {/* <Card className={cn("block", className)}>
        <div className="flex items-start lg:items-center gap-[15px]">
          <Avatar className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]">
            <AvatarImage src={img} className="" />
            <AvatarFallback>{imgFallback}</AvatarFallback>
          </Avatar>

          <div className="w-full">
            <div>
              <h3 className="leading-6 text-[#55677D]">
                <span className="font-bold text-request-foreground flex flex-col lg:flex-row">
                  {name}
                </span>{" "}
                подал заявку в друзья
              </h3>
              <span className="leading-6 text-liked-dateForeground">{date}</span>
            </div>

            <div className="mt-[10px] max-w-[485px] flex justify-between gap-[10px] w-full flex-row"></div>
          </div>
        </div>
      </Card> */}
    </>
  );
};

export default RequestCard;

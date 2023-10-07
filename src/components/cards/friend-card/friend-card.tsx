import { FC } from "react";
import Button from "@ui/button/button";
import { MessageCardProps } from "@src/components/ui/card/message-card/message-card";
import FriendsCard from "@src/components/ui/card/friends-card/friends-card";

export interface FriendCardProps {
  className?: string;
  data: Pick<MessageCardProps["data"], "img" | "imgFallback" | "name">;
  type?: "friends" | "sended" | "all" | "";
}

const types = {
  friends: "Удалить из друзей",
  sended: "Отменить заявку",
  all: "Добавить в друзья",
};

const FriendCard: FC<FriendCardProps> = (props) => {
  const {
    className,
    data: { img, imgFallback, name },
    type,
  } = props;

  const buttons = (
    <>
      <Button
        variant="secondary"
        className="w-[49%] hover:bg-background border-2 hover:border-secondary"
      >
        Написать сообщение
      </Button>
      <Button
        variant={type == "all" ? "default" : "text"}
        className="w-[49%] whitespace-nowrap"
      >
        {types[type as keyof typeof types]}
      </Button>
    </>
  );

  const buttonsMobile = (
    <>
      <Button
        icon="comment"
        variant="secondary"
        className="w-[49%] hover:bg-background border hover:border-secondary"
      />
      <Button
        icon={type == "friends" || type == "sended" ? "clear" : "add"}
        variant={type == "all" ? "default" : "text"}
        className="w-[49%] whitespace-nowrap hover:bg-background border-2 border-secondary hover:border-secondary"
      />
    </>
  );

  return (
    <FriendsCard
      data={{ img, imgFallback, name }}
      className={className}
      buttons={buttons}
      buttonsMobile={buttonsMobile}
    />
  );
};

export default FriendCard;

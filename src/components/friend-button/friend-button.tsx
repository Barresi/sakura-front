import { FC } from "react";
import Button, { Icon } from "../ui/button/button";
import { useWindowSize } from "@src/utils/utils";

export type Tab = "friends" | "sended" | "all" | "requests";

interface IFriendButtonProps {
  type?: Tab;
  clickHandlers: {
    friends: any[];
    all: any[];
    requests: any[];
    sended: any[];
  };
}

const types = {
  friends: {
    primary: {
      text: "Написать сообщение",
      variant: "default",
      icon: "edit",
    },
    secondary: {
      text: "Удалить из друзей",
      variant: "secondary",
      icon: "deleteFriend",
    },
  },
  sended: {
    primary: {
      text: "Написать сообщение",
      variant: "default",
      icon: "edit",
    },
    secondary: {
      text: "Отменить",
      variant: "secondary",
      icon: "deleteFriend",
    },
  },
  all: {
    primary: {
      text: "Написать сообщение",
      variant: "default",
      icon: "edit",
    },
    secondary: {
      text: "Добавить в друзья",
      variant: "secondary",
      icon: "add",
    },
  },
  requests: {
    primary: {
      text: "Принять",
      variant: "default",
      icon: "add",
    },
    secondary: {
      text: "Отклонить",
      variant: "secondary",
      icon: "deleteFriend",
    },
  },
};

const FriendButton: FC<IFriendButtonProps> = ({ type, clickHandlers }) => {
  const isMobile = useWindowSize(1024);
  const data = types[type as keyof typeof types];

  if (isMobile)
    return (
      <>
        <Button
          // onClick={}
          icon={data.primary.icon as Icon}
          onClick={clickHandlers[type as keyof typeof clickHandlers][0]}
          variant="default"
          className="w-[49%]"
        />
        <Button
          icon={data.secondary.icon as Icon}
          onClick={clickHandlers[type as keyof typeof clickHandlers][1]}
          variant="secondary"
          className="w-[49%] whitespace-nowrap hover:bg-secondary-hover"
        />
      </>
    );

  return (
    <>
      <Button
        variant="default"
        className="w-[49%]"
        onClick={clickHandlers[type as keyof typeof clickHandlers][0]}
      >
        {data.primary.text}
      </Button>
      <Button
        variant="secondary"
        className="w-[49%] whitespace-nowrap hover:bg-secondary-hover"
        onClick={clickHandlers[type as keyof typeof clickHandlers][1]}
      >
        {data.secondary.text}
      </Button>
    </>
  );
};

export default FriendButton;

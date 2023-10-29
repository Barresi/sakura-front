import { FC } from "react";
import Button, { Icon } from "../ui/button/button";
import { useWindowSize } from "@src/utils/utils";

export type Tab = "friends" | "sended" | "all" | "requests";

interface IFriendButtonProps {
  type?: Tab;
  clickHandlers: {
    friends: (() => void)[];
    all: (() => void)[];
    requests: (() => void)[];
    sended: (() => void)[];
  };
}

const types = {
  friends: {
    primary: {
      text: "Написать сообщение",
      icon: "edit",
    },
    secondary: {
      text: "Удалить из друзей",
      icon: "deleteFriend",
    },
  },
  sended: {
    primary: {
      text: "Написать сообщение",
      icon: "edit",
    },
    secondary: {
      text: "Отменить",
      icon: "deleteFriend",
    },
  },
  all: {
    primary: {
      text: "Написать сообщение",
      icon: "edit",
    },
    secondary: {
      text: "Добавить в друзья",
      icon: "add",
    },
  },
  requests: {
    primary: {
      text: "Принять",
      icon: "add",
    },
    secondary: {
      text: "Отклонить",
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
          icon={data.primary.icon as Icon}
          variant="default"
          className="w-[49%]"
          onClick={clickHandlers[type as keyof typeof clickHandlers][0]}
        />
        <Button
          icon={data.secondary.icon as Icon}
          variant="secondary"
          className="w-[49%] whitespace-nowrap hover:bg-secondary-hover"
          onClick={clickHandlers[type as keyof typeof clickHandlers][1]}
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

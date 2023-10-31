import { FC } from "react";
import Button, { Icon } from "../../ui/button/button";
import { useWindowSize } from "@src/utils/utils";

export type Tab = "friends" | "sended" | "all" | "requests";

interface IFriendButtonProps {
  type?: Tab;
  isFriend?: boolean;
  isSended?: boolean;
  isReceived?: boolean;
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
      text: "Отменить заявку",
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

const FriendButton: FC<IFriendButtonProps> = ({
  type,
  isFriend,
  isSended,
  isReceived,
  clickHandlers,
}) => {
  const isMobile = useWindowSize(1024);
  const data = types[type as keyof typeof types];

  const primaryClassName = "w-[49%]";
  const primaryHandler = clickHandlers[type as keyof typeof clickHandlers][0];

  const secondaryClassName = "w-[49%] whitespace-nowrap hover:bg-secondary-hover";

  const secondaryIcon = () => {
    if (type === "requests") return data.secondary.icon as Icon;
    if (isFriend) return types.friends.secondary.icon as Icon;
    if (isSended) return types.sended.secondary.icon as Icon;
    if (isReceived) return types.requests.primary.icon as Icon;

    return data.secondary.icon as Icon;
  };

  const secondaryHandler = () => {
    if (type === "requests")
      return clickHandlers[type as keyof typeof clickHandlers][1]();
    if (isFriend) return clickHandlers.friends[1]();
    if (isSended) return clickHandlers.sended[1]();
    if (isReceived) return clickHandlers.requests[0]();

    return clickHandlers[type as keyof typeof clickHandlers][1]();
  };

  const renderSecondaryButton = () => {
    if (type == "requests") return data.secondary.text;
    if (isFriend) return types.friends.secondary.text;
    if (isSended) return types.sended.secondary.text;
    if (isReceived) return types.requests.primary.text;

    return data.secondary.text;
  };

  if (isMobile)
    return (
      <>
        <Button
          icon={data.primary.icon as Icon}
          variant="default"
          className={primaryClassName}
          onClick={primaryHandler}
        />
        <Button
          icon={secondaryIcon()}
          variant="secondary"
          className="w-[49%] whitespace-nowrap hover:bg-secondary-hover"
          onClick={() => secondaryHandler()}
        />
      </>
    );

  return (
    <>
      <Button variant="default" className={primaryClassName} onClick={primaryHandler}>
        {data.primary.text}
      </Button>
      <Button
        variant="secondary"
        className={secondaryClassName}
        onClick={secondaryHandler}
      >
        {renderSecondaryButton()}
      </Button>
    </>
  );
};

export default FriendButton;

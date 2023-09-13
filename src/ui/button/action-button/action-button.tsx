import { FC, useState } from "react";
import Button, { ButtonProps } from "../button";
import { useTheme } from "@components/theme-provider/theme-provider";
import { cn } from "@utils/utils";

import like from "@assets/ui/Like.svg";
import likeActive from "@assets/ui/Like Active.svg";
import likeActiveDark from "@assets/ui/Like Active Dark.svg";
import comment from "@assets/ui/Comment.svg";
import share from "@assets/ui/Share.svg";

interface IProps extends Omit<ButtonProps, "variant"> {
  action?: "like" | "comment" | "share";
}

const actions = {
  like,
  likeActive: {
    light: likeActive,
    dark: likeActiveDark,
    system: "",
  },
  comment,
  share,
};

const ActionButton: FC<IProps> = ({ children, className, action, onClick, ...props }) => {
  const [active, setActive] = useState(true);

  const { theme } = useTheme();

  const toggleActive = () => {
    setActive((active) => !active);
  };

  const activeClass = "lg:border-[#D22828]";
  const whichLike = active ? actions.likeActive[theme] : like;

  return (
    <Button
      variant="text"
      className={cn(
        "px-[15px] py-[10px] rounded-[20px] items-center gap-[10px] border border-background  hover:bg-background lg:hover:bg-text",
        active && activeClass,
        theme === "light" ? "lg:border-text" : "",
        className,
      )}
      onClick={onClick || toggleActive}
      {...props}
    >
      {action && <img src={action === "like" ? whichLike : actions[action]} alt="" />}

      <span className="text-lg font-bold text-[#55677D] leading-[23px]">{children}</span>
    </Button>
  );
};

export default ActionButton;
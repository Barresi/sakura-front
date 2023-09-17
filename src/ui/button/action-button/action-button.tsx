import { FC, useState } from "react";
import { useTheme } from "@components/theme-provider/theme-provider";
import { cn } from "@utils/utils";
import Button, { ButtonProps } from "../button";

interface IProps extends ButtonProps {}

const ActionButton: FC<IProps> = ({ children, icon, className, onClick, ...props }) => {
  const [active, setActive] = useState(true);

  const { theme } = useTheme();

  const toggleActive = () => {
    setActive((active) => !active);
  };

  const whichLike = active ? "likeActive" : "like";

  return (
    <Button
      variant="text"
      className={cn(
        "px-[15px] py-[10px] rounded-[20px] items-center gap-[10px] border border-background  hover:bg-background lg:hover:bg-text",
        theme === "light" ? "lg:border-text" : "",
        className,
      )}
      onClick={onClick || toggleActive}
      icon={icon == "like" ? whichLike : icon}
      {...props}
    >
      <span className="text-lg font-bold text-[#55677D] leading-[23px]">{children}</span>
    </Button>
  );
};

export default ActionButton;

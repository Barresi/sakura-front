import { useTheme } from "@components/theme-provider/theme-provider";
import { cn } from "@utils/utils";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<IProps> = ({ children, className }) => {
  const { theme } = useTheme();

  const hover = {
    light: "hover:border hover:border-message-hoverBorder",
    dark: "hover:bg-message-hover",
    system: "",
  };

  return (
    <div
      className={cn(
        "w-full bg-message px-8 py-5 rounded-tl-[10px] border border-background border-r-message-border border-b-message-border",
        hover[theme],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;

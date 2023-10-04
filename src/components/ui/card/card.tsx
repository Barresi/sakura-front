import { useTheme } from "@src/hooks/useTheme";
import { cn } from "@utils/utils";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<IProps> = ({ children, className }) => {
  const { theme } = useTheme();

  const hover = {
    light: "hover:bg-message-hover",
    dark: "hover:bg-message-hover",
    system: "",
  };

  return (
    <div
      className={cn(
        "w-full bg-message  rounded-tl-[10px] border border-background border-b-message-border px-[15px] lg:px-[30px] py-[20px]",
        hover[theme],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;

import { FC, ReactNode } from "react";
import Button from "@ui/button/button";
import { Badge } from "@ui/badge/badge";
import { cn } from "@src/utils/utils";

interface TabButtonProps {
  children: ReactNode;
  badge?: number;
  onClick?: () => void;
  active?: boolean;
}

const TabButton: FC<TabButtonProps> = ({ children, badge = 0, onClick, active }) => {
  return (
    <Button
      className={cn(
        "w-full flex justify-between sm:justify-center xl:justify-between text-left sm:text-center",
        active && "bg-text",
      )}
      variant="text"
      onClick={onClick}
    >
      {children}
      {badge > 0 ? <Badge>{badge}</Badge> : null}
    </Button>
  );
};

export default TabButton;

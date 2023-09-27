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

const TabButton: FC<TabButtonProps> = ({ children, badge, onClick, active }) => {
  return (
    <Button
      className={cn("w-full flex justify-start", active && "bg-text")}
      variant="text"
      onClick={onClick}
    >
      {children}
      {badge && <Badge>{badge}</Badge>}
    </Button>
  );
};

export default TabButton;

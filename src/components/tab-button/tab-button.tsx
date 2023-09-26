import { FC, ReactNode } from "react";
import Button from "@ui/button/button";
import { Badge } from "@ui/badge/badge";

interface TabButtonProps {
  children: ReactNode;
  badge?: number;
}

const TabButton: FC<TabButtonProps> = ({ children, badge }) => {
  return (
    <div>
      <Button className={`w-full flex justify-start`} variant="text">
        {children}
        {badge && <Badge>{badge}</Badge>}
      </Button>
    </div>
  );
};

export default TabButton;

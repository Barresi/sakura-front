import { FC, ReactNode } from "react";
import Button from "@ui/button/button";
import { Badge } from "@ui/badge/badge";
import { NavLink } from "react-router-dom";

interface TabButtonProps {
  children: ReactNode;
  to: string;
  badge?: number;
}

const TabButton: FC<TabButtonProps> = ({ children, to, badge }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "bg-text rounded-md" : "rounded-md")}
      end
    >
      <Button
        className={
          "w-full flex justify-between sm:justify-center xl:justify-between text-left sm:text-center active:scale-[0.97]"
        }
        variant="text"
      >
        {children}
        {badge ? <Badge>{badge}</Badge> : null}
      </Button>
    </NavLink>
  );
};

export default TabButton;

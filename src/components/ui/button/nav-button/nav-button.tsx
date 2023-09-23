import { Badge } from "@components/ui/badge/badge";
import { FC, ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import Button, { Icon } from "../button";

interface IProps extends NavLinkProps {
  badge?: number;
  icon: Icon;
}

const NavButton: FC<IProps> = ({ children, icon, className, badge, ...props }) => {
  return (
    <NavLink className={className} {...props}>
      <Button
        className="w-full justify-start gap-[10px]"
        icon={icon}
        iconPos="left"
        variant="text"
      >
        {children as ReactNode}
        {badge! > 0 && <Badge>{badge}</Badge>}
      </Button>
    </NavLink>
  );
};

export default NavButton;

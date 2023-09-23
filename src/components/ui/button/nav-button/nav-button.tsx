import { Badge } from "@components/ui/badge/badge";
import { FC, ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import Button, { Icon } from "../button";

interface IProps extends NavLinkProps {
  badge?: number;
  icon: Icon;
  linkClassName?: string;
  className?: string;
}

const NavButton: FC<IProps> = ({
  children,
  icon,
  className,
  linkClassName,
  badge,
  ...props
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${linkClassName} clicked` : linkClassName
      }
      {...props}
    >
      <Button className={className} icon={icon} iconPos="left" variant="text">
        {children as ReactNode}
        {badge! > 0 && <Badge>{badge}</Badge>}
      </Button>
    </NavLink>
  );
};

export default NavButton;

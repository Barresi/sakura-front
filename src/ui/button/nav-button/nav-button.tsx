import { FC } from "react";
import Button from "../button";
import { ButtonProps } from "../button";
import { Badge } from "@ui/badge/badge";

interface IProps extends ButtonProps {
  icon?: string | JSX.Element;
  badge?: number;
}

const NavButton: FC<IProps> = ({ children, icon, badge, ...props }) => {
  return (
    <Button {...props}>
      {typeof icon == "string" ? <img src={icon} alt="" /> : icon}
      {children}
      {badge! > 0 && <Badge>{badge}</Badge>}
    </Button>
  );
};

export default NavButton;

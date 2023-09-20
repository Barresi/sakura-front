import { FC } from "react";
import Button from "../button";
import { ButtonProps } from "../button";
import { Badge } from "@ui/badge/badge";

interface IProps extends ButtonProps {
  badge?: number;
}

const NavButton: FC<IProps> = ({ children, badge, ...props }) => {
  return (
    <Button {...props}>
      {children}
      {badge! > 0 && <Badge>{badge}</Badge>}
    </Button>
  );
};

export default NavButton;

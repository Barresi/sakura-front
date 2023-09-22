import { FC, ReactNode } from "react";
import { buttonVariants } from "../button";
import { Badge } from "@ui/badge/badge";
import { NavLink, NavLinkProps } from "react-router-dom";
import { cn } from "@src/utils/utils";
import { VariantProps } from "class-variance-authority";

import user from "@assets/menu/user.svg";
import news from "@assets/menu/news.svg";
import friends from "@assets/menu/friends.svg";
import message from "@assets/menu/message.svg";
import photos from "@assets/menu/photos.svg";
import { renderIcon } from "@src/utils/renders";

const navIcons = {
  user,
  news,
  friends,
  message,
  photos,
};

type NavIcon = keyof typeof navIcons;

interface IProps extends NavLinkProps, VariantProps<typeof buttonVariants> {
  badge?: number;
  icon?: NavIcon;
  iconPos?: "left" | "right";
}

const NavButton: FC<IProps> = ({
  children,
  variant,
  size,
  className,
  iconPos,
  icon,
  badge,
  ...props
}) => {
  return (
    <NavLink className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {iconPos === "left" && renderIcon<NavIcon, typeof navIcons>(icon, navIcons)}
      {children as ReactNode}
      {badge! > 0 && <Badge>{badge}</Badge>}
      {iconPos === "right" && renderIcon<NavIcon, typeof navIcons>(icon, navIcons)}
    </NavLink>
  );
};

export default NavButton;

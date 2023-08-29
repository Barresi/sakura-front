import { FC } from "react";
import clsx from "clsx";
import { IButtonProps } from "@src/types/interfaces";

import edit from "@assets/ui/Edit.svg";

import "./button.css";

interface IProps extends IButtonProps {}

const Button: FC<IProps> = ({
  children,
  className,
  theme = "light",
  variant = "primary",
  arrow,
  customArrow,
  ...props
}) => {
  const baseClass =
    "px-[15px] py-[10px] rounded-[10px] font-medium transition-all active:scale-[.95]";

  const isCustom = customArrow ? (
    <img src={customArrow} alt="" />
  ) : (
    <img src={edit} alt="" />
  );

  return (
    <button
      className={clsx(
        baseClass,
        `button-${variant}-${theme}`,
        arrow && "button-with-arrow",
        className,
      )}
      {...props}
    >
      {children}
      {arrow && isCustom}
    </button>
  );
};

export default Button;

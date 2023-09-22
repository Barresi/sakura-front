import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils/utils";

import {
  edit,
  setting,
  notification,
  theme,
  darkTheme,
  exit,
  info,
} from "@src/assets/icons/icons";

import like from "@assets/ui/Like.svg";
import likeActive from "@assets/ui/Like Active.svg";
import likeActiveDark from "@assets/ui/Like Active Dark.svg";
import comment from "@assets/ui/Comment.svg";
import share from "@assets/ui/Share.svg";
import { renderIcon } from "@src/utils/renders";

const icons = {
  edit,
  setting,
  notification,
  theme,
  darkTheme,
  info,
  exit,
  like,
  likeActive,
  likeActiveDark,
  comment,
  share,
};

export const buttonVariants = cva(
  "w-full inline-flex items-center justify-center gap-[5px] rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 transition-all active:scale-[0.95]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary:
          "bg-secondary text-secondary-foreground border border-secondary-border hover:border-secondary-borderHover hover:bg-secondary-hover",
        outline:
          "text-outline-border border border-outline-border bg-background hover:border-outline-hover hover:text-outline-hover",
        link: "text-link-foreground underline-offset-4 hover:text-link-hover",
        text: "text-text-foreground hover:bg-text",
      },
      size: {
        default: "h-10 px-[0.95rem] py-[0.625rem]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type Icon = keyof typeof icons;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: Icon;
  iconPos?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      iconPos = "right",
      asChild = false,
      children,
      icon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconPos === "left" && renderIcon<Icon, typeof icons>(icon, icons)}
        {children}
        {iconPos === "right" && renderIcon<Icon, typeof icons>(icon, icons)}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;

import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "w-[25px] h-[25px] flex items-center justify-center text-center text-[12px] font-bold leading-[16px] rounded-full border",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const buttonVariants = cva(
  "w-full inline-flex items-center justify-center gap-[5px] rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 transition-all active:scale-[0.95]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover border-none",
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

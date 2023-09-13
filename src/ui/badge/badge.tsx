import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@utils/utils";

const badgeVariants = cva(
  "w-[25px] h-[25px] flex items-center justify-center text-center text-[12px] font-bold leading-[16px] pt-[3px] rounded-full border",
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

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
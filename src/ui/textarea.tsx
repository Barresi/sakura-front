import * as React from "react";

import { cn } from "@utils/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    const baseClass =
      "flex min-h-[100px] outline-none bg-input-background text-input-foreground w-full rounded-md border border-input p-5 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:border-input-hoverBorder";
    return (
      <textarea
        className={cn(
          baseClass,
          error
            ? "border-input-errorBorder focus:border-input-errorBorder"
            : "border-input focus:border-input-hoverBorder",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };

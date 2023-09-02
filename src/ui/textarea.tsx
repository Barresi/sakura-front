import * as React from "react";

import { cn } from "@utils/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    const baseClass =
      "flex min-h-[100px] outline-none bg-input-background text-input-foreground w-full rounded-md border border-input p-5 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:border-input-hoverBorder";
    const errorClass = error
      ? "border-input-errorBorder focus:border-input-errorBorder"
      : "border-input focus:border-input-hoverBorder";
    const errorDivClass = error
      ? `relative pb-6 after:content-["${error}"] after:absolute after:top-[90%] after:left-5 after:text-input-errorBorder`
      : "";
    return (
      <div className={errorDivClass}>
        <textarea className={cn(baseClass, errorClass, className)} ref={ref} {...props} />
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };

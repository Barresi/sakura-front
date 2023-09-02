import * as React from "react";

import { cn } from "@utils/utils";

import eye from "@assets/ui/Eye.svg";
import eyeOff from "@assets/ui/Eye Off.svg";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    const [inputType, setType] = React.useState(type);

    const toggleType = () => setType((type) => (type === "text" ? "password" : "text"));

    const baseClass =
      "flex w-full outline-none rounded-md bg-input-background text-input-foreground border px-5 py-4 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50";
    const errorClass = error
      ? "border-input-errorBorder focus:border-input-errorBorder"
      : "border-input focus:border-input-hoverBorder";
    const errorDivClass = error
      ? `relative pb-6 after:content-["${error}"] after:absolute after:top-[3.75rem] after:left-5 after:text-input-errorBorder`
      : "";
    const errorImgClass = error ? "top-[35%]" : "top-[50%]";

    const input = (
      <div className={errorDivClass}>
        <input
          type={inputType}
          className={cn(baseClass, errorClass, className)}
          ref={ref}
          {...props}
        />
      </div>
    );

    if (type === "password") {
      return (
        <div className="relative">
          {input}
          <img
            className={`cursor-pointer absolute ${errorImgClass} translate-y-[-50%] right-[20px] transition-all hover:scale-[1.1] active:scale-[0.9]`}
            onClick={toggleType}
            src={inputType === "text" ? eye : eyeOff}
            alt=""
          />
        </div>
      );
    }

    return input;
  },
);
Input.displayName = "Input";

export { Input };

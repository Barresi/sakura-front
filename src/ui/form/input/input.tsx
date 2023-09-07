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
    const errorSpanClass = error
      ? `absolute top-[3.75rem] left-5 text-input-errorBorder`
      : "";

    const input = (
      <div className="relative pb-6">
        <input
          type={inputType}
          className={cn(baseClass, errorClass, className)}
          ref={ref}
          {...props}
        />

        {error && <span className={errorSpanClass}>{error}</span>}
      </div>
    );

    if (type === "password") {
      return (
        <div className="relative">
          {input}
          <img
            className={`cursor-pointer absolute top-[35%] translate-y-[-50%] right-[20px] transition-all hover:scale-[1.1] active:scale-[0.9]`}
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

export default Input;

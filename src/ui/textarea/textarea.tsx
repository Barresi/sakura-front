import { FC } from "react";
import clsx from "clsx";
import { ITextareaProps } from "@src/types/interfaces";

interface IProps extends ITextareaProps {}

const Textarea: FC<IProps> = ({ theme = "light", className, error, ...props }) => {
  const baseClass = "p-[1rem] border outline-none rounded-[5px]";

  const lightClass =
    "input-bg-light input-border-light input-text-light focus:input-border-focus";
  const darkClass =
    "input-bg-dark input-border-dark input-text-dark focus:input-border-focus";
  const errorClass = `input-bg-${theme} input-border-error input-text-${theme} focus:input-border-error`;

  return (
    <textarea
      className={clsx(
        baseClass,
        error ? errorClass : theme === "light" ? lightClass : darkClass,
        className,
      )}
      {...props}
    ></textarea>
  );
};

export default Textarea;

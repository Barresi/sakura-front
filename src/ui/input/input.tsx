import { FC, HTMLInputTypeAttribute, useState } from "react";
import clsx from "clsx";
import { IInputProps } from "@src/types/interfaces";

import eye from "@assets/ui/Eye.svg";
import eyeOff from "@assets/ui/Eye Off.svg";

interface IProps extends IInputProps {}

const Input: FC<IProps> = ({
  theme = "light",
  type = "text",
  className,
  error,
  ...props
}) => {
  const [inputType, setType] = useState(type);

  const baseClass = "p-[1rem] border outline-none rounded-[5px]";

  const lightClass =
    "input-bg-light input-border-light input-text-light focus:input-border-focus";
  const darkClass =
    "input-bg-dark input-border-dark input-text-dark focus:input-border-focus";
  const errorClass = `input-bg-${theme} input-border-error input-text-${theme} focus:input-border-error`;

  const renderInput = (type: HTMLInputTypeAttribute) => {
    return (
      <input
        className={clsx(
          baseClass,
          error ? errorClass : theme == "light" ? lightClass : darkClass,
          className,
        )}
        type={type} // this is for changing input type by setType()
        {...props}
      />
    );
  };

  if (type === "password") {
    return (
      <div className="flex items-center relative">
        {renderInput(inputType)}

        {type === "password" && (
          <img
            className="w-[24px] h-[24px] cursor-pointer absolute top-[50%] translate-y-[-50%] right-[20px] transition-all hover:scale-[1.1] active:scale-[0.9]"
            src={inputType === "password" ? eye : eyeOff}
            alt=""
            onClick={() => setType((type) => (type == "password" ? "text" : "password"))}
          />
        )}
      </div>
    );
  }

  return renderInput(type);
};

export default Input;

import { FC } from "react";
import { cn } from "@utils/utils";
import Input, { InputProps } from "../input/input";
import UserAvatar from "@src/components/ui/avatar/avatar";

import smile from "@assets/ui/Smile.svg";

interface IProps extends InputProps {
  avatar?: string;
}

const NewInput: FC<IProps> = ({ avatar, className, ...props }) => {
  const withAvatar = avatar ? "pl-[80px]" : "";

  return (
    <div className="w-full relative flex">
      {avatar && (
        <UserAvatar
          className="absolute top-[10px] z-50 left-[30px] w-[40px] h-[40px]"
          src={avatar}
        />
      )}
      <Input
        className={cn(
          "py-[20px] px-[20px] pr-[60px] rounded-[10px]",
          withAvatar,
          className,
        )}
        placeholder="Что у вас нового?"
        {...props}
      />
      <img
        className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-90%] active:scale-[.95]"
        src={smile}
        alt=""
        onClick={() => {
          alert("Будет реализовано в будущем!");
        }}
      />
    </div>
  );
};

export default NewInput;

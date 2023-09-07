import { FC } from "react";
import Input, { InputProps } from "../input/input";
import { Avatar, AvatarImage } from "@ui/avatar/avatar";

import smile from "@assets/ui/Smile.svg";
import { cn } from "@src/utils/utils";

interface IProps extends InputProps {
  avatar?: string;
}

const NewInput: FC<IProps> = ({ avatar, className, ...props }) => {
  const withAvatar = avatar ? "pl-[80px]" : "";

  return (
    <div className="relative flex">
      {avatar && (
        <Avatar className="absolute top-[10px] z-50 left-[30px] w-[40px] h-[40px]">
          <AvatarImage src={avatar} className="" />
        </Avatar>
      )}
      <Input
        className={cn("py-[20px] px-[20px] rounded-[10px]", withAvatar, className)}
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

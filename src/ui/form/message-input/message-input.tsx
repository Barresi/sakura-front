import { FC } from "react";
import Input, { InputProps } from "../input/input";

import media from "@assets/ui/paperclip.svg";
import smile from "@assets/ui/Smile.svg";
import send from "@assets/ui/send.svg";

interface IProps extends InputProps {}

const MessageInput: FC<IProps> = ({ ...props }) => {
  return (
    <div className="w-full relative">
      <Input placeholder="Написать сообщение..." {...props} />

      <img
        className="cursor-pointer absolute top-[50%] right-[90px] translate-y-[-90%] active:scale-[.95]"
        src={media}
        alt=""
        onClick={() => {
          alert("Будет реализовано в будущем!");
        }}
      />
      <img
        className="cursor-pointer absolute top-[50%] right-[50px] translate-y-[-90%] active:scale-[.95]"
        src={smile}
        alt=""
        onClick={() => {
          alert("Будет реализовано в будущем!");
        }}
      />
      <img
        className="cursor-pointer absolute top-[50%] right-[10px] translate-y-[-90%] active:scale-[.95]"
        src={send}
        alt=""
        onClick={() => {
          alert("Будет реализовано в будущем!");
        }}
      />
    </div>
  );
};

export default MessageInput;

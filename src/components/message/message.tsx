import { FC } from "react";
import UserAvatar from "../ui/avatar/avatar";

interface IMessage {
  text: string;
  my: boolean;
  date: string;
}

const Message: FC<IMessage> = ({ text, my, date }) => {
  return (
    <div
      className={`p-[15px] flex items-center w-[60%] min-w-[250px] gap-[10px] ${
        my ? " self-end  flex-row-reverse" : " self-start"
      }`}
    >
      <div className="flex flex-col items-center gap-2 self-start">
        <UserAvatar />
        <span>{date}</span>
      </div>
      <div
        className={`p-[15px] rounded-[5px] self-start ${
          my ? " bg-blockMessage-my " : " bg-blockMessage-other"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;

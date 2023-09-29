import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar/avatar";

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
      <div className=" self-start">
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>avatar</AvatarFallback>
        </Avatar>
        <div>{date}</div>
      </div>
      <div
        className={`p-[15px] rounded-[5px] ${
          my ? " bg-blockMessage-my " : " bg-blockMessage-other"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;

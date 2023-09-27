import MessageInput from "@src/components/ui/form/message-input/message-input";
import Message from "@src/components/message/message";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar/avatar";
import { FC } from "react";
import arrow from "@assets/ui/arrow.svg";
import { Link } from "react-router-dom";

const mockMessages = [
  {
    my: false,
    text: "Добрый день! Я ознакомился с ТЗ, я согласен учавствовать в вашей кампании.",
    date: "9:30",
  },
  {
    my: true,

    text: "Добрый день, отлично, когда можете приступить?",
    date: "9:35",
  },
  {
    my: false,
    text: "Добрый день! Я ознакомился с ТЗ, я согласен учавствовать в вашей кампании.",
    date: "9:30",
  },
  {
    my: true,

    text: "Добрый день, отлично, когда можете приступить?",
    date: "9:35",
  },
  {
    my: false,
    text: "Добрый день! Я ознакомился с ТЗ, я согласен учавствовать в вашей кампании.",
    date: "9:30",
  },
  {
    my: true,

    text: "Добрый день, отлично, когда можете приступить?",
    date: "9:35",
  },
  {
    my: false,
    text: "Добрый день! Я ознакомился с ТЗ, я согласен учавствовать в вашей кампании.",
    date: "9:30",
  },
  {
    my: true,

    text: "Добрый день, отлично, когда можете приступить?",
    date: "9:35",
  },
];

const Chat: FC = () => {
  return (
    <div className="flex flex-col flex-auto w-[65%] relative h-[100%] bg-background">
      <div className=" absolute left-0 right-0 top-0 h-[80px] border-b border-border px-[20px] lg:px-[30px] py-[20px] flex justify-between items-center z-100 bg-background">
        <p className=" text-foreground text-[20px] flex gap-[10px]">
          <Link
            to="/main/messenger"
            className="flex justify-center items-center px-[10px]"
          >
            <img src={arrow} alt="arrow" className="w-[20px] h-[20px]" />
          </Link>
          <div className="flex flex-col md:flex-row md:gap-[10px]">
            <span className="font-bold text-base sm:text-xl">Андрей Петров</span>
            <span className="text-[#55677D] font-normal text-base sm:text-xl">
              был в сети час назад
            </span>
          </div>
        </p>
        <div className=" flex items-center">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="h-[100%] mt-[80px] flex flex-col overflow-auto mb-[77px] scrollbar-none">
        {mockMessages.map((item) => (
          <Message text={item.text} date={item.date} my={item.my} />
        ))}
      </div>
      <div className="absolute bottom-0 right-5 left-5">
        <MessageInput />
      </div>
    </div>
  );
};

export default Chat;

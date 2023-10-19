import MessageInput from "@src/components/ui/form/message-input/message-input";
import Message from "@src/components/message/message";
import UserAvatar from "@src/components/ui/avatar/avatar";
import { FC, useEffect, useState } from "react";
import arrow from "@assets/ui/arrow.svg";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "@src/hooks/store-hooks";
import { selectUser } from "@src/store/reducers/profileInfo/selectors";
import { useSocket } from "@src/context/socket-context";
import { IMessage } from "@src/types/messenger";

const JOIN_CHAT_EVENT = "joinChat";
const LEAVE_CHAT_EVENT = "leaveChat";
const SEND_MESSAGE_EVENT = "sendMessage";
const GET_MESSAGES_EVENT = "getMessages";

const Chat: FC = () => {
  const chatId = useParams();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { id } = useAppSelector(selectUser);
  const { socket } = useSocket();

  const sendMessage = (message: string) => {
    if (!socket) return;
    socket.emit(SEND_MESSAGE_EVENT, {
      id,
      message,
      chatId: chatId.id,
      socketId: socket.id,
    });
  };
  const getMessage = (messages: IMessage[]) => {
    setMessages(messages);
  };

  useEffect(() => {
    if (!socket) return;
    socket.emit(JOIN_CHAT_EVENT, chatId.id);
    return () => {
      socket.emit(LEAVE_CHAT_EVENT, chatId.id);
    };
  }, [chatId, socket]);

  useEffect(() => {
    if (!socket) return;
    socket.on(GET_MESSAGES_EVENT, getMessage);
    return () => {
      socket.off(GET_MESSAGES_EVENT, getMessage);
    };
  }, [socket]);

  return (
    <div className="flex flex-col flex-auto w-[65%] relative h-[100%] bg-background rounded-[10px] 3xl:rounded-r-[10px] 3xl:rounded-l-[0px]">
      <div className=" absolute left-0 right-0 top-0 h-[80px] border-b border-message-border px-[20px] lg:px-[30px] py-[20px] flex justify-between items-center z-10 bg-background rounded-t-[10px]">
        <div className=" text-foreground text-[20px] flex gap-[10px]">
          <Link
            to="/main/messenger"
            className="flex justify-center items-center px-[10px]"
          >
            <img src={arrow} alt="arrow" className="w-[20px] h-[20px]" />
          </Link>
          <div className="flex flex-col md:flex-row md:gap-[10px]">
            <span className="font-bold text-xl">Андрей Петров</span>
          </div>
        </div>

        <UserAvatar />
      </div>
      <div className="h-[100%] mt-[80px] flex flex-col overflow-auto mb-[77px] scrollbar-none">
        {messages.map((item, ind) => (
          <Message text={item.text} date={item.date} my={item.userId === id} key={ind} />
        ))}
      </div>
      <div className="absolute bottom-0 right-5 left-5">
        <MessageInput sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;

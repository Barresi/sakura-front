import MessageInput from "@src/components/ui/form/message-input/message-input";
import Message from "@src/components/message/message";
import UserAvatar from "@src/components/ui/avatar/avatar";
import { FC, useEffect, useState } from "react";
import arrow from "@assets/ui/arrow.svg";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "@src/hooks/store-hooks";
import { io } from "socket.io-client";
import { selectUser } from "@src/store/reducers/profileInfo/selectors";

const useSocket = () => {
  const chatId = useParams();
  const { id } = useAppSelector(selectUser);
  const friendId = +id === 1 ? 2 : 1;
  const socket = io("http://localhost:5000", {
    query: {
      userId: id,
      friend: friendId,
      chatId: chatId.id,
    },
  });
  return socket;
};

const Chat: FC = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<any[]>([]);
  const socket = useSocket();
  const { id } = useAppSelector(selectUser);
  const sendChat = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("chat", { id, message });
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });
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
        {chat.map((item, ind) => (
          <Message text={item.message} date={item.date} my={item.id === id} key={ind} />
        ))}
      </div>
      <div className="absolute bottom-0 right-5 left-5">
        <MessageInput
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          sendMessage={sendChat}
        />
      </div>
    </div>
  );
};

export default Chat;

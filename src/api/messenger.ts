import axios from "axios";
import { errorHandler, fetchWithRefresh } from "./api";
import { getCookie } from "@src/utils/cookie";

const historyChatRequest = async (chatId: string) => {
  const res = await axios
    .get("/auth/chat", {
      headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
      params: {
        chatId,
      },
    })
    .catch(errorHandler);
  return res.data;
};

export const getHistoryChat = async (chatId: string) => {
  return await fetchWithRefresh(() => historyChatRequest(chatId));
};

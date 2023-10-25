import axios from "axios";
import { errorHandler } from "./api";
import { getCookie } from "@src/utils/cookie";

export const getFriends = async () => {
  const access = getCookie("accessToken");

  const res = await axios
    .get("/friends", { headers: { Authorization: `Bearer ${access}` } })
    .catch(errorHandler);

  return res.data;
};

export const deleteFriend = async (id: number) => {
  const access = getCookie("accessToken");

  const res = await axios
    .delete(`/friends/${id}`, { headers: { Authorization: `Bearer ${access}` } })
    .catch(errorHandler);

  return res.data;
};

import axios from "axios";
import { errorHandler } from "./api";
import { getCookie } from "@src/utils/cookie";

export const getAllUsers = async () => {
  const access = getCookie("accessToken");

  const res = await axios
    .get("/users", { headers: { Authorization: `Bearer ${access}` } })
    .catch(errorHandler);

  return res.data;
};

export const addFriend = async (id: number) => {
  const access = getCookie("accessToken");

  const res = await axios
    .post(`/users/${id}`, { headers: { Authorization: `Bearer ${access}` } })
    .catch(errorHandler);

  return res.data;
};

import axios from "axios";
import { errorHandler } from "./api";
import { getCookie } from "@src/utils/cookie";

export const getReceived = async () => {
  const access = getCookie("accessToken");

  const res = await axios
    .get("/friend-requests/received", { headers: { Authorization: `Bearer ${access}` } })
    .catch(errorHandler);

  return res.data;
};

export const getSended = async () => {
  const access = getCookie("accessToken");

  const res = await axios
    .get("/friend-requests/sent", { headers: { Authorization: `Bearer ${access}` } })
    .catch(errorHandler);

  return res.data;
};

export const acceptRequest = async (id: number) => {
  const access = getCookie("accessToken");

  console.log("DONE! TOKEN => ", access);

  const res = await axios
    .post(
      `/friend-requests/${id}/accept`,
      {},
      {
        headers: { Authorization: `Bearer ${access}` },
      },
    )
    .catch(errorHandler);

  return res.data;
};

export const rejectRequest = async (id: number) => {
  const access = getCookie("accessToken");

  const res = await axios
    .delete(`/friend-requests/${id}/reject`, {
      headers: { Authorization: `Bearer ${access}` },
    })
    .catch(errorHandler);

  return res.data;
};

export const cancelRequest = async (id: number) => {
  const access = getCookie("accessToken");

  const res = await axios
    .delete(`/friend-requests/${id}/cancel`, {
      headers: { Authorization: `Bearer ${access}` },
    })
    .catch(errorHandler);

  return res.data;
};

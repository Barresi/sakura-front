import axios from "axios";
import { errorHandler, fetchWithRefresh } from "./api";
import { ILoginForm, IRegistrationForm } from "@src/types/forms";
import { getCookie } from "@src/utils/cookie";

export const loginRequest = async (form: ILoginForm) => {
  const res = await axios.post("/auth/login", form).catch(errorHandler);
  return res.data;
};
export const registrationRequest = async (form: IRegistrationForm) => {
  const res = await axios.post("/auth/signup", form).catch(errorHandler);
  return res.data;
};
export const logoutRequest = async () => {
  const res = await axios
    .post("auth/logout", { refreshToken: localStorage.getItem("refreshToken") })
    .catch(errorHandler);
  return res.data;
};
const protectedInfoRequest = async () => {
  const res = await axios
    .get("auth/protected", {
      headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
    })
    .catch(errorHandler);
  return res.data;
};
export const getProtectedInfo = async () => {
  return await fetchWithRefresh(protectedInfoRequest);
};

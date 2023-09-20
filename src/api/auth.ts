import axios from "axios";
import { errorHandler } from "./api";
import { ILoginForm, IRegistrationForm } from "@src/types/forms";

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

import axios from "axios";
import { errorHandler } from "./api";
import { ILoginForm, IRegistrationForm } from "@src/types/forms";
import { getCookie, setCookie } from "@src/utils/cookie";

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
export const refreshRequest = async () => {
  const res = await axios
    .post("auth/token", { refreshToken: localStorage.getItem("refreshToken") })
    .catch(errorHandler);
  // deleteCookie('')
  setCookie("accessToken", res.data.accessToken);
  localStorage.setItem("refreshToken", res.data.refreshToken);
};
export const protectedInfoRequest = async () => {
  const res = await axios
    .get("auth/me", {
      headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
    })
    .catch(errorHandler);
  return res.data;
};

// function getProtectedInfo отправляет запрос на получение данных о юзере на сервер
// вместе с access token в заголовке Authorization,
// если запрос падает с ошибкой "Access token устарел ...", то
// обновляется refresh token и повторно отправляется предыдущий запрос
export const getProtectedInfo = async () => {
  try {
    return await protectedInfoRequest();
  } catch (err) {
    if (
      (err as Error).message ===
      "Access token устарел. Пожалуйста, обновите токен или авторизуйтесь заново"
    ) {
      await refreshRequest();
      return await protectedInfoRequest();
    } else {
      throw err;
    }
  }
};

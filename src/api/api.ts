import { setCookie } from "@src/utils/cookie";
import axios, { AxiosError } from "axios";

export const URL = "http://localhost:5000/api/v1";
axios.defaults.baseURL = URL;

export const errorHandler = (err: AxiosError) => {
  if (err.response) {
    // Запрос был сделан, и сервер ответил кодом состояния, который выходит за пределы 2xx
    throw new Error(
      //@ts-ignore не типизирован ответ с сервера, не понимает что такое msg
      err.response.data?.msg ||
        "Похоже у нас проблемы с серверами, попробуйте зайти чуть позже",
    );
  } else if (err.request) {
    // Запрос был сделан, но ответ не получен
    throw new Error(err.request.status);
  } else {
    // Произошло что-то при настройке запроса, вызвавшее ошибку
    throw new Error("Что-то пошло не так, попробуйте перезагрузить страницу");
  }
};

export const refreshRequest = async () => {
  const res = await axios
    .post("auth/token", { refreshToken: localStorage.getItem("refreshToken") })
    .catch(errorHandler);
  setCookie("accessToken", res.data.accessToken);
  localStorage.setItem("refreshToken", res.data.refreshToken);
};

export const fetchWithRefresh = async (func: () => void) => {
  try {
    return await func();
  } catch (err) {
    if (
      (err as Error).message ===
      "Access token устарел. Пожалуйста, обновите токен или авторизуйтесь заново"
    ) {
      await refreshRequest();
      return await func();
    } else {
      throw err;
    }
  }
};

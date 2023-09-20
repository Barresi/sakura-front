import axios from "axios";
import { errorHandler } from "./api";
import { ILoginForm } from "@src/types/forms";

export const loginRequest = async (form: ILoginForm) => {
  const res = await axios.post("/auth/login", form).catch(errorHandler);
  return res.data;
};

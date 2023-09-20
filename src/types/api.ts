import { IUser } from "./types";

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  userWithoutPassword: IUser;
}
export interface IRegistrationResponse {
  id: number;
}

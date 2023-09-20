// User
export interface IUser {
  id: string;
  email: string;
}
export enum AuthStatus {
  pending = "pending",
  authorized = "authorized",
  notAuthorized = "not authorized",
}

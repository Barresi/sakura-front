import { RootState } from "@src/store/store";
import { AuthStatus } from "@src/types/types";
import { IUser } from "@src/types/types";

export const selectUser: (store: RootState) => IUser = (store) => store.profileInfo.user;
export const selectUserStatus: (store: RootState) => AuthStatus = (store) =>
  store.profileInfo.status;
export const selectProfileInfoIsLoading: (store: RootState) => boolean = (store) =>
  store.profileInfo.isLoading;
export const selectProfileInfoError: (store: RootState) => string = (store) =>
  store.profileInfo.error;

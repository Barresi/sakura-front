import { RootState } from "@src/store/store";
import { IUser } from "@src/types/types";

export const selectUsers: (store: RootState) => IUser[] = (store) => store.users.users;
export const selectUsersIsLoading: (store: RootState) => boolean = (store) =>
  store.users.isLoading;
export const selectUsersError: (store: RootState) => string = (store) =>
  store.users.error;

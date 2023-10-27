import { RootState } from "@src/store/store";
import { AuthStatus, IFriendsRequestResponse } from "@src/types/types";
import { IUser } from "@src/types/types";

export const selectUser: (store: RootState) => IUser = (store) => store.profileInfo.user;

export const selectUserStatus: (store: RootState) => AuthStatus = (store) =>
  store.profileInfo.status;

export const selectProfileInfoIsLoading: (store: RootState) => boolean = (store) =>
  store.profileInfo.isLoading;

export const selectProfileInfoError: (store: RootState) => string = (store) =>
  store.profileInfo.error;

export const selectProfileInfoFriends: (store: RootState) => IFriendsRequestResponse[] = (
  state,
) => state.profileInfo.user.friends;

export const selectProfileInfoReceived: (
  store: RootState,
) => IFriendsRequestResponse[] = (state) => state.profileInfo.user.received;

export const selectProfileInfoSended: (store: RootState) => IFriendsRequestResponse[] = (
  state,
) => state.profileInfo.user.friended;

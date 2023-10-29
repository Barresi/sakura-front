import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { deleteFriend } from "@src/api/friends";
import { acceptRequest, rejectRequest, cancelRequest } from "@src/api/requests";
import { addFriend } from "@src/api/users";
import {
  getSendedThunk,
  getFriendsThunk,
  getReceivedThunk,
} from "@src/store/reducers/friends/async-thunks";
import { RootState } from "@src/store/store";
import { IFriendsRequestResponse, IUser } from "@src/types/types";
import { type ClassValue, clsx } from "clsx";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useWindowSize(maxWidth: string | number) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event) => {
      setWidth((event.target as Window).innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width < Number(maxWidth);
}

export const filterFriendsData = (item: IUser, search: string) => {
  return (
    item?.username?.toLowerCase().includes(search.toLowerCase()) ||
    item?.firstName?.toLowerCase().includes(search.toLowerCase()) ||
    item?.lastName?.toLowerCase().includes(search.toLowerCase())
  );
};

// handlers for buttons
export const addFriendHandler = async (
  id: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
  await addFriend(id);

  dispatch(getSendedThunk());
};
export const deleteFriendHandler = async (
  id: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
  await deleteFriend(id);

  dispatch(getFriendsThunk());
};

export const acceptRequestHandler = async (
  id: number,
  received: IFriendsRequestResponse[],
  currentId: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
  await acceptRequest(
    received.filter((item) => item.fromId === id && item.toId === currentId)[0]?.id,
  );

  dispatch(getFriendsThunk());
  dispatch(getReceivedThunk());
};
export const rejectRequestHandler = async (
  id: number,
  received: IFriendsRequestResponse[],
  currentId: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
  await rejectRequest(
    received.filter((item) => item.fromId === id && item.toId === currentId)[0]?.id,
  );

  dispatch(getReceivedThunk());
};
export const cancelRequestHandler = async (
  id: number,
  sended: IFriendsRequestResponse[],
  currentId: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) => {
  await cancelRequest(
    sended.filter((item) => item.fromId === currentId && item.toId === id)[0]?.id,
  );

  dispatch(getSendedThunk());
};

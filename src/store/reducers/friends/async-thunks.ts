import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFriends } from "@src/api/friends/friends";
import { getReceived, getSended } from "@src/api/friends/requests";
import { getAllUsers } from "@src/api/friends/users";
import { IFriendsRequestResponse, IUser } from "@src/types/types";

export const getAllUsersThunk = createAsyncThunk<IUser[]>(
  "users/getAll",
  async (_, { rejectWithValue }) => {
    try {
      return getAllUsers();
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue("Упс, что-то пошло не так");
      }
    }
  },
);

export const getFriendsThunk = createAsyncThunk<IFriendsRequestResponse[]>(
  "profileInfo/getFriends",
  async (_, { rejectWithValue }) => {
    try {
      return await getFriends();
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue("Упс, что-то пошло не так");
      }
    }
  },
);

export const getReceivedThunk = createAsyncThunk<IFriendsRequestResponse[]>(
  "profileInfo/getReceived",
  async (_, { rejectWithValue }) => {
    try {
      return await getReceived();
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue("Упс, что-то пошло не так");
      }
    }
  },
);

export const getSendedThunk = createAsyncThunk<IFriendsRequestResponse[]>(
  "profileInfo/getSended",
  async (_, { rejectWithValue }) => {
    try {
      return await getSended();
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue("Упс, что-то пошло не так");
      }
    }
  },
);

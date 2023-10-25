import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFriend, getAllUsers } from "@src/api/users";
import { ISendRequestResponse, IUser } from "@src/types/types";

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

// export const addFriendThunk = createAsyncThunk<ISendRequestResponse, number>(
//   "users/addFriend",
//   async (id, { rejectWithValue }) => {
//     try {
//       return addFriend(id);
//     } catch (err) {
//       if (err instanceof Error) {
//         return rejectWithValue(err.message);
//       } else {
//         return rejectWithValue("Упс, что-то пошло не так");
//       }
//     }
//   },
// );

import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersThunk } from "./async-thunks";
import { IUser } from "@src/types/types";

interface IInitialState {
  isLoading: boolean;
  error: string;
  users: IUser[];
}

const initialState: IInitialState = {
  isLoading: false,
  error: "",
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all users
    builder.addCase(getAllUsersThunk.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getAllUsersThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUsersThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default usersSlice.reducer;

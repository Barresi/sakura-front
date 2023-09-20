import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./async-thunks";
import { setCookie } from "@src/utils/cookie";
import { AuthStatus, IUser } from "@src/types/types";

interface IInitialState {
  isLoading: boolean;
  error: string;
  status: AuthStatus;
  user: IUser;
}

const initialState: IInitialState = {
  isLoading: false,
  error: "",
  status: AuthStatus.notAuthorized,
  user: {
    email: "",
    id: "",
  },
};

const profileInfoSlice = createSlice({
  name: "profileInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Authorization
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true;
      state.error = "";
      state.status = AuthStatus.pending;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = AuthStatus.authorized;
      state.user = action.payload.userWithoutPassword;

      setCookie("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
      state.status = AuthStatus.notAuthorized;
    });
  },
});

export default profileInfoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { AuthStatus } from "@src/types/types";
import { deleteCookie, getCookie, setCookie } from "@src/utils/cookie";

interface IInitialState {
  status: AuthStatus;
}

const initialState: IInitialState = {
  status: getCookie("accessToken") ? AuthStatus.authorized : AuthStatus.notAuthorized,
};

const profileInfoSlice = createSlice({
  name: "profileInfo",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = AuthStatus.authorized;

      setCookie("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    logout: (state) => {
      state.status = AuthStatus.notAuthorized;

      deleteCookie("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { login, logout } = profileInfoSlice.actions;

export default profileInfoSlice.reducer;

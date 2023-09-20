import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "@src/api/auth";
import { ILoginResponse } from "@src/types/api";
import { ILoginForm } from "@src/types/forms";

export const loginThunk = createAsyncThunk<ILoginResponse, ILoginForm>(
  "profileInfo/login",
  async (form, { rejectWithValue }) => {
    try {
      return await loginRequest(form);
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      } else {
        return rejectWithValue("Упс, что-то пошло не так");
      }
    }
  },
);

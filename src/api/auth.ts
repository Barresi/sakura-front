import { URL } from "./api";
import { ILoginForm, IRegistrationForm } from "@src/types/forms";
import { getCookie, setCookie } from "@src/utils/cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { login, logout } from "@src/store/reducers/profileInfo/reducer";
import { ILoginResponse, IUser } from "@src/types/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginForm>({
      query: (form) => ({
        url: "/auth/login",
        body: form,
        method: "POST",
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const {
          data: { accessToken, refreshToken },
        } = await queryFulfilled;

        dispatch(login({ accessToken, refreshToken }));
      },
    }),

    registration: builder.mutation<void, IRegistrationForm>({
      query: (form) => ({
        url: "/auth/signup",
        body: form,
        method: "POST",
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        body: { refreshToken: localStorage.getItem("refreshToken") },
        method: "POST",
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;

        dispatch(logout());
      },
    }),

    refresh: builder.mutation<any, void>({
      query: () => ({
        url: "/auth/token",
        method: "POST",
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;

        setCookie("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      },
    }),

    protected: builder.query<IUser, void>({
      query: () => ({
        url: "/auth/protected",
        headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          if (
            (err as Error).message ===
            "Access token устарел. Пожалуйста, обновите токен или авторизуйтесь заново"
          ) {
            await dispatch(authApi.endpoints.refresh.initiate(_));
            await dispatch(authApi.endpoints.protected.initiate(_));
          } else {
            throw err;
          }
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useLogoutMutation,
  useRefreshMutation,
  useProtectedQuery,
} = authApi;

// export const loginRequest = async (form: ILoginForm) => {
//   const res = await axios.post("/auth/login", form).catch(errorHandler);
//   return res.data;
// };
// export const registrationRequest = async (form: IRegistrationForm) => {
//   const res = await axios.post("/auth/signup", form).catch(errorHandler);
//   return res.data;
// };
// export const logoutRequest = async () => {
//   const res = await axios
//     .post("auth/logout", { refreshToken: localStorage.getItem("refreshToken") })
//     .catch(errorHandler);
//   return res.data;
// };
// export const refreshRequest = async () => {
//   const res = await axios
//     .post("auth/token", { refreshToken: localStorage.getItem("refreshToken") })
//     .catch(errorHandler);
//   setCookie("accessToken", res.data.accessToken);
//   localStorage.setItem("refreshToken", res.data.refreshToken);
// };
// export const protectedInfoRequest = async () => {
//   const res = await axios
//     .get("auth/protected", {
//       headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
//     })
//     .catch(errorHandler);
//   return res.data;
// };

// // function getProtectedInfo отправляет запрос на получение данных о юзере на сервер
// // вместе с access token в заголовке Authorization,
// // если запрос падает с ошибкой "Access token устарел ...", то
// // обновляется refresh token и повторно отправляется предыдущий запрос
// export const getProtectedInfo = async () => {
//   try {
//     return await protectedInfoRequest();
//   } catch (err) {
//     if (
//       (err as Error).message ===
//       "Access token устарел. Пожалуйста, обновите токен или авторизуйтесь заново"
//     ) {
//       await refreshRequest();
//       return await protectedInfoRequest();
//     } else {
//       throw err;
//     }
//   }
// };

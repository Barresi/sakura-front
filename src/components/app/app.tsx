import LoginPage from "@src/pages/login/login";
import RegistrationPage from "@src/pages/registration/registration";
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import MainPage from "@src/pages/main/main";
import NotFoundPage from "@src/pages/not-found-page/not-found-page";
import FriendsPage from "@src/pages/friends/friends";
import FriendsTabContent from "../tab/tab-content/tab-content";
import { useProtectedQuery } from "@src/api/auth";
import { useAppSelector } from "@src/hooks/store-hooks";
import { selectUserStatus } from "@src/store/reducers/profileInfo/selectors";
import { AuthStatus } from "@src/types/types";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const App: FC = () => {
  const userStatus = useAppSelector(selectUserStatus);

  // делаем запрос только когда пользователь авторизован
  useProtectedQuery(userStatus === AuthStatus.authorized ? undefined : skipToken);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRouteElement protectedPageType="auth" element={<LoginPage />} />
        }
      />
      <Route
        path="/registration"
        element={
          <ProtectedRouteElement
            protectedPageType="auth"
            element={<RegistrationPage />}
          />
        }
      />

      <Route
        path="/main"
        element={
          <ProtectedRouteElement protectedPageType="main" element={<MainPage />} />
        }
      >
        <Route path="friends" element={<FriendsPage />}>
          <Route index element={<FriendsTabContent type="friends" />} />
          <Route path="all" element={<FriendsTabContent type="all" />} />
          <Route path="requests" element={<FriendsTabContent type="requests" />} />
          <Route path="sended" element={<FriendsTabContent type="sended" />} />
        </Route>
        <Route path="*" element={<NotFoundPage type="inside" />} />
      </Route>

      <Route path="*" element={<NotFoundPage type="outside" />} />
    </Routes>
  );
};

export default App;

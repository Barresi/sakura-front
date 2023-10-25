import LoginPage from "@src/pages/login/login";
import RegistrationPage from "@src/pages/registration/registration";
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import MainPage from "@src/pages/main/main";
import NotFoundPage from "@src/pages/not-found-page/not-found-page";
import FriendsPage from "@src/pages/friends/friends";
import { useAppDispatch } from "@src/hooks/store-hooks";
import { protectedInfoThunk } from "@src/store/reducers/profileInfo/async-thunks";
import FriendsTabContent from "../tab/tab-content/tab-content";

const App: FC = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(protectedInfoThunk());
  // }, [dispatch]);

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

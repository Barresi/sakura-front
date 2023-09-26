import LoginPage from "@src/pages/login/login";
import RegistrationPage from "@src/pages/registration/registration";
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import MainPage from "@src/pages/main/main";
import { useAppDispatch } from "@src/hooks/store-hooks";
import { protectedInfoThunk } from "@src/store/reducers/profileInfo/async-thunks";
import NotFoundPage from "@src/pages/not-found-page/not-found-page";
import MessengerPage from "@src/pages/messenger/messenger";

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(protectedInfoThunk());
  }, [dispatch]);
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
        <Route path="messenger" element={<MessengerPage />} />
        <Route path="*" element={<NotFoundPage type="inside" />} />
      </Route>

      <Route path="*" element={<NotFoundPage type="outside" />} />
    </Routes>
  );
};

export default App;

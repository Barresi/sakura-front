import LoginPage from "@src/pages/login/login";
import RegistrationPage from "@src/pages/registration/registration";
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import MainPage from "@src/pages/main/main";
import { useAppDispatch } from "@src/hooks/store-hooks";
import { protectedInfoThunk } from "@src/store/reducers/profileInfo/async-thunks";

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
      ></Route>
    </Routes>
  );
};

export default App;

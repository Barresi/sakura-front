import LoginPage from "@src/pages/login/login";
import RegistrationPage from "@src/pages/registration/registration";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";

const App: FC = () => {
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

      <Route path="/main"></Route>
    </Routes>
  );
};

export default App;

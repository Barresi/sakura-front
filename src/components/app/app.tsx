import LoginPage from "@src/pages/login/login";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registration" />

      <Route path="/main"></Route>
    </Routes>
  );
};

export default App;

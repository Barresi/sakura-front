import LoginPage from "@src/pages/login/login";
import RegistrationPage from "@src/pages/registration/registration";
import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import MainPage from "@src/pages/main/main";
import NotFoundPage from "@src/pages/not-found-page/not-found-page";
import FriendsPage from "@src/pages/friends/friends";
import { useAppDispatch, useAppSelector } from "@src/hooks/store-hooks";
import { protectedInfoThunk } from "@src/store/reducers/profileInfo/async-thunks";
import FriendsTabContent from "../friends/tab-content/tab-content";
import { getReceivedThunk } from "@src/store/reducers/friends/async-thunks";
import { selectUserStatus } from "@src/store/reducers/profileInfo/selectors";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectUserStatus);
  const [refresh, setRefresh] = useState(false);

  // зачем код ниже: у нас рендерится App, мы делаем запросы во втором useEffect.
  // У нас подгружается инфа, ставится badge, если есть. Потом, если выйти из аккаунта и зайти в другой,
  // то тогда данные и badge у нового пользователя будут такими же, какие были у прежнего.
  // refresh нужен только для понимания, что произошел выход и вход. Если засунуть его во второй useEffect
  // то будет куча запросов и сайт начнет лагать.
  useEffect(() => {
    setRefresh((state) => !state);
  }, [status]);

  useEffect(() => {
    dispatch(protectedInfoThunk());
    dispatch(getReceivedThunk());
  }, [dispatch, refresh]);

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

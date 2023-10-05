import { useAppSelector } from "@src/hooks/store-hooks";
import { selectUserStatus } from "@src/store/reducers/profileInfo/selectors";
import { AuthStatus } from "@src/types/types";
import { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProtectedRouteElement {
  element: ReactElement;
  protectedPageType: "auth" | "main";
}

const ProtectedRouteElement: FC<IProtectedRouteElement> = ({
  element,
  protectedPageType,
}) => {
  const navigate = useNavigate();
  const userStatus = useAppSelector(selectUserStatus);

  useEffect(() => {
    switch (protectedPageType) {
      case "auth":
        if (userStatus === AuthStatus.authorized) navigate("/main/profile");
        break;
      case "main":
        if (userStatus === AuthStatus.notAuthorized) navigate("/");
        break;
    }
  }, [userStatus, navigate, protectedPageType]);

  return element;
};

export default ProtectedRouteElement;

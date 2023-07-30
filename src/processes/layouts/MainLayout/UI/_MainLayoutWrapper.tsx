import React from "react";
import { useNavigate } from "react-router-dom";

import UI from "@/shared/UI";
import { publicRoutePaths } from "@/shared/config/routes";
import { AuthService, useAuthStore } from "@/entities/auth";
import { LS_ACCESS_TOKEN_NAME } from "@/shared/config/http";
import { UserService } from "@/entities/user";

interface IMainLayoutWrapperProps {
  children: React.ReactNode;
}

export const MainLayoutWrapper: React.FC<IMainLayoutWrapperProps> = ({
  children,
}) => {
  const [inited, setInited] = React.useState(false);
  const { setIsAuth, logout } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const navigateOnLogout = React.useCallback(() => {
    logout();
    navigate(publicRoutePaths.auth, { replace: true });
    setInited(true);
  }, [logout, navigate]);

  React.useEffect(() => {
    AuthService.checkIsAuth()
      .then((data) => {
        if (!data.accessToken) {
          navigateOnLogout();
        }
        localStorage.setItem(LS_ACCESS_TOKEN_NAME, data.accessToken);
        setIsAuth(true);
        UserService.getUserData(data.id);
        setInited(true);
      })
      .catch(() => {
        navigateOnLogout();
      });
  }, [navigateOnLogout, setIsAuth]);

  if (!inited) {
    return <UI.LoaderPage />;
  }

  return <>{children}</>;
};

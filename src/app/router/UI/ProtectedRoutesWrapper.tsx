import { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";

import { useAuthStore } from "@/entities/auth";
import { publicRoutePaths } from "@/shared/config/routes";

interface IProtectedRoutesWrapper {
  children: React.ReactNode;
}
export const ProtectedRoutesWrapper: FC<IProtectedRoutesWrapper> = ({
  children,
}) => {
  const { isAuth } = useAuthStore((store) => store);
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={publicRoutePaths.auth} state={{ from: location }} replace />
    );
  }

  return children;
};

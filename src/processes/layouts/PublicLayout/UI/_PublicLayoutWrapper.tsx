import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "@/entities/auth";
import { authRoutePaths } from "@/shared/config/routes";

interface IPublicLayoutWrapperProps {
  children: React.ReactNode;
}

export const PublicLayoutWrapper: React.FC<IPublicLayoutWrapperProps> = ({
  children,
}) =>
// const navigate = useNavigate();

// React.useEffect(() => {
//   AuthService.checkIsAuth()
//     .then(({ accessToken }) => {
//       if (accessToken) {
//         navigate(authRoutePaths.home);
//       }
//     })
//     .catch((err) => console.log(err));
// }, [navigate]);

  <>{children}</>;

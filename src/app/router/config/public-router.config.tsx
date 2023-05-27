import { RouteProps, Navigate } from "react-router-dom";
import { PublicRoutesEnum, publicRoutePaths } from "@/shared/config/routes";
import SigninPage from "@/pages/SigninPage";
import SignupPage from "@/pages/SignupPage";
// import NotFoundPage from "@/pages/NotFoundPage"; // TODO

export const publicRouteConfig: Record<PublicRoutesEnum, RouteProps> = {
  [PublicRoutesEnum.SIGNIN]: {
    path: publicRoutePaths.signin,
    element: <SigninPage />,
  },
  [PublicRoutesEnum.SIGNUP]: {
    path: publicRoutePaths.signup,
    element: <SignupPage />,
  },
  [PublicRoutesEnum.NOT_FOUND]: {
    path: publicRoutePaths.not_found,
    element: <Navigate to={publicRoutePaths.signin} replace />,
  },
};

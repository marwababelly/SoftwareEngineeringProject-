import { lazy } from "react";
import routesNames from "../routesNames";
import TRoute from "../types";

const LoginPage = lazy(() => import("../../pages/login/login.page"));

const normalRoutes: TRoute[] = [
  {
    id: 0,
    path: routesNames.login,
    element: <LoginPage />,
  },
];

export default normalRoutes;

import { lazy } from "react";
import routesNames from "../routesNames";
import TRoute from "../types";

const HomePage = lazy(() => import("../../pages/home/home.page"));
const CustomersPage = lazy(
  () => import("../../pages/customers/customers.page")
);

const loggedInRoutes: TRoute[] = [
  {
    id: 0,
    path: routesNames.home,
    element: <HomePage />,
  },
  {
    id: 0,
    path: routesNames.customers,
    element: <CustomersPage />,
  },
];

export default loggedInRoutes;

import React, { Suspense } from "react";
import { Navigate, Route, Routes as RoutesBuilder } from "react-router-dom";
import NotFound from "../pages/not-found/not-found.page";
import normalRoutes from "./normal-routes";
import loggedInRoutes from "./logged-in-routes";
import useUserStore from "../zustand/user/user.store";
import Loading from "../components/base/loading/loading";
import routesNames from "./routesNames";

function Routes() {
  const isLoggedIn: boolean = useUserStore((state) => !state.userInfo.token);

  return (
    <Suspense fallback={<Loading />}>
      <RoutesBuilder>
        {normalRoutes.map((route) => (
          <Route
            key={route.id + route.path}
            path={route.path}
            element={route.element}
          />
        ))}
        {loggedInRoutes.map((route) => (
          <Route
            key={route.id + route.path}
            path={route.path}
            element={
              !isLoggedIn ? (
                <Navigate to={routesNames.login} replace />
              ) : (
                route.element
              )
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </RoutesBuilder>
    </Suspense>
  );
}

export default Routes;

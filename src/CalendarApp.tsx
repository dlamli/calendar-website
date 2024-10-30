import { useEffect } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import { AUTH_STATUS, URL_PATH } from "@/libs";
import { CalendarPage } from "@/calendar";
import { LoginPage } from "@/auth";
import { useAuthStore } from "@/hooks";

export const CalendarApp = () => {
  const { status: authStatus, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  });

  if (authStatus === AUTH_STATUS.CHECKING) return <div>Loading...</div>;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {authStatus === AUTH_STATUS.UNAUTHORIZED ? (
          <Route path={URL_PATH.AUTH_OTHER} element={<LoginPage />} />
        ) : (
          <Route path={URL_PATH.HOME_OTHER} element={<CalendarPage />} />
        )}
        <Route
          path={URL_PATH.HOME_OTHER}
          element={<Navigate to={URL_PATH.AUTH_LOGIN} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

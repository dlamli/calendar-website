import { useEffect } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import { AUTH_STATUS, URL_PATH } from "@/libs";
import { CalendarPage, Spinner } from "@/calendar";
import { LoginPage } from "@/auth";
import { useAuthStore } from "@/hooks";

export const CalendarApp = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === AUTH_STATUS.CHECKING) return <Spinner />;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {status === AUTH_STATUS.UNAUTHORIZED ? (
          <>
            <Route path={URL_PATH.AUTH_OTHER} element={<LoginPage />} />
            <Route
              path={URL_PATH.HOME_OTHER}
              element={<Navigate to={URL_PATH.AUTH_LOGIN} />}
            />
          </>
        ) : (
          <>
            <Route path={URL_PATH.HOME} element={<CalendarPage />} />
            <Route
              path={URL_PATH.HOME_OTHER}
              element={<Navigate to={URL_PATH.HOME} />}
            />
          </>
        )}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

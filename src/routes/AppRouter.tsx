import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import { LoginPage } from "@/auth";
import { CalendarPage } from "@/calendar";
import { AUTH_STATUS, URL_PATH } from "@/libs";

export const AppRouter = () => {
  const authStatus = AUTH_STATUS.UNAUTHORIZED;

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

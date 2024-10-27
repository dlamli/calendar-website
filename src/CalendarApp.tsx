import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "@/store";
import { router } from "@/routes/router";

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

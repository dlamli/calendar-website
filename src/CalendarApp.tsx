import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/router";

export const CalendarApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

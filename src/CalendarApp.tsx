import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/router";

export const CalendarApp = () => {
  return (
    <div className="w-full min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

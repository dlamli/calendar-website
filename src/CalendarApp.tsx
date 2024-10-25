import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/router";

export const CalendarApp = () => {
  return (
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
  );
};

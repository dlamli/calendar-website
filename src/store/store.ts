import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "@/store/ui";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

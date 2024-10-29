import { STORE_STATE } from "@/libs";
import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: STORE_STATE.UI,
  initialState: {
    isDateModalOpen: false,
  },
  reducers: {
    onOpenDateModal: (state) => {
      state.isDateModalOpen = true;
    },
    onCloseDateModal: (state) => {
      state.isDateModalOpen = false;
    },
  },
});

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;

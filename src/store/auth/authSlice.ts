import { AUTH_STATUS, STORE_STATE } from "@/libs";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: STORE_STATE.AUTH,
  initialState: {
    status: AUTH_STATUS.CHECKING,
    user: undefined,
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = AUTH_STATUS.CHECKING;
      state.user = undefined;
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = AUTH_STATUS.AUTHORIZED;
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = AUTH_STATUS.UNAUTHORIZED;
      state.user = undefined;
      state.errorMessage = payload;
    },
    onClearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, onClearErrorMessage } =
  authSlice.actions;

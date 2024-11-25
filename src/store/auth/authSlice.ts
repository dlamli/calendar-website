import { AUTH_STATUS, STORE_STATE } from "@/libs";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: STORE_STATE.AUTH,
  initialState: {
    status: AUTH_STATUS.CHECKING,
    user: null,
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = AUTH_STATUS.CHECKING;
      state.user = null;
      state.errorMessage = null;
    },
    onLogin: (state, { payload }) => {
      state.status = AUTH_STATUS.AUTHORIZED;
      state.user = payload;
      state.errorMessage = null;
    },
    onLogout: (state, { payload }) => {
      state.status = AUTH_STATUS.UNAUTHORIZED;
      state.user = null;
      state.errorMessage = payload;
    },
    onUnAuthorized: (state) => {
      state.status = AUTH_STATUS.UNAUTHORIZED;
      state.user = null;
      state.errorMessage = null;
    },
    onClearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
});

export const {
  onChecking,
  onLogin,
  onLogout,
  onUnAuthorized,
  onClearErrorMessage,
} = authSlice.actions;

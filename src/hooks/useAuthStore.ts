import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { calendarApi } from "@/apis";
import { TAuthStore, TLoginFormFields, TRegisterFormFields } from "@/libs";

import {
  onChecking,
  onClearErrorMessage,
  onLogin,
  onLogout,
  onLogoutCalendar,
  onUnAuthorized,
} from "@/store";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector(
    (state: TAuthStore) => state.auth
  );

  const startLogin = async ({ email, password }: TLoginFormFields) => {
    try {
      dispatch(onChecking());
      const { data } = await calendarApi.post("/auth", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());

      dispatch(onLogin(data.user));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        dispatch(onLogout(response?.data?.msg));

        setTimeout(() => {
          dispatch(onClearErrorMessage());
        }, 500);
      }
    }
  };

  const startRegister = async ({
    name,
    email,
    password,
  }: TRegisterFormFields) => {
    try {
      dispatch(onChecking());
      const { data } = await calendarApi.post("/auth/new", {
        name,
        email,
        password,
      });

      dispatch(onLogin(data.user));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        dispatch(onLogout(response?.data?.msg));
      }
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onUnAuthorized());

    try {
      const { data } = await calendarApi.get("/auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());
      dispatch(onLogin(data.user));
    } catch (error) {
      localStorage.clear();
      dispatch(onUnAuthorized());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogoutCalendar());
    dispatch(onUnAuthorized());
  };

  return {
    // Properties
    status,
    user,
    errorMessage,
    // Methods
    startLogin,
    startLogout,
    startRegister,
    checkAuthToken,
  };
};

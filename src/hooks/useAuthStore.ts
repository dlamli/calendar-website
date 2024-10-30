import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { calendarApi } from "@/apis";
import { TAuthStore, TLoginFormFields, TRegisterFormFields } from "@/libs";
import { onChecking, onClearErrorMessage, onLogin, onLogout } from "@/store";

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

  return {
    // Properties
    status,
    user,
    errorMessage,
    // Methods
    startLogin,
    startRegister,
  };
};

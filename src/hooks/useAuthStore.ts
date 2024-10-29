import { calendarApi } from "@/apis";
import { TAuthStore, TLoginFormFields } from "@/libs";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector(
    (state: TAuthStore) => state.auth
  );

  const startLogin = async ({ email, password }: TLoginFormFields) => {
    try {
      const response = await calendarApi.post("/auth", {
        email,
        password,
      });

      console.log({ response });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
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
  };
};

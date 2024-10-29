import axios from "axios";

import { getEnvVariables } from "@/libs/utils";

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

// Interceptors

export default calendarApi;

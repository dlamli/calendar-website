import { AUTH_STATUS } from "../../src/libs/constants/variables";

export const initialState = {
  status: AUTH_STATUS.CHECKING,
  user: undefined,
  errorMessage: undefined,
};

export const authenticatedState = {
  status: AUTH_STATUS.AUTHORIZED,
  user: {
    id: "123",
    name: "John Doe",
    email: "H2H8e@example.com",
  },
  errorMessage: undefined,
};

export const notAuthenticatedState = {
  status: AUTH_STATUS.UNAUTHORIZED,
  user: undefined,
  errorMessage: undefined,
};

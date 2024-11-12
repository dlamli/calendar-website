import { AUTH_STATUS } from "../../../src/libs/constants/variables";

import {
  authSlice,
  onChecking,
  onClearErrorMessage,
  onLogin,
  onLogout,
} from "../../../src/store/auth/authSlice";

import { initialState, notAuthenticatedState } from "../../fixtures/authStates";

import { testUserCredentials } from "../../fixtures/testUser";

describe("Test in AuthSlice", () => {
  test("should return default state", () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test("should make login correctly", () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
    expect(state).toEqual({
      status: AUTH_STATUS.AUTHORIZED,
      user: testUserCredentials,
      errorMessage: undefined,
    });
  });

  test("should make logout correctly", () => {
    const errorMessage = "Invalid credentials";
    const state = authSlice.reducer(
      notAuthenticatedState,
      onLogout(errorMessage)
    );
    expect(state).toEqual({
      status: AUTH_STATUS.UNAUTHORIZED,
      user: undefined,
      errorMessage: errorMessage,
    });
  });

  test("should clear error messages", () => {
    const errorMessage = "Invalid credentials";
    const state = authSlice.reducer(
      notAuthenticatedState,
      onLogout(errorMessage)
    );
    const newState = authSlice.reducer(state, onClearErrorMessage());
    expect(newState.errorMessage).toBe(undefined);
  });

  test("should set status to checking", () => {
    const state = authSlice.reducer(initialState, onChecking());

    expect(state.status).toBe(AUTH_STATUS.CHECKING);
  });
});

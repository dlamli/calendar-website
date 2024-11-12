import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook, waitFor } from "@testing-library/react";

import { authSlice } from "../../src/store/auth/authSlice";
import { AUTH_STATUS } from "../../src/libs/constants/variables";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { initialState, notAuthenticatedState } from "../fixtures/authStates";
import { testUserCredentials } from "../fixtures/testUser";
import { calendarApi } from "../../src/apis";

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: { ...initialState },
    },
  });
};

describe("Test in useAuthStore", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should return default state", () => {
    const mockStore = getMockStore({
      ...initialState,
    });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    expect(result.current).toEqual({
      status: AUTH_STATUS.CHECKING,
      user: undefined,
      errorMessage: undefined,
      startLogin: expect.any(Function),
      startLogout: expect.any(Function),
      startRegister: expect.any(Function),
      checkAuthToken: expect.any(Function),
    });
  });

  test("startLogin should make login correctly", async () => {
    const mockStore = getMockStore({
      ...notAuthenticatedState,
    });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.startLogin(testUserCredentials);
    });

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: AUTH_STATUS.AUTHORIZED,
      user: {
        id: "671f3b3d2d804fb7011a315e",
        email: "anadoe@email.com",
        name: "Ana Doe",
      },
    });

    expect(localStorage.getItem("token")).toEqual(expect.any(String));
    expect(localStorage.getItem("token-init-date")).toEqual(expect.any(String));
  });

  test("startLogout should failed authentication", async () => {
    const mockStore = getMockStore({
      ...notAuthenticatedState,
    });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.startLogin({
        email: "anadoe@email.com",
        password: "123",
      });
    });

    expect(localStorage.getItem("token")).toBe(null);
    expect(localStorage.getItem("token-init-date")).toBe(null);

    await waitFor(() => expect(result.current.errorMessage).toBe(undefined));
  });

  test("startReigster should create an user", async () => {
    const newUser = {
      email: "test@email.com",
      password: "123456",
      name: "test",
    };

    const mockStore = getMockStore({
      ...notAuthenticatedState,
    });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const spy = jest.spyOn(calendarApi, "post").mockReturnValue({
      data: {
        ok: true,
        token: "ABC",
        user: {
          id: "6733d4273eeab67ea1360a8d",
          name: "Test",
          email: "test@email.com",
        },
      },
    });

    await act(async () => {
      await result.current.startRegister(newUser);
    });

    const { errorMessage, status, user } = result.current;
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: "authenticated",
      user: {
        id: "6733d4273eeab67ea1360a8d",
        name: "Test",
        email: "test@email.com",
      },
    });

    spy.mockRestore();
  });

  test("startRegister should failed user creation", async () => {
    const mockStore = getMockStore({
      ...notAuthenticatedState,
    });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.startRegister(testUserCredentials);
    });

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: "User already exists",
      status: "not-authenticated",
      user: undefined,
    });
  });

  test("checkAuthToken should failed if token not provided", async () => {
    const mockStore = getMockStore({
      ...initialState,
    });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.checkAuthToken();
    });

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: AUTH_STATUS.UNAUTHORIZED,
      user: undefined,
    });
  });

  test("checkAuthToken should authenticate user if token is valid", async () => {
    const { data } = await calendarApi.post("/auth", testUserCredentials);

    localStorage.setItem("token", data.token);

    const mockStore = getMockStore({
      ...initialState,
    });

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    await act(async () => {
      await result.current.checkAuthToken();
    });

    const { errorMessage, status, user } = result.current;

    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: "authenticated",
      user: { id: "671f3b3d2d804fb7011a315e", name: "Ana Doe" },
    });
  });
});

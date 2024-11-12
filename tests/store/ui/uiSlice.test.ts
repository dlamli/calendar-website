import {
  onCloseDateModal,
  onOpenDateModal,
  uiSlice,
} from "../../../src/store/ui/uiSlice";

import { initialState } from "../../fixtures/uiStates";

describe("Test in UiSlice", () => {
  test("should return default state", () => {
    expect(uiSlice.getInitialState()).toEqual(initialState);
  });

  test("should change isDatModalOpen correctly", () => {
    let state = uiSlice.getInitialState();

    state = uiSlice.reducer(state, onOpenDateModal());
    expect(state.isDateModalOpen).toBeTruthy();

    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});

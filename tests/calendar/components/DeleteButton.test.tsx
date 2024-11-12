import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { DeleteButton } from "../../../src/calendar/components/DeleteButton";
import { useCalendarStore } from "../../../src/hooks/useCalendarStore";
import { useUiStore } from "../../../src/hooks/useUiStore";

jest.mock("../../../src/hooks/useCalendarStore");
jest.mock("../../../src/hooks/useUiStore");

describe("Test in DeleteButton", () => {
  const mockStartDeleting = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  beforeEach(() => jest.clearAllTimers());

  test("should show the component", () => {
    useCalendarStore.mockReturnValue({ hasEventSelected: false });
    useUiStore.mockReturnValue({ isModalClose: false });

    render(<DeleteButton />);

    // screen.debug();
    const btn = screen.getByLabelText("btn-delete");
    expect(btn.style.display).toBe("none");
  });

  test("should show onClickDelete if have active event", () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
      startDeletingEvent: mockStartDeleting,
    });

    useUiStore.mockReturnValue({ isModalClose: false });

    render(<DeleteButton />);

    // screen.debug();
    const btn = screen.getByLabelText("btn-delete");
    fireEvent.click(btn);

    expect(mockStartDeleting).toHaveBeenCalled();
  });
});

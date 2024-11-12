import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadingEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from "../../../src/store/calendar/calendarSlice";

import {
  calendarWithActiveEventState,
  calendarWithEventState,
  events,
  initialState,
} from "../../fixtures/calendarStates";

describe("Test in CalendarSlice", () => {
  test("should return default state", () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test("onSetActiveEvent should change state correctly", () => {
    const state = calendarSlice.reducer(
      calendarWithEventState,
      onSetActiveEvent(events[0])
    );

    expect(state.activeEvent).toEqual(events[0]);
  });

  test("onAddNewEvent should add event correctly", () => {
    const newEvent = {
      id: "3",
      title: "Meeting 3",
      notes: "Meeting 3 Notes",
      start: new Date("2022-12-05 10:00:00"),
      end: new Date("2022-12-05 12:00:00"),
    };

    const state = calendarSlice.reducer(
      calendarWithEventState,
      onAddNewEvent(newEvent)
    );

    expect(state.events).toEqual([...events, newEvent]);
  });

  test("onUpdate should add event correctly", () => {
    const updatedEvent = {
      id: "1",
      title: "Meeting 1 Update",
      notes: "Meeting 1 Notes",
      start: new Date("2022-12-05 10:00:00"),
      end: new Date("2022-12-05 12:00:00"),
    };

    const state = calendarSlice.reducer(
      calendarWithEventState,
      onUpdateEvent(updatedEvent)
    );

    // expect(state.events).toEqual([...events, updatedEvent]);
    expect(state.events).toContain(updatedEvent);
  });

  test("onDeleteEvent should delete active event correctly", () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDeleteEvent()
    );

    expect(state.activeEvent).toBeNull();
    expect(state.events).not.toContain(events[0]);
  });

  test("onLoadEvents should stabish event correctly", () => {
    const state = calendarSlice.reducer(initialState, onLoadingEvents(events));

    expect(state.isLoading).toBeFalsy();
    expect(state.events).toEqual(events);
  });

  test("onLogoutCalendar should clean state correctly", () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onLogoutCalendar()
    );

    expect(state).toEqual(initialState);
  });
});

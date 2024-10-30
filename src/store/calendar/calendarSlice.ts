import { createSlice } from "@reduxjs/toolkit";
import { STORE_STATE, TCalendar, TEvent } from "@/libs";
// import { addHours } from "date-fns";

// const tempEvent: TEvent = {
//   _id: new Date().getTime(),
//   title: "Meeting",
//   notes: "Meeting Notes",
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: "#fafafa",
//   user: {
//     _id: "123",
//     name: "John Doe",
//   },
// };

export const calendarSlice = createSlice({
  name: STORE_STATE.CALENDAR,
  initialState: {
    isLoading: true,
    events: [
      // tempEvent,
    ],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state: TCalendar, { payload }: { payload: TEvent }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state: TCalendar, { payload }: { payload: TEvent }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state: TCalendar, { payload }: { payload: TEvent }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) return payload;

        return event;
      });
    },
    onDeleteEvent: (state: TCalendar) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event: TEvent) => event.id !== state.activeEvent?.id
        );
        state.activeEvent = null;
      }
    },
    onLoadingEvents: (state: TCalendar, { payload }: { payload: TEvent[] }) => {
      state.isLoading = false;

      payload.forEach((event) => {
        const exist = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!exist) {
          state.events.push(event);
        }
      });
    },
    onLogoutCalendar: (state: TCalendar) => {
      state.isLoading = true;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

export const {
  onAddNewEvent,
  onDeleteEvent,
  onLoadingEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} = calendarSlice.actions;

import { TEvent } from "@/libs";
import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent: TEvent = {
  _id: new Date().getTime(),
  title: "Meeting",
  notes: "Meeting Notes",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "John Doe",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }: { payload: TEvent }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) return payload;

        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event: TEvent) =>
            event._id !== (state.activeEvent as TEvent | null)?._id
        );
        state.activeEvent = null;
      }
    },
  },
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions;

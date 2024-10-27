import { useDispatch, useSelector } from "react-redux";

import { TCalendarStore, TEvent } from "@/libs";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "@/store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(
    (state: TCalendarStore) => state.calendar
  );

  const setActiveEvent = (calendarEvent: TEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent: TEvent) => {
    // TODO: Connect to backend
    if (calendarEvent._id) {
      // Update Calendar Event
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // New Calendar Event
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = () => dispatch(onDeleteEvent());

  return {
    // Properties
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    // Methods
    setActiveEvent,
    startDeletingEvent,
    startSavingEvent,
  };
};

import { useDispatch, useSelector } from "react-redux";

import { TCalendarStore, TEvent } from "@/libs";
import { onSetActiveEvent } from "@/store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(
    (state: TCalendarStore) => state.calendar
  );

  const setActiveEvent = (calendarEvent: TEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  return {
    // Properties
    events,
    activeEvent,
    // Methods
    setActiveEvent,
  };
};

import { useDispatch, useSelector } from "react-redux";

import { TAuthStore, TCalendarStore, TEvent } from "@/libs";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadingEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "@/store";
import { calendarApi } from "@/apis";
import { convertEventsToDate } from "@/libs/utils";
import axios from "axios";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(
    (state: TCalendarStore) => state.calendar
  );
  const { user } = useSelector((state: TAuthStore) => state.auth);

  const setActiveEvent = (calendarEvent: TEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent: TEvent) => {
    try {
      if (calendarEvent.id) {
        // Update Calendar Event
        await calendarApi.put(`/event/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }

      // New Calendar Event
      const { data } = await calendarApi.post("/event", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        Swal.fire("Error", response?.data.msg, "error");
      }
    }
  };

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/event/${activeEvent?.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        Swal.fire("Error removing Event", response?.data.msg, "error");
      }
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/event");
      const events = convertEventsToDate(data.events);
      dispatch(onLoadingEvents(events));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // Properties
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    // Methods
    setActiveEvent,
    startDeletingEvent,
    startLoadingEvents,
    startSavingEvent,
  };
};

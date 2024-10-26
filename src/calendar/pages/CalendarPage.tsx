import { useState } from "react";
import { Calendar } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { CalendarEvent, Navbar } from "@/calendar";
import {
  initCalendarConfig,
  localizer,
  TonDoubleClick,
  TonSelect,
  TonViewChange,
  TView,
} from "@/libs";
import { useCalendar } from "@/hooks";

export const CalendarPage = () => {
  const lsLastView: TView | (() => TView) = localStorage.getItem("lastView") as
    | TView
    | (() => TView);
  const [lastView, setLastView] = useState<TView>(lsLastView ?? "week");
  const { events, getEventStyle } = useCalendar();

  const onDoubleClick: TonDoubleClick = (event, e) => {
    console.log({ doubleClick: e, event });
  };

  const onSelect: TonSelect = (event, e) => {
    console.log({ click: e, event });
  };

  const onViewChange: TonViewChange = (e) => {
    localStorage.setItem("lastView", e);
    setLastView(e);
  };

  return (
    <>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        className="min-h-screen pt-20"
        messages={initCalendarConfig()}
        eventPropGetter={getEventStyle}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />
    </>
  );
};

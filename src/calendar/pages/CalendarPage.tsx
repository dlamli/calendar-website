import { useState } from "react";
import { Calendar, View } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { CalendarEvent, Navbar } from "@/calendar";
import {
  initCalendarConfig,
  localizer,
  TonDoubleClick,
  TonSelect,
  TonViewChange,
} from "@/libs";
import { useCalendar } from "@/hooks";

export const CalendarPage = () => {
  const lsLastView: View | undefined = localStorage.getItem("lastView") as View | undefined;
  const [lastView, setLastView] = useState<View | undefined>(lsLastView ?? "week");
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

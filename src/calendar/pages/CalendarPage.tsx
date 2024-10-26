import { Calendar } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { Navbar } from "@/calendar";
import { initCalendarConfig, localizer } from "@/libs";
import { useCalendar } from "@/hooks";

export const CalendarPage = () => {
  const { events, getEventStyle } = useCalendar();

  return (
    <>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="min-h-screen pt-20"
        messages={initCalendarConfig()}
        eventPropGetter={getEventStyle}
      />
    </>
  );
};

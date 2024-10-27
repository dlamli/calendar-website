import { useState } from "react";
import { Calendar } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  AddButton,
  CalendarEvent,
  CalendarModal,
  DeleteButton,
  Navbar,
} from "@/calendar";

import {
  initCalendarConfig,
  localizer,
  TOnDoubleClick,
  TOnSelect,
  TOnViewChange,
  TView,
} from "@/libs";

import { useCalendar, useCalendarStore, useUiStore } from "@/hooks";
import { PlusIcon, TrashIcon } from "@/global";

export const CalendarPage = () => {
  const lsLastView: TView | (() => TView) = localStorage.getItem("lastView") as
    | TView
    | (() => TView);
  const [lastView, setLastView] = useState<TView>(lsLastView ?? "week");

  const { getEventStyle } = useCalendar();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();

  const onDoubleClick: TOnDoubleClick = () => openDateModal();

  const onSelect: TOnSelect = (event) => setActiveEvent(event);

  const onViewChange: TOnViewChange = (e) => {
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
      <CalendarModal />
      <AddButton>
        <PlusIcon currentColor="white" className="size-8 m-auto" />
      </AddButton>
      <DeleteButton>
        <TrashIcon currentColor="white" className="size-8 m-auto" />
      </DeleteButton>
    </>
  );
};

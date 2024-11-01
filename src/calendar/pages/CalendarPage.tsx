import { useEffect, useState } from "react";
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
  CalendarView,
  initCalendarConfig,
  localizer,
  TEvent,
  TLocalStorageView,
  TOnDoubleClick,
  TOnSelect,
  TOnViewChange,
} from "@/libs";

import { useAuthStore, useCalendarStore, useUiStore } from "@/hooks";
import { PlusIcon, TrashIcon } from "@/global";

export const CalendarPage = () => {
  const lsLastView: TLocalStorageView | string =
    localStorage.getItem("lastView") ?? CalendarView.month;
  const view = CalendarView[lsLastView as keyof typeof CalendarView];

  const [lastView, setLastView] = useState<TLocalStorageView>(view);
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const { user } = useAuthStore();

  const onDoubleClick: TOnDoubleClick = () => openDateModal();

  const onSelect: TOnSelect = (event) => setActiveEvent(event);

  const onViewChange: TOnViewChange = (e) => {
    localStorage.setItem("lastView", e);
    setLastView(e);
  };

  const getEventStyle = (event: TEvent) => {
    const isMyEvent =
      user?.id === event.user?._id || user?.id === event.user?.id;

    const style = {
      backgroundColor: isMyEvent ? "#7F00FF" : "#464646",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  useEffect(() => {
    startLoadingEvents();
  });

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

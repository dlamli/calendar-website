import { TCalendarEvent } from "@/libs";
import { memo } from "react";

export const CalendarEvent = memo(({ event }: TCalendarEvent) => {
  const { title, user } = event;

  return (
    <>
      <strong>{title}</strong>
      <span>-{user?.name}</span>
    </>
  );
});

import { parseISO } from "date-fns";
import { TEvent } from "../types/types";

export const convertEventsToDate = (events: TEvent[]) => {
  return events.map((event: TEvent) => {
    event.start = parseISO(event.start);
    event.end = parseISO(event.end);

    return event;
  });
};

import { format, parseISO } from "date-fns";

import { TEvent } from "../types/types";
import { DATE_FORMAT } from "../constants/variables";

export const convertEventsToDate = (events: TEvent[]) => {
  return events.map((event: TEvent) => {
    event.start = parseISO(format(event.start, DATE_FORMAT));
    event.end = parseISO(format(event.end, DATE_FORMAT));

    return event;
  });
};

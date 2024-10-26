import { TEvent } from "@/libs";
import { addHours } from "date-fns";

/**
 * Custom hook that provides calendar event data and styling.
 *
 * @returns {Object} An object containing:
 * - `events`: An array of TEvent objects representing calendar events.
 * - `getEventStyle`: A function that returns styling for calendar events.
 */
export const useCalendar = () => {
  const events: TEvent[] = [
    {
      title: "Meeting",
      notes: "Meeting Notes",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "John Doe",
      },
    },
  ];

  const getEventStyle = (
    // event: TEvent,
    // start: Date,
    // end: Date,
    // isSelected: boolean
  ) => {
    const style = {
      backgroundColor: "#7F00FF",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  return { events, getEventStyle };
};

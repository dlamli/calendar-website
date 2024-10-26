import { TEvent } from "@/libs";
import { addHours } from "date-fns";

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

  const getEventStyle = () =>
    // event: TEvent,
    // start: Date,
    // end: Date,
    // isSelected: boolean
    {
      // console.log({ event, start, end, isSelected });

      const style = {
        backgroundColor: "#917Cf7",
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

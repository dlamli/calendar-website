import { addHours } from "date-fns";

import { TEvent } from "@/libs";

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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "50%",
      padding: "20px",
    },
  };

  const getEventStyle = () => {
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

  return {
    // Properties
    events,
    customStyles,
    // Methods
    getEventStyle,
  };
};

export const events = [
  {
    id: "1",
    title: "Meeting",
    notes: "Meeting Notes",
    start: new Date("2022-10-30 10:00:00"),
    end: new Date("2022-10-30 12:00:00"),
  },
  {
    id: "2",
    title: "Meeting 2",
    notes: "Meeting 2 Notes",
    start: new Date("2022-11-30 10:00:00"),
    end: new Date("2022-11-30 12:00:00"),
  },
];

export const initialState = {
  isLoading: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventState = {
  isLoading: true,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoading: true,
  events: [...events],
  activeEvent: { ...events[0] },
};

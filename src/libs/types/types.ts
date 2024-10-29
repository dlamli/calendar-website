import { ReactNode, SyntheticEvent } from "react";
import { View } from "react-big-calendar";

export type TIcon = {
  className?: string;
  currentColor?: string | "currentColor";
};

export type TButton = {
  children: ReactNode;
  className?: string;
  link?: string;
};

export type TEvent = {
  _id?: number;
  title: string;
  notes?: string;
  start: Date;
  end: Date;
  bgColor?: string;
  user: TUser | undefined;
};

export type TCalendarEvent = {
  event: TEvent;
};

export type TUser = {
  _id: string;
  name: string;
};

export type TOnDoubleClick = (
  event: TEvent,
  e: SyntheticEvent<HTMLElement, Event>
) => void;

export type TOnSelect = (
  event: TEvent,
  e: SyntheticEvent<HTMLElement, Event>
) => void;

export type TOnViewChange = (e: View) => void;

export type TView = View | undefined;

export type TFormValue = {
  title: string;
  notes?: string;
  start: Date;
  end: Date;
  user: TUser | undefined;
};

export type TDateProperty = "start" | "end";

export type TDate = Date | null;

export type TOnInputChange = {
  target: HTMLInputElement | HTMLTextAreaElement;
};

export type TUi = {
  isDateModalOpen: boolean;
};

export type TUiStore = {
  ui: TUi;
};

export type TCalendar = {
  events: TEvent[];
  activeEvent: TFormValue;
};

export type TCalendarStore = {
  calendar: TCalendar;
};

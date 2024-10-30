import { ReactNode, SyntheticEvent } from "react";
import { View } from "react-big-calendar";

export type TIcon = {
  className: string;
  currentColor: string;
};

export type TButton = {
  children: ReactNode;
  className?: string;
  link?: string;
  onClick?: () => void;
};

export type TEvent = {
  id?: number;
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
  _id?: string;
  id: string;
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

export type TStatus = "checking" | "authenticated" | "not-authenticated";

export type TDate = Date | null;

export type TOnInputChange = {
  target: HTMLInputElement | HTMLTextAreaElement;
};

export type TUi = {
  isDateModalOpen: boolean;
};

export type TAuth = {
  status: TStatus;
  user: TUser | undefined;
  errorMessage: string | undefined;
};

export type TUiStore = {
  ui: TUi;
};

export type TAuthStore = {
  auth: TAuth;
};

export type TCalendar = {
  isLoading: boolean;
  events: TEvent[];
  activeEvent: TEvent | null;
};

export type TCalendarStore = {
  calendar: TCalendar;
};

export type TLocalStorageView = View | undefined;

export enum CalendarView {
  month = "month",
  week = "week",
  work_week = "work_week",
  day = "day",
  agenda = "agenda",
}

export type TLoginFormFields = {
  email: string;
  password: string;
};

export type TRegisterFormFields = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

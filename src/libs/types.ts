import { SyntheticEvent } from "react";
import { View } from "react-big-calendar";

export type TIcon = {
  className?: string;
  currentColor?: string | "currentColor";
};

export type TButton = {
  children: React.ReactNode;
  className?: string;
  link?: string;
};

export type TEvent = {
  title: string | undefined;
  notes?: string | undefined;
  start?: Date;
  end?: Date;
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

export type TonDoubleClick = (
  event: TEvent,
  e: SyntheticEvent<HTMLElement, Event>
) => void;

export type TonSelect = (
  event: TEvent,
  e: SyntheticEvent<HTMLElement, Event>
) => void;

export type TonViewChange = (e: View) => void;

export type TView = View | undefined;

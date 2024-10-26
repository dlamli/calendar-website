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
  notes: string | undefined;
  start: Date;
  end: Date;
  bgColor?: string;
  user?: TUser | undefined;
};

export type TUser = {
  _id: string;
  name: string;
};

declare module "react-big-calendar" {
  import { ComponentType } from "react";
  import type { Event } from "../types/event.types";

  export interface CalendarEvent {
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    resource?: Event;
    id?: string;
  }

  export interface CalendarProps<TEvent = CalendarEvent> {
    localizer: Localizer;
    events: TEvent[];
    startAccessor: string | ((event: TEvent) => Date);
    endAccessor: string | ((event: TEvent) => Date);
    style?: React.CSSProperties;
  }

  export const Calendar: ComponentType<CalendarProps>;
  export const dateFnsLocalizer: (params: {
    format: (date: Date, formatStr: string) => string;
    parse: (dateStr: string, formatStr: string) => Date;
    startOfWeek: (date: Date) => Date;
    getDay: (date: Date) => number;
    locales: { [key: string]: Locale };
  }) => Localizer;
}

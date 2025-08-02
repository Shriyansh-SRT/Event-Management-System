import type { Event } from "../types/event.types";

const EVENTS_KEY = "events";

export const saveEventToLocalStorage = (event: Event) => {
  const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || "[]");
  events.push(event);
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
};

export const getEventsFromLocalStorage = (): Event[] => {
  const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || "[]");
  return events;
};
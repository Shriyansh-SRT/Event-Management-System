import { create } from "zustand";
import type { Event } from "../types/event.types";

const EVENTS_KEY = "events";

const loadEvents = (): Event[] => {
  try {
    const stored = JSON.parse(localStorage.getItem(EVENTS_KEY) || "[]");
    return stored;
  } catch {
    return [];
  }
};

const saveEvents = (events: Event[]) => {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
};

interface EventStore {
  events: Event[];
  loadEventsFromStorage: () => void;
  saveEventsToStorage: () => void;
  addEvent: (event: Event) => void;
  removeEvent: (id: string) => void;
  updateEvent: (event: Event) => void;
  getEventById: (id: string) => Event | undefined;
}

export const useEventStore = create<EventStore>((set, get) => ({
  events: loadEvents(),

  loadEventsFromStorage: () => {
    const events = loadEvents();
    set({ events });
  },

  saveEventsToStorage: () => {
    saveEvents(get().events);
  },

  addEvent: (event: Event) => {
    const events = get().events;
    const newEvents = [...events, event];
    set({ events: newEvents });
    saveEvents(newEvents);
  },
  removeEvent: (id: string) => {
    const events = get().events;
    const filteredEvents = events.filter((event) => event.id !== id);
    set({ events: filteredEvents });
    saveEvents(filteredEvents);
  },

  updateEvent: (event: Event) => {
    const events = get().events;
    const updatedEvents = events.map((e) => (e.id === event.id ? event : e));
    set({ events: updatedEvents });
    saveEvents(updatedEvents);
  },
  getEventById: (id: string) => {
    const events = get().events;
    return events.find((event) => event.id === id);
  },
}));

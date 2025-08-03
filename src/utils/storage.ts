// Later changed into zustand store//

/////////////////////////////

// import type { Event } from "../types/event.types";

// const EVENTS_KEY = "events";

// export const saveEventToLocalStorage = (event: Event) => {
//   const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || "[]");
//   events.push(event);
//   localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
// };

// export const getEventsFromLocalStorage = (): Event[] => {
//   const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || "[]");
//   return events;
// };

// export const removeEventFromLocalStorage = (id: string) => {
//   const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || "[]");
//   if (!events.length) return;
//   const filteredEvents = events.filter((event: Event) => event.id !== id);
//   localStorage.setItem(EVENTS_KEY, JSON.stringify(filteredEvents));
//   return filteredEvents;
// }

// export const getEventFromId = (id: string) => {
//   const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || "[]");
//   const event = events.find((event: Event) => event.id === id);
//   return event;
// };

// export const updateEventInLocalStorage = (updatedEvent: Event) => {
//   const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || "[]");

//   const updatedEvents = events.map((event: Event) => {
//     if (event.id === updatedEvent.id) {
//       return updatedEvent;
//     }
//     return event;
//   });
//   localStorage.setItem(EVENTS_KEY, JSON.stringify(updatedEvents));
//   return updatedEvents;
// };

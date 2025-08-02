import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Event } from "../types/event.types";
import { getEventFromId, removeEventFromLocalStorage } from "../utils/storage";
import dayjs from "dayjs";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LabelIcon from "@mui/icons-material/Label";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import EditEventForm from "../components/EditEventForm";
import { updateEventInLocalStorage } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const event = getEventFromId(id || "");
    if (!event) return;
    setEvent(event);
  }, [id]);

  const handleUpdateEvent = (updatedEvent: Event) => {
    const updatedEvents = updateEventInLocalStorage(updatedEvent);
    const updatedEventResult = updatedEvents.find(
      (e: Event) => e.id === updatedEvent.id
    ) as Event;
    if (updatedEventResult) {
      setEvent(updatedEventResult);
      alert("Event updated successfully");
    }
  };

  const handleDeleteEvent = () => {
    const updatedEvents = removeEventFromLocalStorage(id || "");
    if (updatedEvents) {
      setEvent(null);
      alert("Event deleted successfully");
    }
    navigate("/");
  };

  console.log(event, "eventsss");

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Event Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <img
            src={event?.image}
            alt={event?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{event?.title}</h2>
            <p className="text-gray-600 mb-4">{event?.description}</p>
            <p className="text-gray-600 mb-4">
              <CalendarMonthIcon /> {dayjs(event?.date).format("DD MMM YYYY")}
            </p>
            <p className="text-gray-600 mb-4">
              <AccessTimeIcon /> {event?.time}
            </p>
            <p className="text-gray-600 mb-4">
              <LocationPinIcon /> {event?.venue}
            </p>
            <p className="text-gray-600 mb-4">
              <LabelIcon /> {event?.category}
            </p>
          </div>
          <div className="flex gap-5 justify-end">
            <EditEventForm event={event} onUpdateEvent={handleUpdateEvent} />
            <button
              onClick={handleDeleteEvent}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;

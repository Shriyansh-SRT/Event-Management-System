import { useEffect, useState } from "react";
import { useEventStore } from "../stores/useEventStore";
import EventCard from "../components/EventCard";
import SearchEventForm from "../components/SearchEventForm";
import dayjs from "dayjs";

const FILTER_OPTIONS = ["All", "Upcoming", "Past"];

const AllEventsPage = () => {
  const events = useEventStore((state) => state.events);
  const loadEventsFromStorage = useEventStore(
    (state) => state.loadEventsFromStorage
  );

  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    loadEventsFromStorage();
  }, []);

  const filteredEvents = events.filter((event) => {
    const eventDate = dayjs(event.date);
    const today = dayjs();

    if (activeTab === "Upcoming") return eventDate.isAfter(today, "day");
    if (activeTab === "Past") return eventDate.isBefore(today, "day");
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            All Events
          </h1>
          <p className="text-gray-600 text-lg">
            Browse through our event collection — filter, search, and explore.
          </p>
        </div>

        {/* for tabs */}
        <div className="flex justify-center mb-6 gap-4">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setActiveTab(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                activeTab === option
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* for searchEventForm */}
        <div className="mb-10 flex justify-center">
          <SearchEventForm />
        </div>

        {/* display events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="w-full max-w-md mx-auto">
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">
              No events found for this filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEventsPage;

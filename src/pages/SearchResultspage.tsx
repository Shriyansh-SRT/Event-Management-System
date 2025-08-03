import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useEventStore } from "../stores/useEventStore";
import EventCard from "../components/EventCard";

const SearchResultsPage = () => {
  const events = useEventStore((state) => state.events);
  const loadEventsFromStorage = useEventStore(
    (state) => state.loadEventsFromStorage
  );
  const [params] = useSearchParams();

  useEffect(() => {
    loadEventsFromStorage();
  }, []);

  const filteredEvents = useMemo(() => {
    const title = params.get("title")?.toLowerCase() || "";
    const category = params.get("category") || "All";
    const date = params.get("date");

    return events.filter((event) => {
      const matchesTitle = event.title.toLowerCase().includes(title);
      const matchesCategory = category === "All" || event.category === category;
      const matchesDate =
        !date ||
        new Date(event.date).toDateString() === new Date(date).toDateString();

      return matchesTitle && matchesCategory && matchesDate;
    });
  }, [events, params]);

  return (
    <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Search Results</h2>

      {filteredEvents.length === 0 ? (
        <p className="text-gray-500">No events match your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;

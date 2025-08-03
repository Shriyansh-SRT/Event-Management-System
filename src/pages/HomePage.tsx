import EventCard from "../components/EventCard";
// import { getEventsFromLocalStorage } from "../utils/storage";
import HeroSection from "../components/HeroSection";
import { Container } from "@mui/material";
import { useEffect } from "react";
// import type { Event } from "../types/event.types";
import { Link } from "react-router-dom";
import CalendarView from "../components/CalendarView";
import { useEventStore } from "../stores/useEventStore";

const HomePage = () => {
  // const [events, setEvents] = useState<Event[]>([]);

  const events = useEventStore((state) => state.events);
  const loadEventsFromStorage = useEventStore(
    (state) => state.loadEventsFromStorage
  );

  useEffect(() => {
    loadEventsFromStorage();
  }, [loadEventsFromStorage]);

  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Main Container */}
      <Container maxWidth="xl" sx={{ py: 10 }} id="upcomingEvents">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Upcoming Events
          </h2>
          <p className="text-gray-500">
            Explore the latest happenings and don't miss out!
          </p>
        </div>

        {/* Event Grid with consistent card sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-6 justify-items-center">
          {events.map((event) => (
            <div key={event.id} className="w-full max-w-sm">
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found</p>
            <Link
              to="/create-event"
              className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
            >
              Create your first event
            </Link>
          </div>
        )}
      </Container>

      <Container maxWidth="xl">
        <CalendarView events={events} />
      </Container>
    </div>
  );
};

export default HomePage;

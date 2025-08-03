import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetailsPage from "./pages/EventDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateEventPage from "./pages/CreateEventPage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHashElement from "./components/ScrollToHashElement";
import AllEventsPage from "./pages/AllEventsPage";
import SearchResultsPage from "./pages/SearchResultspage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <ScrollToTop />
      <ScrollToHashElement />
      <Toaster position="top-right" />
      {/* common component */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/events/new" element={<CreateEventPage />} />
        <Route path="/all-events" element={<AllEventsPage />} />
        <Route path="/events/search" element={<SearchResultsPage />} />
      </Routes>

      {/* common component */}
      <Footer />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventStore } from "../stores/useEventStore";
import {
  TextField,
  MenuItem,
  Button,
  InputAdornment,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const SearchEventForm = () => {
  const events = useEventStore((state) => state.events);
  const loadEventsFromStorage = useEventStore(
    (state) => state.loadEventsFromStorage
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadEventsFromStorage();
  }, []);

  const handleSearch = () => {
    const filteredEvent = events.find(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "All" || event.category === category) &&
        (!date ||
          new Date(event.date).toDateString() === new Date(date).toDateString())
    );

    if (filteredEvent) {
      navigate(`/events/${filteredEvent.id}`);
    } else {
      alert("No matching event found.");
    }
  };

  return (
    <Paper
      elevation={2}
      className="w-full max-w-4xl mx-auto p-4 md:p-6 rounded-xl bg-white shadow-sm flex flex-col md:flex-row gap-4 items-center"
    >
      <TextField
        variant="outlined"
        label="Search Title"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/3"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        select
        label="Category"
        size="small"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-1/4"
      >
        <MenuItem value="All">All</MenuItem>
        {[
          "music",
          "art",
          "sports",
          "technology",
          "food",
          "Business",
          "Health",
          "Education",
          "Other",
        ].map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="date"
        size="small"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        label="Date"
        className="w-full md:w-1/4"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CalendarMonthIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        onClick={handleSearch}
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
        size="medium"
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchEventForm;

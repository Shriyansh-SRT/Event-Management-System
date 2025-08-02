import {
  Calendar,
  dateFnsLocalizer,
  type CalendarEvent,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Typography } from "@mui/material";
import type { Event } from "../types/event.types";
import { enUS } from "date-fns/locale";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse: (dateStr: string, formatStr: string) =>
    parse(dateStr, formatStr, new Date()) as Date,
  startOfWeek,
  getDay,
  locales,
});

type Props = {
  events: Event[];
};

const CalendarView = ({ events }: Props) => {
  const calendarEvents: CalendarEvent[] = events.map((event) => ({
    title: event.title,
    start: new Date(event.date),
    end: new Date(event.date),
    allDay: true,
    resource: event,
    id: event.id,
  }));

  const navigate = useNavigate();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="calendar-panel-content"
        id="calendar-panel-header"
      >
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <CalendarMonthIcon />
          Calendar View
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Box
          sx={{ height: 600, backgroundColor: "white", p: 2, borderRadius: 2 }}
        >
          <Calendar
            onSelectEvent={(event: CalendarEvent) =>
              navigate(`/events/${event.id}`)
            }
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%" }}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CalendarView;

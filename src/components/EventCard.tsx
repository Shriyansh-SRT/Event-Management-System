import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import type { Event } from "../types/event.types";
import dayjs from "dayjs";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LabelIcon from "@mui/icons-material/Label";
import { Link } from "react-router-dom";

type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => {
  const isPast = dayjs(event.date).isBefore(dayjs(), "day");

  // Truncate description to ensure consistent height
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="hover:cursor-pointer overflow-hidden h-full">
      <Card
        elevation={3}
        className={`
          h-full w-full
          rounded-lg overflow-hidden flex flex-col relative 
          hover:scale-105 transition-all duration-300
          ${isPast ? "bg-red-100 opacity-80 grayscale-70" : "bg-white"}
        `}
        sx={{
          height: 450, // Fixed height for all cards
          maxWidth: 380, // Fixed max width
          minWidth: 320, // Fixed min width
          width: "100%",
        }}
      >
        {/* Past event badge */}
        {isPast && (
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
              Event Passed
            </span>
          </div>
        )}

        {/* Event Image - Fixed Height */}
        <CardMedia
          component="img"
          sx={{
            height: 180, // Fixed image height
            objectFit: "cover",
          }}
          image={event.image}
          alt={event.title}
          className={`${isPast ? "filter brightness-75" : ""}`}
        />

        {/* Event Details - Flexible with controlled spacing */}
        <CardContent
          className="flex-1 bg-[#1D2635] flex flex-col justify-between"
          sx={{
            height: 270, // Fixed content height
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          {/* Top Section - Event Meta Info */}
          <Box>
            <Box
              className={`flex justify-between items-center mb-3 ${
                isPast ? "text-gray-600" : "text-white"
              }`}
              sx={{ minHeight: 40 }} // Fixed height for meta info
            >
              <Typography
                variant="body2"
                className="flex items-center gap-1 text-xs"
              >
                <AccessTimeIcon fontSize="small" /> {event.time}
              </Typography>
              <Typography
                variant="body2"
                className="flex items-center gap-1 text-xs"
              >
                <CalendarMonthIcon fontSize="small" />
                {dayjs(event.date).format("DD MMM")}
              </Typography>
              <Typography
                variant="body2"
                className="flex items-center gap-1 text-xs"
              >
                <LabelIcon fontSize="small" />
                {event.category && truncateText(event.category, 8)}
              </Typography>
            </Box>

            {/* Title and Description - Fixed Heights */}
            <Box sx={{ minHeight: 120 }}>
              <Typography
                variant="h6"
                className={`
                  font-bold mb-2
                  ${isPast ? "line-through text-gray-500" : "text-white"}
                `}
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.3,
                  height: 50, // Fixed title height
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {event.title}
              </Typography>

              <Typography
                variant="body2"
                className={`
                  ${isPast ? "text-gray-600" : "text-white"}
                `}
                sx={{
                  fontSize: "0.85rem",
                  lineHeight: 1.4,
                  height: 60, // Fixed description height
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {event.description}
              </Typography>
            </Box>
          </Box>

          {/* Bottom Section - Venue and Button */}
          <Box
            className={`text-sm flex justify-between items-center ${
              isPast ? "text-gray-500" : "text-gray-400"
            }`}
            sx={{ minHeight: 40 }} // Fixed height for bottom section
          >
            <Typography
              variant="body2"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "60%",
              }}
            >
              📍 {event.venue}
            </Typography>

            <Link to={`/events/${event.id}`}>
              <button className="text-white px-3 py-1.5 text-sm rounded-md bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-300">
                View Details
              </button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCard;

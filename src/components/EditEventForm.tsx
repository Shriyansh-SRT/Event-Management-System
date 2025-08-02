import {
  Alert,
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import type { Event } from "../types/event.types";
import { getEventsFromLocalStorage } from "../utils/storage";
import dayjs from "dayjs";

type EditEventFormProps = {
  event: Event | null;
  onUpdateEvent: (updatedEvent: Event) => void;
};

const EditEventSchema = z.object({
  title: z.string().min(3, { message: "Title is required" }),
  description: z.string().min(5, { message: "Description is required" }),
  venue: z.string().min(1, { message: "Venue is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  time: z.string().min(1, { message: "Time is required" }),
  image: z.string().url("Invalid image URL").optional().or(z.literal("")),
  category: z.enum([
    "music",
    "art",
    "sports",
    "technology",
    "food",
    "Business",
    "Health",
    "Education",
    "Other",
  ]),
});

type EditEventFormData = z.infer<typeof EditEventSchema>;

const EditEventForm = ({ event, onUpdateEvent }: EditEventFormProps) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    watch,
    reset,
    clearErrors,
  } = useForm<EditEventFormData>({
    resolver: zodResolver(EditEventSchema),
    defaultValues: {
      title: "",
      description: "",
      venue: "",
      date: "",
      time: "",
      image: "",
      category: "Other",
    },
  });

  // Reset form when event changes or dialog opens
  useEffect(() => {
    if (event && open) {
      console.log("Resetting form with event:", event);
      reset({
        title: event.title,
        description: event.description,
        venue: event.venue,
        date: event.date,
        time: event.time,
        image: event.image || "",
        category: event.category as EditEventFormData["category"],
      });
    }
  }, [event, reset, open]);

  const onSubmit = async (data: EditEventFormData) => {
    try {
      clearErrors("root");

      console.log("Submitting form with data:", data);
      console.log("Current event:", event);

      if (!event) {
        setError("root", {
          type: "manual",
          message: "Event not found",
        });
        return;
      }

      const allEvents = getEventsFromLocalStorage();

      const hasCollision = allEvents.some((e) => {
        const isSameEvent = e.id === event.id;
        const isSameDate = e.date === data.date;
        const isSameVenue =
          e.venue.toLowerCase().trim() === data.venue.toLowerCase().trim();

        console.log(`Checking event ${e.id}:`, {
          isSameEvent,
          isSameDate,
          isSameVenue,
          eventDate: e.date,
          eventVenue: e.venue,
          formDate: data.date,
          formVenue: data.venue,
        });

        return !isSameEvent && isSameDate && isSameVenue;
      });

      if (hasCollision) {
        setError("root", {
          type: "manual",
          message:
            "This venue is already booked for this date. Please choose a different date or venue.",
        });
        return;
      }

      // Check if trying to edit past event
      if (dayjs(data.date).isBefore(dayjs(), "day")) {
        setError("root", {
          type: "manual",
          message: "You cannot edit an event in the past",
        });
        return;
      }
      const updatedEvent: Event = {
        ...event,
        ...data,
        id: event.id,
      };

      console.log("Final updated event:", updatedEvent);

      onUpdateEvent(updatedEvent);
      handleClose();
    } catch (error) {
      console.error("Error updating event:", error);
      setError("root", {
        type: "manual",
        message: "An error occurred while updating the event",
      });
    }
  };

  const handleClickOpen = () => {
    console.log("Opening dialog for event:", event);
    setOpen(true);
    clearErrors();
  };

  const handleClose = () => {
    setOpen(false);
    clearErrors();
  };

  if (!event) {
    return null;
  }

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Edit
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle className="text-2xl font-semibold">Edit Event</DialogTitle>
        <DialogContent>
          <DialogContentText className="text-gray-600 mb-4">
            Update the event details below.
          </DialogContentText>

          <Paper className="p-6 md:p-8 bg-white rounded-2xl shadow-lg">
            <Typography variant="h5" className="text-center font-bold mb-6">
              Edit Event
            </Typography>

            {errors.root && (
              <Alert severity="error" className="mb-4">
                {errors.root?.message}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-4"
            >
              <TextField
                fullWidth
                label="Title"
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
              />

              <TextField
                fullWidth
                label="Description"
                multiline
                rows={3}
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
              />

              <TextField
                fullWidth
                label="Venue"
                {...register("venue")}
                error={!!errors.venue}
                helperText={errors.venue?.message}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  fullWidth
                  type="date"
                  label="Date"
                  {...register("date")}
                  error={!!errors.date}
                  helperText={errors.date?.message}
                  InputLabelProps={{ shrink: true }}
                />

                <TextField
                  fullWidth
                  type="time"
                  label="Time"
                  {...register("time")}
                  error={!!errors.time}
                  helperText={errors.time?.message}
                  InputLabelProps={{ shrink: true }}
                />
              </div>

              <TextField
                fullWidth
                label="Image URL (Optional)"
                {...register("image")}
                error={!!errors.image}
                helperText={errors.image?.message}
              />

              <TextField
                select
                fullWidth
                label="Category"
                {...register("category")}
                error={!!errors.category}
                helperText={errors.category?.message}
                value={watch("category") || "Other"}
              >
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
                ].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option[0].toUpperCase() + option.slice(1)}
                  </MenuItem>
                ))}
              </TextField>

              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  fullWidth
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold py-2 rounded-lg transition duration-200"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </Box>
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditEventForm;

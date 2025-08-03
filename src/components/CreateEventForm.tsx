// CreateEventForm.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
// import { saveEventToLocalStorage } from "../utils/storage";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { useEventStore } from "../stores/useEventStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const CreateEventSchema = z.object({
  title: z.string().min(3, { message: "Title is required" }),
  description: z.string().min(5, { message: "Description is required" }),
  venue: z.string().min(1, { message: "Venue is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  time: z.string().min(1, { message: "Time is required" }).optional(),
  image: z.string().url("Invalid image").optional(),
  category: z
    .enum([
      "music",
      "art",
      "sports",
      "technology",
      "food",
      "Business",
      "Health",
      "Education",
      "Other",
    ])
    .optional(),
});

type CreateEventFormData = z.infer<typeof CreateEventSchema>;

const CreateEventForm = () => {
  const addEvent = useEventStore((state) => state.addEvent);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<CreateEventFormData>({
    resolver: zodResolver(CreateEventSchema),
    defaultValues: {
      title: "",
      description: "",
      venue: "",
      date: dayjs().format("YYYY-MM-DD"),
      time: dayjs().format("HH:mm"),
      image: "",
      category: "Other",
    },
  });

  const onSubmit = (data: CreateEventFormData) => {
    const newEvent = { ...data, id: uuidv4() };
    // saveEventToLocalStorage(newEvent);
    addEvent(newEvent);
    reset();
    toast.success("Event created successfully");
    navigate("/all-events");
  };

  return (
    <Paper
      elevation={3}
      className="max-w-6xl mx-auto p-8 shadow-md bg-white rounded-xl mt-10"
    >
      <Typography
        variant="h5"
        component="h1"
        className=" text-center font-bold text-2xl mb-6"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Create New Event
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        noValidate
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

        <TextField
          fullWidth
          type="date"
          label="Date"
          {...register("date")}
          error={!!errors.date}
          helperText={errors.date?.message}
        />

        <TextField
          fullWidth
          type="time"
          label="Time"
          {...register("time")}
          error={!!errors.time}
          helperText={errors.time?.message}
        />

        <TextField
          fullWidth
          label="Image URL"
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

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2"
        >
          {isSubmitting ? "Creating..." : "Create Event"}
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateEventForm;

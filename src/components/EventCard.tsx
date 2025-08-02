import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import type { Event } from '../types/event.types'
import dayjs from 'dayjs'

type EventCardProps = {
  event: Event
}

const EventCard = ({ event }: EventCardProps) => {
  const isPast = dayjs(event.date).isBefore(dayjs(), 'day')

  return (
    <Card
      elevation={3}
      sx={{
        maxWidth: 345,
        backgroundColor: isPast ? 'error.light' : 'success.light',
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Event Image */}
      <CardMedia
        component="img"
        height="160"
        image={event.image}
        alt={event.title}
        sx={{ objectFit: 'cover' }}
      />

      {/* Event Details */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {event.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {event.description}
        </Typography>

        <Box mt={2}>
          <Typography variant="body2">
            📍 <strong>Venue:</strong> {event.venue}
          </Typography>
          <Typography variant="body2">
            🏷️ <strong>Category:</strong> {event.category}
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography variant="body2">
            📅 <strong>Date:</strong> {dayjs(event.date).format('DD MMM YYYY')}
          </Typography>
          <Typography variant="body2">
            ⏰ <strong>Time:</strong> {event.time}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default EventCard

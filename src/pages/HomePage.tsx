
import { Typography, Container, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { getEventsFromLocalStorage } from '../utils/storage'
// import EventList from '../components/EventList'

const HomePage = () => {

  const events = getEventsFromLocalStorage();
  console.log(events)

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Introduction */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Welcome to the Event Management System
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
          Manage and explore events for your organization with ease. Stay up to date and keep everything in one place.
        </Typography>
      </Box>

      {/* Event List */}
      <Box className='flex items-center justify-between'>
        <Box>
        <Typography variant="h5" fontWeight="medium" mb={3}>
          Upcoming Events
        </Typography>
        {
          events.map((event) => 
            <EventCard key={event.id} event={event} />)
        }
        </Box>
        
        <Link to="/events/new">
          <Button variant='contained' color='primary'>Add Event</Button>
        </Link>
      </Box>
    </Container>
  )
}

export default HomePage

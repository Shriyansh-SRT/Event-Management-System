
import { Typography, Container, Box } from '@mui/material'
// import EventList from '../components/EventList'

const HomePage = () => {
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
      <Box>
        <Typography variant="h5" fontWeight="medium" mb={3}>
          Upcoming Events
        </Typography>
        {/* <EventList /> */}
      </Box>
    </Container>
  )
}

export default HomePage

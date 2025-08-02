
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventDetailsPage from './pages/EventDetailsPage'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateEventPage from './pages/CreateEventPage'

function App() {


  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* common component */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events/:id' element={<EventDetailsPage />} />
        <Route path='/events/new' element={<CreateEventPage />} />
      </Routes>

      {/* common component */}
      <Footer />
    </div>
  )
}

export default App

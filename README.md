# Event Management App
This is a simple Event Management application built with React, TypeScript, and Vite. It allows users to create, view, edit, and delete events stored locally in the browser's localStorage.

# Features
  1.Add new events with title, description, venue, date, time, image URL, and category and Calendar view is presented
  2.View list of all events
  3. Update events with validation to prevent date and venue collisions
  4. Delete events
  5. Events data stored in browser's localStorage
  6. Top 6 events are displayed in HomePage after creation
  7. Searching, filtering and sorting by categorize 

Prerequisites
Node.js (version 16 or above recommended)

# npm or yarn package manager

# Setup Instructions
1. Clone the repository
  git clone https://github.com/your-username/event-management-app.git
  cd event-management-app

3. Install dependencies
  Using npm:
  npm install

  Or using yarn:
  yarn
  
3. Run the development server

  npm run dev
  This will start the development server at http://localhost:5173 (or another available port).

4. Build the production version
  npm run build
  This generates an optimized production build in the dist folder.

5. Preview the production build locally (optional)
  npm run preview

7. Deploy to Netlify
  Connect your GitHub repository to Netlify.

# Set the build command to:
  npm run build
# Set the publish directory to:
  dist
  
Trigger deploy from Netlify dashboard or by pushing to your main branch.

Notes
Event data is stored in the browser's localStorage. Clearing browser data will remove all events.
For multi-user or persistent storage, consider integrating a backend or cloud database.


# Technologies Used
  React 19
  TypeScript
  Vite
  Material UI
  react-hook-form & zod for form validation
  dayjs for date/time formatting
  zustand for state management
  react-hot-toast for notifications
  react big calendar

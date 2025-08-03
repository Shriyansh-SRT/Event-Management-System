import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-[#111628] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div>
            <NavLink to="/">
              <h1 className="text-2xl font-extrabold tracking-wide">
                Event Management
              </h1>
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 space-x-6 text-sm sm:text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-white pb-1 transition duration-200"
                  : "hover:underline hover:opacity-90 transition duration-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-events"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-white transition duration-200"
                  : "hover:underline hover:opacity-90 transition duration-200"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/events/new"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-white transition duration-200"
                  : "hover:underline hover:opacity-90 transition duration-200"
              }
            >
              Create Event
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

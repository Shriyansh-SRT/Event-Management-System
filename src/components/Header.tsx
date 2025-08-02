import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full shadow-md bg-[#111628] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <Link to="/">
            <h1 className="text-2xl font-extrabold tracking-wide">
              Event Management
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 space-x-6 text-sm sm:text-base">
            <Link to="/" className="hover:underline hover:opacity-90 transition duration-200">
              Home
            </Link>
            <Link to="/events" className="hover:underline hover:opacity-90 transition duration-200">
              Events
            </Link>
            <Link to="/about" className="hover:underline hover:opacity-90 transition duration-200">
              About
            </Link>
            <Link to="/contact" className="hover:underline hover:opacity-90 transition duration-200">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

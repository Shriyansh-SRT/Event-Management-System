import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] bg-black">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Event banner"
        className="absolute inset-0 w-full h-full object-cover opacity-50 "
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
          Plan or Book Your Next Event Today
        </h1>
        <p className="text-lg text-white max-w-xl mb-6 drop-shadow-sm">
          Discover and manage events with ease. Whether you're attending or hosting, we’ve got you covered.
        </p>
        <Link to="/events/new">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded shadow-lg transition">
            Create an Event
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection

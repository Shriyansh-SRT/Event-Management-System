import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left - Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Event Management. All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-gray-300 transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-300 transition">Terms</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

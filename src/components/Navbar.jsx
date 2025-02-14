import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-around items-center px-10 py-4 bg-gray-900 bg-opacity-0 space-x-20 h-28 z-50">
      <div className="text-white text-3xl font-bold">
        <Link to="/" className="hover:text-gray-400 transition">
          GameZone
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-12">
        <Link to="/" className="text-white hover:text-gray-400 transition">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-400 transition">
          About
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-gray-400 transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

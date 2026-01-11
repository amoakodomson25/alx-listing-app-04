import React from "react";
import { FiSearch } from "react-icons/fi";

const ACCOMMODATION_TYPES = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Beachfront",
  "Villa",
  "Penthouse",
];

const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          AIRBNB CLONE
        </h1>

        {/* SEARCH BAR */}
        <div className="flex items-center gap-2 border rounded-full px-4 py-2 w-1/2 max-w-lg">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search destinations, properties..."
            className="outline-none w-full text-sm"
          />
        </div>

        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 font-medium">Sign in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Sign up
          </button>
        </div>
      </div>

      {/* ACCOMMODATION TYPES */}
      <nav className="flex gap-6 px-6 py-3 overflow-x-auto no-scrollbar">
        {ACCOMMODATION_TYPES.map((item) => (
          <button
            key={item}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

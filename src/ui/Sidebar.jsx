import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaTasks,
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
  FaDollarSign,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from React Router

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar for Mobile with Hamburger Menu */}
      <div className="z-50 lg:hidden fixed top-0 left-0 w-full bg-[#BCCCDC] text-white flex justify-between items-center px-4 py-4 shadow-md">
        <h1 className="text-xl font-semibold">Menu</h1>
        {isOpen ? (
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Sidebar for Mobile (Vertical) */}
      <div
        className={`z-50 fixed top-0 left-0 h-screen bg-black opacity-70 text-white w-full flex flex-col items-center pt-16 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <Link
          to="/"
          className="text-3xl my-4 cursor-pointer hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          <FaHome />
        </Link>
        
       
        <Link
          to="/visualization"
          className="text-2xl my-4 cursor-pointer hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          <FaChartBar />
        </Link>
        <Link
          to="/budget"
          className="text-2xl my-4 cursor-pointer hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          <FaDollarSign />
        </Link>
        <Link
          to="/settings"
          className="text-2xl my-4 cursor-pointer hover:text-blue-400"
          onClick={() => setIsOpen(false)}
        >
          <FaCog />
        </Link>
      </div>

      {/* Sidebar for Desktop */}
      <div className="z-50 hidden lg:flex lg:w-16 bg-[#F8FAFC] text-black h-screen flex-col items-center py-6">
        <Link to="/" className="text-2xl mb-4 cursor-pointer hover:text-[#9AA6B2]">
          <FaHome />
        </Link>

        
        <Link to="/visualization" className="text-2xl mb-4 cursor-pointer hover:text-[#9AA6B2]">
          <FaChartBar />
        </Link>
        <Link to="/budget" className="text-2xl cursor-pointer hover:text-[#9AA6B2]">
          <FaDollarSign />
        </Link>
        <br />
        <Link className="text-2xl mb-4 cursor-pointer hover:text-[#9AA6B2]">
          <FaUser />
        </Link>
      </div>
    </>
  );
}

export default Sidebar;

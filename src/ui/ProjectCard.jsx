import React from 'react';
import { FaCalendarAlt, FaClipboardList, FaEllipsisV } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function ProjectCard({ project }) {
  const { name, category, progress, daysLeft, startDate, endDate, teamMembersCount } = project;

  return (
    <div className="bg-[#DAD2FF] shadow-lg rounded-2xl p-6 flex flex-col relative">
      {/* More Button - Vertically Positioned */}
      <div className="absolute top-5 right-2 flex flex-col items-end space-y-1">
        <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
          <FaEllipsisV className="inline mr-1" />
        </button>
      </div>

      {/* Project Name */}
      <div className="text-xl font-semibold text-gray-800 mb-2 merienda-title">{name}</div>

      {/* Project Category */}
      <div className="text-sm text-gray-500 mb-4">{category}</div>

      {/* Start and End Dates */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <FaCalendarAlt className="mr-2" />
        <span>{startDate} - {endDate}</span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-pink-400 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Progress and Days Left */}
      <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
        <span></span>
        <span>{progress}%</span>
      </div>

      {/* Button */}
      <div className="flex justify-between items-center space-x-4">
        {/* Left Side Content: Team Members */}
        <div className="text-sm text-gray-500 flex-1">
          {/* Profile icons */}
          <div className="flex items-center space-x-[-22px]">
            {/* Display first 5 members */}
            {Array.from({ length: Math.min(teamMembersCount, 2) }).map((_, index) => (
              <div
                key={index}
                className={`w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center text-white ${index > 0 ? '-ml-4' : ''}`}
              >
                <FaUserCircle className="w-9 h-9" />
              </div>
            ))}

            {/* If there are more than 2 members */}
            {teamMembersCount > 2 && (
              <span className="text-gray-600 pl-6">+{teamMembersCount - 2} more</span>
            )}
          </div>
        </div>

        {/* Right Side Button */}
        <div>
          <Link 
            to={`/tasks/${name}`} // Use Link to navigate to TaskPage with the project name as a URL param
            className="bg-trans text-black py-2 px-4 rounded-lg hover:bg-pink-400 transition border border-black philosopher-regular"
          >
            <FaClipboardList className="mr-2 inline philosopher-regular" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

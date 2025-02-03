import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { FaUser } from "react-icons/fa"; // Import icons

const GanttChart = ({ tasks }) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const getMonthIndex = (date) => new Date(date).getMonth();

  const calculateWidth = (startDate, endDate, rangeStart, rangeEnd) => {
    const startMonth = getMonthIndex(startDate);
    const endMonth = getMonthIndex(endDate);
    const adjustedStart = Math.max(startMonth, rangeStart);
    const adjustedEnd = Math.min(endMonth, rangeEnd);
    if (adjustedStart > adjustedEnd) return 0; // Task not in range
    const rangeMonths = rangeEnd - rangeStart + 1;
    return ((adjustedEnd - adjustedStart + 1) / rangeMonths) * 100;
  };

  const calculateLeftPosition = (startDate, rangeStart, rangeEnd) => {
    const startMonth = getMonthIndex(startDate);
    if (startMonth < rangeStart) return 0;
    if (startMonth > rangeEnd) return 100; // Out of range
    const rangeMonths = rangeEnd - rangeStart + 1;
    return ((startMonth - rangeStart) / rangeMonths) * 100;
  };

  const [currentRange, setCurrentRange] = useState(() => {
    const currentMonth = new Date().getMonth();
    return [Math.max(currentMonth - 3, 0), Math.min(currentMonth + 3, 11)];
  });

  const handlePrev = () => {
    setCurrentRange(([start, end]) => [
      Math.max(start - 6, 0),
      Math.max(end - 6, 5),
    ]);
  };

  const handleNext = () => {
    setCurrentRange(([start, end]) => [
      Math.min(start + 6, 6),
      Math.min(end + 6, 11),
    ]);
  };

  const [rangeStart, rangeEnd] = currentRange;

  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering tasks
  const [progressFilter, setProgressFilter] = useState(0); // Progress filter state

  return (
    <div className="p-4 bg-gray-100">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-4">
        <motion.button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={rangeStart === 0}
          whileHover={{ scale: 1.1 }} // Animation on hover
          whileTap={{ scale: 0.9 }} // Animation on click
        >
          &lt;
        </motion.button>
        <h2 className="text-lg font-semibold merienda-title">Task Management</h2>
        <motion.button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={rangeEnd === 11}
          whileHover={{ scale: 1.1 }} // Animation on hover
          whileTap={{ scale: 0.9 }} // Animation on click
        >
          &gt;
        </motion.button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        className="p-2 border rounded mb-4 w-full"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Progress Filter */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">
          Filter by Progress: {progressFilter}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={progressFilter}
          onChange={(e) => setProgressFilter(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Month Labels with Task Name Title */}
      <div className="flex items-center mb-4">
        <div className="w-1/5 text-center text-sm font-medium text-gray-700">
          Task Name
        </div>
        {months.slice(rangeStart, rangeEnd + 1).map((month, index) => (
          <div
            key={index}
            className="flex-1 text-center text-sm font-medium text-gray-700"
          >
            {month}
          </div>
        ))}
      </div>

      {/* Tasks */}
      <div className="space-y-4">
        {tasks
          .filter((task) => {
            const startMonth = getMonthIndex(task.startDate);
            const endMonth = getMonthIndex(task.endDate);
            return (
              (startMonth >= rangeStart && startMonth <= rangeEnd) ||
              (endMonth >= rangeStart && endMonth <= rangeEnd)
            );
          })
          .filter((task) => task.name.toLowerCase().includes(searchTerm.toLowerCase())) // Filter tasks by name
          .filter((task) => task.progress >= progressFilter) // Filter tasks by progress
          .map((task) => (
            <motion.div
  key={task.id}
  className="flex items-center space-x-4"
  initial={{ opacity: 0, scale: 0.8 }} // Initial state
  animate={{ opacity: 1, scale: 1 }} // Animation on render
  transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition
  exit={{ opacity: 0, scale: 0.8 }} // Exit animation
>
  {/* Task Name */}
  <div className="w-1/5 text-sm font-medium text-gray-800">
    <div className="flex items-center space-x-2">
      <div className="bg-yellow-100 p-2 rounded-full shadow-sm">{task.name}</div>
      {/* Assigned Users */}
      <div className="flex items-center space-x-2">
        {task.assignedMembers?.map((member) => (
          <FaUser key={member.id} className="text-blue-500" title={member.name} />
        ))}
      </div>
    </div>
  </div>

  {/* Task Bar */}
  <div className="relative w-4/5 h-8 bg-gray-200 rounded-full">
    <motion.div
      className="absolute h-8 rounded-full"
      style={{
        backgroundColor: task.color || "#4CAF50",
        width: `${calculateWidth(task.startDate, task.endDate, rangeStart, rangeEnd)}%`,
        left: `${calculateLeftPosition(task.startDate, rangeStart, rangeEnd)}%`,
      }}
      initial={{ width: 0 }}
      animate={{
        width: `${calculateWidth(task.startDate, task.endDate, rangeStart, rangeEnd)}%`,
      }}
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth width transition
    >
      <motion.div
        className="h-8 bg-gray-700 opacity-50 rounded-full"
        style={{ width: `${task.progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${task.progress}%` }}
        transition={{
          duration: 1.5, // Smooth progress bar animation
          ease: "easeInOut",
        }}
      >
        {/* Display the progress percentage on the colored portion */}
        <div className="absolute inset-0 flex justify-center items-center text-white font-semibold">
          {task.progress}%
        </div>
      </motion.div>
    </motion.div>
  </div>
</motion.div>

          ))}
      </div>
    </div>
  );
};

export default GanttChart;

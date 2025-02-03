import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";

const taskData = [
  { id: 1, name: "Web Designing", progress: 35, projectName: "Web Designing" },
  { id: 2, name: "Project Beta", progress: 65, projectName: "Mobile App" },
  { id: 3, name: "Project Gamma", progress: 25, projectName: "Dashboard" },
  { id: 4, name: "Project Delta", progress: 75, projectName: "Web Designing" },
  { id: 5, name: "Login Page", progress: 75, projectName: "Web Designing" },
  { id: 6, name: "Homepage", progress: 75, projectName: "Web Designing" },
  { id: 7, name: "Navbar", progress: 75, projectName: "Web Designing" },
  { id: 8, name: "Dashboard", progress: 100, projectName: "Web Designing" },
];

const ProgressBarGraph = ({ selectedProject }) => {
  const selectedTasks = taskData.filter((task) => task.projectName === selectedProject);

  const chartData = selectedTasks.map((task) => ({
    name: task.name,
    progress: task.progress,
  }));

  return (
    <motion.div
      className="p-2 bg-white rounded-2xl max-w-4xl mx-auto hover: transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title with an Icon */}
      <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center justify-center gap- merienda-title">
        📊 {selectedProject} - Progress
      </h2>

      {/* Animated Chart Container */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 p-4"
      >
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData} barSize={45}>
            <XAxis
              dataKey="name"
              stroke="#555"
              tick={{ fontSize: 12, fill: "#444" }}
              angle={-30}
              textAnchor="end"
            />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "#444" }} />
            <Tooltip cursor={{ fill: "rgba(200,200,200,0.2)" }} />
            <Legend />
            <Bar
              dataKey="progress"
              fill="url(#colorGradient)"
              radius={[10, 10, 0, 0]}
            />
            {/* Gradient Color for Bars */}
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0.6} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};

export default ProgressBarGraph;

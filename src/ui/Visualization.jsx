import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProgressHeatmap from "./ProgressHeatmap";
import TimelineView from "./ProgressBarGraph";
import PieChart from "./PieChart";
import SunburstChart from "./SunburstChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const completionPercentage = 68;
const Visualization = () => {
  const taskData = [
    { name: "John", value: 5 },
    { name: "Sarah", value: 3 },
    { name: "Alex", value: 2 },
  ];

  const timelineData = {
    groups: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
    ],
    items: [
      {
        id: 1,
        group: 1,
        title: "Research Phase",
        start_time: new Date().getTime(),
        end_time: new Date().setDate(new Date().getDate() + 10),
      },
      {
        id: 2,
        group: 2,
        title: "Development Phase",
        start_time: new Date().setDate(new Date().getDate() + 10),
        end_time: new Date().setDate(new Date().getDate() + 30),
      },
    ],
  };

  const projects = ["Web Designing", "Mobile App", "Dashboard"];
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar (Fixed but responsive) */}
      <div className="fixed z-10">
        <Sidebar />
      </div>

      {/* Main Content (Responsive without unnecessary padding) */}
      <div className="flex-1 p-6 bg-blue-100 md:pl-20 md:mt-0 mt-12">
        <h2 className="text-3xl font-bold mb-6 merienda-title">Project Visualizations</h2>

        {/* Project Selection Dropdown */}
        <div className="mb-6">
          <label htmlFor="project-select" className="text-lg mr-4 font-semibold merienda-title">
            Select a Project:
          </label>
          <select
            id="project-select"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {projects.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>
        </div>

        {/* Responsive Visualization Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <TimelineView selectedProject={selectedProject} data={timelineData} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ProgressHeatmap selectedProject={selectedProject} />
          </div>
        </div>

        {/* PieChart and SunburstChart Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <PieChart data={taskData[selectedProject]} />
            <div className="mt-4 flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
  {/* Circular Progress */}
  <div className="w-24">
    <CircularProgressbar
      value={completionPercentage}
      text={`${completionPercentage}%`}
      styles={buildStyles({
        textColor: "#333",
        pathColor: "#4CAF50",
        trailColor: "#ddd",
      })}
    />
    <p className="text-sm text-center mt-2 text-gray-600 merienda-title">Project Progress</p>
  </div>

  {/* Text & Icons on the Right */}
  <div className="ml-4 text-gray-700">
    <h4 className="text-lg font-semibold flex items-center">
      🎯 Goal: <span className="ml-2 text-blue-500">Complete Phase 1</span>
    </h4>
    
    <p className="text-sm flex items-center mt-2">
      ⏳ <span className="ml-2">Estimated Completion: <strong>2 weeks</strong></span>
    </p>
    
    <p className="text-sm flex items-center mt-2">
      📌 <span className="ml-2">Next Milestone: <strong>Final Testing</strong></span>
    </p>
    
    <p className="text-sm flex items-center mt-2 text-green-600 font-semibold">
      🚀 <span className="ml-2">Keep pushing! Almost there!</span>
    </p>
  </div>
</div>

          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <SunburstChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualization;

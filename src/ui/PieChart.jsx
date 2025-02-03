import React from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#F78265", "#8A56F7", "#56F78A"];

// Updated project phase data with week-wise data
const projectPhaseData = [
  { project: "Project A", Planning: 3, Development: 7, Testing: 4, Deployment: 2, BugFixing: 3, Documentation: 1 },
  { project: "Project B", Planning: 4, Development: 8, Testing: 3, Deployment: 3, BugFixing: 2, Documentation: 2 },
  { project: "Project C", Planning: 5, Development: 6, Testing: 4, Deployment: 2, BugFixing: 4, Documentation: 2 },
];

const CustomRadarChart = ({ data = projectPhaseData }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-gray-500 text-center">No data available</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-1 w-600 max-w-lg mx-auto border border-black">
      <h3 className="text-lg font-semibold text-center mb-2 text-gray-700 merienda-title">Project Phase Distribution (Week-wise)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="project" />
          <PolarRadiusAxis />
          <Tooltip />
          <Legend />
          <Radar name="Planning" dataKey="Planning" stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.6} />
          <Radar name="Development" dataKey="Development" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.6} />
          <Radar name="Testing" dataKey="Testing" stroke={COLORS[2]} fill={COLORS[2]} fillOpacity={0.6} />
          <Radar name="Deployment" dataKey="Deployment" stroke={COLORS[3]} fill={COLORS[3]} fillOpacity={0.6} />
          <Radar name="BugFixing" dataKey="BugFixing" stroke={COLORS[4]} fill={COLORS[4]} fillOpacity={0.6} />
          <Radar name="Documentation" dataKey="Documentation" stroke={COLORS[5]} fill={COLORS[5]} fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomRadarChart;

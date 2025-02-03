import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FaDesktop, FaMobileAlt, FaTachometerAlt } from 'react-icons/fa';

// Sample Data for Weekly Progress (week-wise for each project)
const data = [
  { week: 'Week 1', 'Web Designing': 0, 'Mobile App': 0, Dashboard: 5 },
  { week: 'Week 2', 'Web Designing': 40, 'Mobile App': 50, Dashboard: 50 },
  { week: 'Week 3', 'Web Designing': 55, 'Mobile App': 70, Dashboard: 45 },
  { week: 'Week 4', 'Web Designing': 65, 'Mobile App': 80, Dashboard: 55 },
  { week: 'Week 5', 'Web Designing': 75, 'Mobile App': 90, Dashboard: 65 },
  { week: 'Week 6', 'Web Designing': 85, 'Mobile App': 95, Dashboard: 75 },
  { week: 'Week 7', 'Web Designing': 90, 'Mobile App': 100, Dashboard: 85 },
  { week: 'Week 8', 'Web Designing': 100, 'Mobile App': 100, Dashboard: 100 },
];

// Custom Tooltip to show project progress with icons
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-3 rounded shadow-lg">
        <h4 className="text-lg font-lg">{`Week: ${payload[0].payload.week}`}</h4>
        <div className="flex items-center">
          <FaDesktop className="mr-2" />
          <span>{`Web Designing: ${payload[0].value}%`}</span>
        </div>
        <div className="flex items-center">
          <FaMobileAlt className="mr-2" />
          <span>{`Mobile App: ${payload[1].value}%`}</span>
        </div>
        <div className="flex items-center">
          <FaTachometerAlt className="mr-2" />
          <span>{`Dashboard: ${payload[2].value}%`}</span>
        </div>
      </div>
    );
  }
  return null;
};

// LineChart component to visualize week-wise progress of projects
const ProjectProgressLineChart = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-xl shadow-lg">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-2xl font-semibold mb-6 merienda-title">Weekwise Progress of Projects</h2>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="week" tick={{ fill: '#fff', fontWeight: 'bold' }} />
            <YAxis tick={{ fill: '#fff' }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              iconSize={14}
              layout="horizontal"
              verticalAlign="top"
              align="center"
            />
            <Line
              type="monotone"
              dataKey="Web Designing"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={3}
              isAnimationActive={true}
              animationDuration={1500}
            />
            <Line
              type="monotone"
              dataKey="Mobile App"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
              strokeWidth={3}
              isAnimationActive={true}
              animationDuration={1500}
            />
            <Line
              type="monotone"
              dataKey="Dashboard"
              stroke="#FF6347"
              activeDot={{ r: 8 }}
              strokeWidth={3}
              isAnimationActive={true}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectProgressLineChart;

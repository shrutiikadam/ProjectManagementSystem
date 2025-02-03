import React from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import ProjectCard from './ProjectCard';
import CalendarComponent from './Calendar'; // Import Calendar component
import Tasks from './Tasks'; // Import the Tasks component
import { FaCheckCircle, FaHourglassStart, FaProjectDiagram } from 'react-icons/fa';

// Sample task data
const tasks = [
  { name: 'Design Landing Page', description: 'Create a responsive landing page.', startDate: '2025-01-01', deadline: '2025-03-30', status: 'In Progress' },
  { name: 'Develop API Endpoints', description: 'Build API endpoints.', startDate: '2025-01-05', deadline: '2025-09-15', status: 'Not Started' },
  { name: 'Testing & QA', description: 'Test the application.', startDate: '2025-07-10', deadline: '2025-10-05', status: 'Pending' },
];

const projects = [
  { startDate: 'July 2, 2025', endDate: 'Sep 28, 2025', name: 'Web Designing', category: 'Prototyping', progress: 90, daysLeft: 2, teamMembersCount: 5 },
  { startDate: 'July 5, 2025', endDate: 'Sep 28, 2025', name: 'Mobile App', category: 'Shopping', progress: 30, daysLeft: 21, teamMembersCount: 4 },
  { startDate: 'July 10, 2025', endDate: 'Sep 28, 2025', name: 'Dashboard', category: 'Medical', progress: 50, daysLeft: 14, teamMembersCount: 3 },
  { startDate: 'July 15, 2025', endDate: 'Sep 28, 2025', name: 'Web Designing', category: 'Wireframing', progress: 20, daysLeft: 21, teamMembersCount: 2 },
];

function Dashboard() {
  // Calculating project counts
  const totalProjects = projects.length;
  const completedProjects = projects.filter(project => project.progress === 100).length;
  const upcomingProjects = projects.filter(project => project.progress < 100).length;

  // Current date
  const today = new Date();

  // Filter tasks based on startDate and deadline
  const filteredTasks = tasks.filter(task => {
    const startDate = new Date(task.startDate);
    const deadline = new Date(task.deadline);
    return startDate <= today && deadline >= today;
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed z-50">
        <Sidebar />
      </div>

      <div className="flex-1 p-4 md:ml-16 md:mt-15 gap-4 flex bg-blue-100 flex-col lg:flex-row mt-30 md:mt-0 mt-12">
        <div className="flex-1 flex flex-col space-y-6 border border-gray p-8 rounded-3xl bg-white">
          {/* Search Bar */}
          <SearchBar />

          {/* Project Summary Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 merienda-title">Projects Overview</h2>
            <div className="flex space-x-8">
              <div className="text-lg text-gray-800">
                <div className="text-4xl font-bold">{totalProjects}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  Total <FaProjectDiagram className="ml-2 text-gray-600" />
                </div>
              </div>
              <div className="text-lg text-gray-800">
                <div className="text-4xl font-bold">{completedProjects}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  Completed <FaCheckCircle className="ml-2 text-green-600" />
                </div>
              </div>
              <div className="text-lg text-gray-800">
                <div className="text-4xl font-bold">{upcomingProjects}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  Upcoming <FaHourglassStart className="ml-2 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col border p-4 bg-white rounded-3xl overflow-hidden">
          {/* Calendar */}
          <CalendarComponent />

          {/* Tasks Section */}
          <div className="mt-6 philosopher-regular">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 merienda-title">Today's Tasks</h2>
            {filteredTasks.map((task, index) => (
              <Tasks key={index} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { useParams } from "react-router-dom";
import Stack from "./Stack"; // Assuming Stack handles the task cards
import GanttChart from "./GanttChart"; // GanttChart component to show progress
import Sidebar from "./Sidebar";
import { FaCheckCircle, FaRegCircle, FaTasks } from "react-icons/fa"; // Importing icons

const taskData = [
  
    {
      "id": 1,
      "name": "Web Designing",
      "description": "Most important project, it involves designing the entire web layout, UI components, and improving the user experience for the platform.",
      "color": "pink",
      "category": "Development",
      "progress": 35,
      "startDate": "2025-01-01",
      "endDate": "2025-02-01",
      "teamMembersCount": 4,
      "projectName": "Web Designing",
      "priority": "High",
      "budget": "15000",
      "stakeholders": ["Alice", "Bob"]
    },
    {
      "id": 2,
      "name": "Project Beta",
      "description": "A mobile app development project focused on creating a beta version for internal testing.",
      "color": "blue",
      "category": "Design",
      "progress": 65,
      "startDate": "2025-02-01",
      "endDate": "2025-03-01",
      "teamMembersCount": 6,
      "projectName": "Mobile App",
      "priority": "Medium",
      "budget": "20000",
      "stakeholders": ["Charlie", "David"]
    },
    {
      "id": 3,
      "name": "Project Gamma",
      "description": "Testing project for new dashboard features to improve analytics visualization.",
      "color": "yellow",
      "category": "Testing",
      "progress": 25,
      "startDate": "2025-01-10",
      "endDate": "2025-02-10",
      "teamMembersCount": 3,
      "projectName": "Dashboard",
      "priority": "Low",
      "budget": "5000",
      "stakeholders": ["Eve"]
    },
    {
      "id": 4,
      "name": "Project Delta",
      "description": "Research project to develop new web technologies and design patterns.",
      "color": "violet",
      "category": "Research",
      "progress": 75,
      "startDate": "2025-07-01",
      "endDate": "2025-08-01",
      "teamMembersCount": 2,
      "projectName": "Web Designing",
      "priority": "High",
      "budget": "10000",
      "stakeholders": ["Frank"]
    },
    {
      "id": 5,
      "name": "Login Page",
      "description": "Developing the login page UI for the mobile app.",
      "color": "orange",
      "category": "Research",
      "progress": 75,
      "startDate": "2025-02-01",
      "endDate": "2025-03-01",
      "teamMembersCount": 3,
      "projectName": "Web Designing",
      "priority": "Medium",
      "budget": "8000",
      "stakeholders": ["Grace"]
    },
    {
      "id": 6,
      "name": "Homepage",
      "description": "Research and development of the homepage layout and features for the mobile app.",
      "color": "green",
      "category": "Research",
      "progress": 75,
      "startDate": "2025-03-01",
      "endDate": "2025-05-01",
      "teamMembersCount": 2,
      "projectName": "Web Designing",
      "priority": "Low",
      "budget": "7000",
      "stakeholders": ["Henry"]
    },
    {
      "id": 7,
      "name": "Navbar",
      "description": "Research and design of the navigation bar for better usability on mobile devices.",
      "color": "brown",
      "category": "Research",
      "progress": 75,
      "startDate": "2025-08-01",
      "endDate": "2025-09-01",
      "teamMembersCount": 4,
      "projectName": "Web Designing",
      "priority": "High",
      "budget": "10000",
      "stakeholders": ["Ivy", "Jack"]
    },
    {
      "id": 8,
      "name": "Dashboard",
      "description": "Design and develop the dashboard UI for the mobile app.",
      "color": "gray",
      "category": "Research",
      "progress": 100,
      "startDate": "2025-01-02",
      "endDate": "2025-01-01",
      "teamMembersCount": 6,
      "projectName": "Web Designing",
      "priority": "Medium",
      "budget": "12000",
      "stakeholders": ["Kenny"]
    },
    {
      "id": 9,
      "name": "User Authentication",
      "description": "Mobile app feature that implements user authentication with Firebase.",
      "color": "red",
      "category": "Development",
      "progress": 50,
      "startDate": "2025-02-10",
      "endDate": "2025-03-15",
      "teamMembersCount": 5,
      "projectName": "Mobile App",
      "priority": "High",
      "budget": "15000",
      "stakeholders": ["Lily"]
    },
    {
      "id": 10,
      "name": "Mobile App Performance",
      "description": "Optimizing performance for the mobile app, including reducing load times and enhancing smoothness.",
      "color": "purple",
      "category": "Optimization",
      "progress": 20,
      "startDate": "2025-03-01",
      "endDate": "2025-05-01",
      "teamMembersCount": 4,
      "projectName": "Mobile App",
      "priority": "Medium",
      "budget": "18000",
      "stakeholders": ["Mike"]
    },
    {
      "id": 11,
      "name": "Push Notification System",
      "description": "Implementing push notifications for the mobile app for important updates and notifications.",
      "color": "lightblue",
      "category": "Development",
      "progress": 30,
      "startDate": "2025-03-05",
      "endDate": "2025-04-01",
      "teamMembersCount": 3,
      "projectName": "Mobile App",
      "priority": "Low",
      "budget": "7000",
      "stakeholders": ["Nancy"]
    },
    {
      "id": 12,
      "name": "Offline Mode",
      "description": "Developing offline functionality for the mobile app to allow users to use it without an internet connection.",
      "color": "brown",
      "category": "Development",
      "progress": 40,
      "startDate": "2025-04-01",
      "endDate": "2025-05-01",
      "teamMembersCount": 5,
      "projectName": "Dashboard",
      "priority": "High",
      "budget": "20000",
      "stakeholders": ["Oscar"]
    },
    {
      "id": 13,
      "name": "Project Delta",
      "description": "Research project to develop new web technologies and design patterns.",
      "color": "violet",
      "category": "Research",
      "progress": 75,
      "startDate": "2025-07-01",
      "endDate": "2025-08-01",
      "teamMembersCount": 2,
      "projectName": "Dashboard",
      "priority": "High",
      "budget": "10000",
      "stakeholders": ["Frank"]
    },
  
  
];

function TaskPage() {
  const { projectName } = useParams();

  const filteredTasks = taskData.filter((task) => task.projectName === projectName);

  // Calculate total, in-progress, and completed tasks
  const totalTasks = filteredTasks.length;
  const inProgressTasks = filteredTasks.filter((task) => task.progress > 0 && task.progress < 100).length;
  const completedTasks = filteredTasks.filter((task) => task.progress === 100).length;

  return (
    <div className="flex h-screen">
      {/* Left side: Fixed Sidebar */}
      <div className="fixed z-10">
        <Sidebar />
      </div>

      {/* Right side: Content */}
      <div className="md:ml-16 w-full p-4 md:mt-0 mt-12">
        <h1 className="text-xl font-bold mb-4"> - {projectName}</h1>
        <div className="md:flex">

          {/* Task Overview Card */}
          <div className="w-full md:w-1/3 pr-4 mb-4 lg:mb-0">
            <div className="bg-[#C4D9FF] p-3 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 merienda-title philosopher-regular">Task Overview</h2>
              <div className="space-y-2">
                {/* Total Tasks */}
                <div className="flex items-center ">
                  <FaTasks className="text-xl text-gray-500 mr-2" />
                  <span className="text-lg philosopher-regular">Total Tasks: {totalTasks}</span>
                </div>
                
                {/* In-Progress Tasks */}
                <div className="flex items-center">
                  <FaRegCircle className="text-xl text-yellow-500 mr-2" />
                  <span className="text-lg philosopher-regular">In Progress: {inProgressTasks}</span>
                </div>
                
                {/* Completed Tasks */}
                <div className="flex items-center">
                  <FaCheckCircle className="text-xl text-green-500 mr-2" />
                  <span className="text-lg philosopher-regular">Completed: {completedTasks}</span>
                </div>
              </div>
            </div>
            {/* Stack Component */}
            <Stack tasksData={filteredTasks} />
          </div>
    
          {/* Gantt Chart */}
          <div className="w-full md:w-2/3 bg-[#E8F9FF] rounded-lg shadow-lg p-4">
            <GanttChart tasks={filteredTasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

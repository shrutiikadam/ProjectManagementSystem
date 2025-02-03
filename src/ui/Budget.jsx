import React, { useState } from "react";
import { ExpenseTracking } from "./ExpenseTracking";
import { CostBreakdown } from "./CostBreakdown";
import { ReportExport } from "./ReportExport";
import LineChart from "./BudgetLineChart";
import { BudgetOverview } from "./BudgetOverview";
import Sidebar from "./Sidebar";
import { FaChartPie, FaChartBar, FaFileExport, FaProjectDiagram, FaRegEdit } from "react-icons/fa";
import BudgetSimulator from "./BudgetSimulator";

const dummyData = {
  "Project A": {
    budgetPlanning: 100000,
    expenses: [
      { id: 1, category: "API Services", amount: 20000, date: "2024-01-10" },
      { id: 2, category: "Online Tools Subscription", amount: 15000, date: "2024-01-15" },
      { id: 3, category: "Cloud Services", amount: 30000, date: "2024-01-20" },
    ],
    budgetData: [
      { week: "Week 1", planned: 20000, actual: 22000 },
      { week: "Week 2", planned: 25000, actual: 27000 },
      { week: "Week 3", planned: 30000, actual: 29000 },
    ],
    phases: [
      { phase: "Design", cost: 10000, resources: 3 },
      { phase: "Development", cost: 25000, resources: 5 },
      { phase: "Testing", cost: 15000, resources: 2 },
    ],
  },
  "Project B": {
    budgetPlanning: 150000,
    expenses: [
      { id: 1, category: "API Services", amount: 50000, date: "2024-01-12" },
      { id: 2, category: "Cloud Storage", amount: 20000, date: "2024-01-20" },
      { id: 3, category: "Domain and Hosting", amount: 30000, date: "2024-01-25" },
    ],
    budgetData: [
      { week: "Week 1", planned: 40000, actual: 45000 },
      { week: "Week 2", planned: 50000, actual: 52000 },
      { week: "Week 3", planned: 60000, actual: 61000 },
    ],
    phases: [
      { phase: "Design", cost: 20000, resources: 4 },
      { phase: "Development", cost: 50000, resources: 8 },
      { phase: "Testing", cost: 25000, resources: 3 },
    ],
  },
};

function Budget() {
  const [selectedProject, setSelectedProject] = useState("Project A");
  const projectData = dummyData[selectedProject];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-16 bg-blue-100 md:mt-0 mt-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 merienda-title mb-6">
          Budget Management
        </h1>

        {/* Project Selection & Export */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex items-center gap-2">
            <FaProjectDiagram className="text-xl text-blue-500" />
            <select
              className="p-2 border border-gray-300 rounded-md w-48 focus:ring-2 focus:ring-blue-500"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              {Object.keys(dummyData).map((project) => (
                <option key={project} value={project}>
                  {project}
                </option>
              ))}
            </select>
          </div>

          <button className="flex items-center bg-black text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition-all philosopher-regular">
            <FaFileExport className="mr-2" /> Export Report
          </button>
        </div>

        {/* Charts & Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <BudgetOverview budget={projectData.budgetPlanning} expenses={projectData.expenses} />

            <div className="p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center mb-3">
                <FaChartBar className="text-xl text-green-500 mr-2" />
                <h2 className="text-xl font-semibold merienda-title">Expense Tracking</h2>
              </div>
              <ExpenseTracking expenses={projectData.expenses} />
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center mb-3">
                <FaChartBar className="text-xl text-purple-500 mr-2" />
                <h2 className="text-xl font-semibold merienda-title">Budget Progress</h2>
              </div>
              <LineChart budgetData={projectData.budgetData} />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center mb-3">
                <FaChartPie className="text-xl text-yellow-500 mr-2" />
                <h2 className="text-xl font-semibold merienda-title">Cost Breakdown</h2>
              </div>
              <CostBreakdown expenses={projectData.expenses} />
            </div>

            {/* Budget Simulator Section */}
            <div className="p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center mb-3">
                <FaRegEdit className="text-xl text-purple-500 mr-2" />
                <h2 className="text-xl font-semibold merienda-title">Budget Simulator</h2>
              </div>
              <BudgetSimulator budget={projectData.budgetPlanning} expenses={projectData.expenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;

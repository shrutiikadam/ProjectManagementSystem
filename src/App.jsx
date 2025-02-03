import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './ui/Dashboard';
import TaskPage from './ui/TaskPage'; // Import TaskPage component
import Visualization from './ui/Visualization';
import Budget from './ui/Budget';
function App() {
  const projectData = [
    { task: "Planning", progress: 75 },
    { task: "Development", progress: 40 },
    { task: "Testing", progress: 50 },
    { task: "Deployment", progress: 90 },
    { task: "BugFixing", progress: 60 },
    { task: "Documentation", progress: 20 },
  ];
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks/:projectName" element={<TaskPage />} /> {/* Add route for TaskPage */}
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </Router>
  );
}

export default App;

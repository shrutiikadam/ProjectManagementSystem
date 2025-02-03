import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { motion } from "framer-motion";

const COLORS = {
  planned: "#4BC0C0",
  actual: "#FF6384",
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-3 border border-gray-200 text-sm">
        <p className="text-gray-700 font-semibold">{payload[0].payload.week}</p>
        <p className="text-teal-500">Planned: ${payload[0].value}</p>
        <p className="text-red-500">Actual: ${payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const BudgetLineChart = ({ budgetData }) => {
  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={budgetData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="planned"
            stroke={COLORS.planned}
            strokeWidth={3}
            dot={{ fill: COLORS.planned, r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="actual"
            stroke={COLORS.actual}
            strokeWidth={3}
            dot={{ fill: COLORS.actual, r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
export default BudgetLineChart;
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { FaUtensils, FaCar, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#7E57C2"];

const categoryIcons = {
  Food: <FaUtensils className="text-red-400 text-lg" />,
  Transport: <FaCar className="text-blue-400 text-lg" />,
  Shopping: <FaShoppingCart className="text-yellow-400 text-lg" />,
  Bills: <FaMoneyBillWave className="text-green-400 text-lg" />,
};

export const CostBreakdown = ({ expenses }) => {
  const data = expenses.map((expense, index) => ({
    name: expense.category,
    value: expense.amount,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >

      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              fill="#8884d8"
              paddingAngle={5}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Category List */}
      <div className="mt-4 space-y-2">
        {expenses.map((expense, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-3">
              {categoryIcons[expense.category] || (
                <FaMoneyBillWave className="text-gray-400 text-lg" />
              )}
              <span className="text-gray-700 font-medium">{expense.category}</span>
            </div>
            <span className="text-gray-800 font-semibold">${expense.amount}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

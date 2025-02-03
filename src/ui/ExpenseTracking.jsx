import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#36A2EB"];

// Gradient function for the bar fill
const renderGradient = (id) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor={COLORS[0]} stopOpacity={0.8} />
      <stop offset="100%" stopColor={COLORS[1]} stopOpacity={0.8} />
    </linearGradient>
  </defs>
);

export const ExpenseTracking = ({ expenses }) => {
  const data = expenses.map((expense, index) => ({
    category: expense.category,
    amount: expense.amount,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={40}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            stroke="#555"
            tick={{ fontSize: 12, fontFamily: 'Poppins, sans-serif', angle: -35, textAnchor: 'end' }}
            height={70}
          />
          <YAxis stroke="#555" />
          <Tooltip />
          <Legend />
          
          {/* Define the gradient fill */}
          {renderGradient("gradient1")}

          <Bar dataKey="amount" radius={[10, 10, 0, 0]} fill="url(#gradient1)" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

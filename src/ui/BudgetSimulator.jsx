import React, { useState } from "react";


const BudgetSimulator = ({ budget, expenses }) => {
  const [adjustedExpenses, setAdjustedExpenses] = useState(expenses);

  const handleExpenseChange = (id, amount) => {
    const newExpenses = adjustedExpenses.map((expense) =>
      expense.id === id ? { ...expense, amount: parseFloat(amount) } : expense
    );
    setAdjustedExpenses(newExpenses);
  };

  const totalExpenses = adjustedExpenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = budget - totalExpenses;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Interactive Budget Simulator</h3>
      {adjustedExpenses.map((expense) => (
        <div key={expense.id} className="mb-4">
          <label className="text-sm">{expense.category}</label>
          <input
            type="number"
            value={expense.amount}
            onChange={(e) => handleExpenseChange(expense.id, e.target.value)}
            className="p-2 border rounded-md w-full mt-1"
          />
        </div>
      ))}
      <div className="mt-4">
        <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
        <p>Remaining Budget: ${remainingBudget.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BudgetSimulator;

import React from "react";

export const BudgetOverview = ({ budget, expenses }) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const variance = budget - totalExpenses;
  const varianceColor = variance < 0 ? "text-red-600" : "text-green-600";

  return (
    <div className="p-2 bg-white rounded-xl shadow-md mb-2">
      <div className="flex justify-between items-center">
        {/* Budget Planning */}
        <div className="w-1/2 p-2 border-r">
          <h3 className="text-lg font-lg merienda-title">Alloted Budget</h3>
          <p className="text-lg"> ${budget}</p>
        </div>

        {/* Variance Analysis */}
        <div className="w-1/2 p-2">
          <h3 className="text-md font-lg merienda-title">Variance Analysis</h3>
          <p className={`text-md ${varianceColor}`}>
            {variance < 0 ? "Over Budget" : "Under Budget"}: ${Math.abs(variance)}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ReportExport = () => {
    const handleExport = () => {
      alert("Exporting report...");
    };
  
    return (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600  mb-2 md:mb-0"
          onClick={handleExport}
        >
          Export Report
        </button>

    );
  };
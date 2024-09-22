import React from "react";

const Pagination = ({
  currentPage,
  tasksPerPage,
  totalTasks,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalTasks / tasksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center mt-6">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`mx-1 px-3 py-1 rounded-md ${
            currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

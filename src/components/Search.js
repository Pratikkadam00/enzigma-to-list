import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 rounded-md mb-4 w-full"
    />
  );
};

export default Search;

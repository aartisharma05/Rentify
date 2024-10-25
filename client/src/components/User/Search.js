import React from "react";

const Search = () => {
  return (
    <>
      <div className="border-2 border-gray-600 rounded-full p-2 m-2">
        <span className="flex justify-between items-center">
          <input
            type="search"
            placeholder="Area"
            className="w-3/4 p-1 m-1 rounded-full border-2 border-gray-400"
          />
          <input
            type="search"
            placeholder="Bedrooms"
            className="w-3/4 p-1 m-1 rounded-full border-2 border-gray-400"
          />
          <input
            type="search"
            placeholder="Bathrooms"
            className="w-3/4 p-1 m-1 rounded-full border-2 border-gray-400"
          />
          <input
            type="search"
            placeholder="Poi"
            className="w-3/4 p-1 m-1 rounded-full border-2 border-gray-400"
          />
          <button className="bg-red-600 p-4 m-2 text-white rounded-full">
            Search
          </button>
        </span>
      </div>
    </>
  );
};

export default Search;

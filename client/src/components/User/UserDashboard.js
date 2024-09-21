import React, { useState, useEffect } from "react";
import Header from "../Header";
import Search from "./Search";
const UserDashboard = () => {
  return (
    <div>
      <Header />
      {/* <h1 className="border-2 border-dotted border-blue-600 p-2 m-2 rounded-lg text-center font-bold text-4xl">
        User Dashboard
      </h1> */}

      <div>
        <div>
          <span className="text-3xl">
            <p className="text-center">
              Find a home you'll{" "}
              <b>
                <i>love</i>
              </b>
            </p>
          </span>
        </div>
      </div>

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

      <Search />
    </div>
  );
};

export default UserDashboard;

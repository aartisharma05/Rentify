import React from "react";
import SellerCard from "./SellerCard";
const UserDashboard = () => {
  return (
    <>
      <h1 className="border-2 border-dotted border-gray-600 p-2 m-2 rounded-lg text-center font-bold text-4xl">
        User Dashboard
      </h1>

      <span className="flex flex-col items-center justify-center">
        <SellerCard />
      </span>
    </>
  );
};

export default UserDashboard;

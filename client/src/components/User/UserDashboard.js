import React from "react";
import Header from "../Header";
import Property from "./Property";
import Search from "./Search";
const UserDashboard = () => {
  return (
    <div>
      <Header />

      <div>
        <div className=" py-4 ">
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

      <Search />
      <div>
        <h1 className="text-left text-2xl">Popular Owner Properties</h1>
        <Property />
      </div>
    </div>
  );
};

export default UserDashboard;

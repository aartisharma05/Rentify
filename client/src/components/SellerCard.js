import { useState, useEffect } from "react";

const SellerCard = () => {
  return (
    <>
      <div className="container border-2 flex flex-col justify-start w-1/4 h-1/4 m-2 p-2 rounded-lg">
        <span className="">PropertyImage</span>
        <span>
          <label className="font-semibold">Area</label>
        </span>
        <span>
          <label className="font-semibold">No.ofBedrooms</label>
        </span>
        <span>
          <label className="font-semibold">Bathrooms</label>
        </span>
        <span>
          <label className="font-semibold">
            {" "}
            Hospitals and colleges Nearby
          </label>
        </span>
      </div>
    </>
  );
};

export default SellerCard;

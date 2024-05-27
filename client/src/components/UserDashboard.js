// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SellerCard from "./SellerCard";

// const UserDashboard = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/properties");
//       setProperties(response.data);
//     } catch (error) {
//       console.error("Error fetching properties:", error);
//     }
//   };

//   return (
//     <>
//       <h1 className="border-2 border-dotted border-gray-600 p-2 m-2 rounded-lg text-center font-bold text-4xl">
//         User Dashboard
//       </h1>

//       <span className="flex flex-col items-start justify-center">
//         <SellerCard properties={properties} />
//       </span>
//     </>
//   );
// };

// export default UserDashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:5000/properties");
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  return (
    <div>
      <h1 className="border-2 border-dotted border-blue-600 p-2 m-2 rounded-lg text-center font-bold text-4xl">
        User Dashboard
      </h1>
      <div className="flex flex-wrap justify-center">
        {properties.map((property) => (
          <div
            key={property._id}
            className="m-2 p-2 border border-gray-300 rounded-lg"
          >
            <img src={property.propertyImg} alt="Property" />
            <div>Area: {property.area}</div>
            <div>Bedrooms: {property.bedrooms}</div>
            <div>Bathrooms: {property.bathrooms}</div>
            <div>POI: {property.poi}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;

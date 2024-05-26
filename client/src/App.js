// client/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/properties");
        setProperties(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Rentify - Where Renting Meets Simplicity</h1>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>
            {property.address} - ${property.rent}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";

const App = () => {
  const [properties, setProperties] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/properties");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setProperties(data); // setProperties with the parsed data
    } catch (error) {
      console.error("There was an error fetching the properties!", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.name} - {property.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

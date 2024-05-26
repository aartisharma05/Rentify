import React, { useState, useEffect } from "react";
import axios from "axios";

const PropertyList = ({ properties, onDelete }) => {
  return (
    <div>
      <h2>Property List</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <div>
              <img src={property.propertyImg} alt="Property" />
            </div>
            <div>Area: {property.area}</div>
            <div>Bedrooms: {property.bedrooms}</div>
            <div>Bathrooms: {property.bathrooms}</div>
            <div>POI: {property.poi}</div>
            <button onClick={() => onDelete(property.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddPropertyForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    id: "",
    propertyImg: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    poi: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setShowModal(false); // Close the modal after adding data
  };

  return (
    <div>
      <button
        className="text-white bg-red-700 rounded-lg m-2 p-2"
        onClick={() => setShowModal(true)}
      >
        Add Property
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content container border-2 border-red-600 shadow-red-400 rounded-lg ">
            <span className="close left-0" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start justify-center"
            >
              <span className="m-2">
                <label className="p-2">Property Image</label>
                <input
                  type="text"
                  name="propertyImg"
                  placeholder="Property Image URL"
                  onChange={handleChange}
                />
              </span>
              <span className="m-2">
                <label className="p-2">Area</label>
                <input
                  type="text"
                  name="area"
                  placeholder="Area"
                  onChange={handleChange}
                />
              </span>

              <span className="m-2">
                <label className="p-2">Bedrooms</label>
                <input
                  type="text"
                  name="bedrooms"
                  placeholder="Bedrooms"
                  onChange={handleChange}
                />
              </span>

              <span className="m-2">
                <label className="p-2">Bathrooms</label>
                <input
                  type="text"
                  name="bathrooms"
                  placeholder="Bathrooms"
                  onChange={handleChange}
                />
              </span>

              <span className="m-2">
                <label className="p-2">POI</label>
                <input
                  type="text"
                  name="poi"
                  placeholder="Points of Interest"
                  onChange={handleChange}
                />
              </span>

              <button
                type="submit"
                className="bg-red-600 text-white font-semibold m-2 p-2 rounded-lg"
              >
                Add Data
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const SellerDashboard = () => {
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

  const handleAddProperty = async (propertyData) => {
    try {
      await axios.post("http://localhost:5000/properties", propertyData);
      fetchProperties();
      console.log("property added");
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  const handleDeleteProperty = async (propertyId) => {
    try {
      await axios.delete(`http://localhost:5000/properties/${propertyId}`);
      fetchProperties();
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div>
      <h1>Seller Dashboard</h1>
      <AddPropertyForm onAdd={handleAddProperty} />
      <PropertyList properties={properties} onDelete={handleDeleteProperty} />
    </div>
  );
};

export default SellerDashboard;

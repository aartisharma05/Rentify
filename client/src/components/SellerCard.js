import React, { useState } from "react";

const SellerCard = ({ properties, onDelete, onUpdate }) => {
  const [formData, setFormData] = useState({
    propertyImg: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    poi: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = (propertyId) => {
    onUpdate(propertyId, formData);
    setIsEditing(false);
    setFormData({
      propertyImg: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      poi: "",
    });
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Properties</h2>
      <ul>
        {properties.map((property) => (
          <li
            key={property._id}
            className="border border-gray-300 p-2 m-2 rounded-lg"
          >
            <div>
              <img src={property.propertyImg} alt="Property" />
            </div>
            <div>Area: {property.area}</div>
            <div>Bedrooms: {property.bedrooms}</div>
            <div>Bathrooms: {property.bathrooms}</div>
            <div>POI: {property.poi}</div>
            {!isEditing ? (
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-yellow-400 text-white font-semibold p-2 rounded-lg mt-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(property._id)}
                  className="bg-red-600 text-white font-semibold p-2 rounded-lg mt-2 mr-2"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div>
                <span>
                  <input
                    type="text"
                    name="propertyImg"
                    placeholder="Property Image URL"
                    onChange={handleChange}
                    value={formData.propertyImg}
                    className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
                  />
                </span>
                <span>
                  <input
                    type="text"
                    name="area"
                    placeholder="Area"
                    onChange={handleChange}
                    value={formData.area}
                    className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
                  />
                </span>
                <span>
                  <input
                    type="text"
                    name="bedrooms"
                    placeholder="Bedrooms"
                    onChange={handleChange}
                    value={formData.bedrooms}
                    className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
                  />
                </span>
                <span>
                  <input
                    type="text"
                    name="bathrooms"
                    placeholder="Bathrooms"
                    onChange={handleChange}
                    value={formData.bathrooms}
                    className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
                  />
                </span>
                <span>
                  <input
                    type="text"
                    name="poi"
                    placeholder="Points of Interest"
                    onChange={handleChange}
                    value={formData.poi}
                    className="m-2 p-1 rounded-lg border-2 hover:border-yellow-400"
                  />
                </span>
                <button
                  onClick={() => handleUpdateSubmit(property._id)}
                  className="bg-green-600 text-white font-semibold p-1 rounded-lg mt-2 mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-red-600 text-white font-semibold p-1 rounded-lg mt-2"
                >
                  Cancel
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerCard;

import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [properties, setProperties] = useState([]);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

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
    <>
      <div className="flex flex-wrap justify-center">
        {properties.map((property) => (
          <div
            key={property._id}
            className="m-2 p-2 border border-gray-300 rounded-lg"
          >
            <img src={property.propertyImg} alt="Property" />
            <div className="flex justify-between items-center">
              <div>
                <div>Area: {property.area}</div>
                <div>Bedrooms: {property.bedrooms}</div>
                <div>Bathrooms: {property.bathrooms}</div>
                <div>POI: {property.poi}</div>
              </div>
              <div>
                <span className="">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={liked ? "red" : "gray"}
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="none"
                      className="size-10 cursor-pointer p-2 m-2"
                      onClick={handleLikeClick}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>

                    <span>{likeCount}</span>
                  </div>
                  <button className="cursor-pointer bg-green-600 p-2 m-2 rounded-lg">
                    I'm Interested
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;

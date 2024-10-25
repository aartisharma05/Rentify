import { useState, useEffect, useContext } from "react";
import { LocationContext } from "../LocationProvider";

const Property = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [properties, setProperties] = useState([]);
  const { latitude, longitude } = useContext(LocationContext);
  const [dataa, setData] = useState({});

  console.log("Latitude:", latitude, "Longitude:", longitude);

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
    if (latitude && longitude) {
      getNearByPropertiesExcludingCurrent(latitude, longitude);
    }
  }, [latitude, longitude]);

  // Generate nearby coordinates within a small range (e.g., 0.2 degrees)
  const generateNearByCoordinates = (lat, lon, numNearBy = 10) => {
    const nearByLocations = [];
    for (let i = 1; i <= numNearBy; i++) {
      const latOffset = (Math.random() - 0.00005) * 0.2; // +/- 0.1 lat variation
      const lonOffset = (Math.random() - 0.00005) * 0.2; // +/- 0.1 lon variation
      const price = Math.random(100, 1000000) + 5000000;
      nearByLocations.push({
        latitude: lat + latOffset,
        longitude: lon + lonOffset,
      });
    }
    return nearByLocations;
  };

  // Fetch properties for each nearby location
  const getNearByPropertiesExcludingCurrent = async (lat, lon) => {
    const nearByLocations = generateNearByCoordinates(lat, lon);

    const promises = nearByLocations.map((location) =>
      getPropertiesAtLocation(location.latitude, location.longitude)
    );

    try {
      const nearByProperties = await Promise.all(promises);

      // Exclude the current location by filtering it out
      const filteredProperties = nearByProperties.filter((property) => {
        return (
          property && !(property.latitude === lat && property.longitude === lon)
        );
      });

      setProperties(filteredProperties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  // Fetch property data for a given location
  const getPropertiesAtLocation = async (latitude, longitude) => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=2`;
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        console.log("data is", data);
        const newData = { ...data };
        setData(newData);
        console.log("dataaa", dataa);
        return {
          latitude,
          longitude,
          address: data.address.county + ", " + data.address.state_district,
        };
      }
    } catch (err) {
      console.error("Error fetching property:", err);
      return null;
    }
  };

  return (
    <>
      <div className="grid grid-cols-4">
        {properties.map((property, index) => (
          <div
            key={index}
            className="m-2 p-2 border border-gray-300 rounded-lg"
          >
            <div className="flex flex-col justify-between items-center">
              <div>
                <label>{property.address}</label>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={liked ? "red" : "gray"}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="none"
                  className="size-10 cursor-pointer p-2 m-2"
                  onClick={handleLikeClick}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span>{likeCount}</span>
                <button className="cursor-pointer bg-red-600 p-2 m-2 rounded-full text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Property;

import { useEffect, useState, useContext } from "react";
import { LocationContext } from "./LocationProvider";

function Header() {
  const [location, setLocation] = useState("");
  const { latitude, longitude } = useContext(LocationContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAddress(latitude, longitude);
    setIsLoading(false);
  }, []);

  const getAddress = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`;

    const response = await fetch(url);
    const data = await response.json();
    console.log("in header1", typeof latitude);
    try {
      if (data) {
        const address = data.address.county;
        console.log("current location: " + address);
        setLocation(address);
      } else {
        console.log("location not found");
      }
    } catch (err) {
      console.log("Error in finding location " + err);
    }
  };
  console.log("location :" + location);

  if (isLoading) {
    return (
      <>
        <div className="bg-red-600 border-2 shadow-lg rounded-lg p-2 sticky top-0">
          <span>
            <small className="font-bold text-3xl text-left p-4 text-white">
              RENTIFY
            </small>
            <p>Loading...</p>
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-red-600 border-2 shadow-lg rounded-lg p-2 sticky top-0">
        <span>
          <small className="font-bold text-3xl text-left p-4 text-white">
            RENTIFY
          </small>
          {!isLoading && (
            <small className=" text-lg text-white"> {location}</small>
          )}
        </span>
      </div>
    </>
  );
}

export default Header;

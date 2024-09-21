import { useEffect, useState } from "react";

function Header() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const p = position.coords;
      console.log("coordinates ", p.latitude, p.longitude);
      getAddress(p.latitude, p.longitude);
      console.log("here");
    });
  }, []);

  const getAddress = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`;

    const response = await fetch(url);
    const data = await response.json();
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

  return (
    <>
      <div className="bg-red-600 border-2 shadow-lg rounded-lg p-2">
        <span>
          <small className="font-bold text-3xl text-left p-4 text-white">
            RENTIFY
          </small>
          <small className=" text-lg text-white"> {location}</small>
        </span>
      </div>
    </>
  );
}

export default Header;

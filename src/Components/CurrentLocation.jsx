import React, { useEffect, useState } from "react";

export default function CurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState("");
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        setCurrentLocation(response);
      })
      .catch((data, status) => {
      });
  }, []);
  return (
    <div>
      <h2>User Current Country Name {currentLocation.country}</h2>
      <h3>Country Code {currentLocation.countryCode}</h3>
    </div>
  );
}

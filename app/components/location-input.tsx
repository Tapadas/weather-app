"use client";
import { useState } from "react";
import { useWeatherContext } from "../context/WeatherContext";

const LocationInput = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const { onGetWeather } = useWeatherContext();

  const handleGetWeather = (e: React.FormEvent) => {
    e.preventDefault();
    onGetWeather(longitude, latitude);
  };

  return (
    <form onSubmit={handleGetWeather}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div>
          <label>Longitude:</label>
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default LocationInput;

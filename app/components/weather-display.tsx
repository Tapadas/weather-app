"use client";
import { useWeatherContext } from "../context/WeatherContext";

const WeatherDisplay = () => {
  const { weather = { temperature: 0, wind: 0, time: "" } } =
    useWeatherContext();
  const { temperature, wind, time } = weather;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <span>Temperature:{temperature}</span>
      <span>Wind:{wind}</span>
      <span>Time: {time}</span>
    </div>
  );
};

export default WeatherDisplay;

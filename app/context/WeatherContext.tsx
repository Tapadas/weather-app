"use client";
import React, { createContext, useContext, useState } from "react";

interface WeatherContextProps {
  weather: Weather;
  onGetWeather: (longitude: string, latitude: string) => void;
}

export interface Weather {
  time: string;
  temperature: number;
  wind: number;
}
export const WeatherContext = createContext<WeatherContextProps>({
  weather: {
    time: "",
    temperature: 0,
    wind: 0,
  },
  onGetWeather: () => {},
});

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weatherFetched, setWeatherFetched] = useState<Weather>({
    temperature: 0,
    wind: 0,
    time: "",
  });

  const fetchWeather = async (longitude: string, latitude: string) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather");
    } else {
      const data = await response.json();
      setWeatherFetched({
        temperature: data.current.temperature_2m,
        wind: data.current.wind_speed_10m,
        time: data.current.time,
      });
    }
  };

  const onGetWeather = (longitude: string, latitude: string) => {
    fetchWeather(longitude, latitude);
  };

  return (
    <WeatherContext.Provider value={{ weather: weatherFetched, onGetWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
export const useWeatherContext = () => useContext(WeatherContext);

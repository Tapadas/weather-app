import { Box } from "@mui/material";
import LocationInput from "./components/location-input";
import WeatherDisplay from "./components/weather-display";
import { WeatherProvider } from "./context/WeatherContext";

export default function Home() {
  return (
    <WeatherProvider>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          top: "50%",
          left: "50%",
          position: "fixed",
          transform: "translate(-50%, -50%)",
          gap: "30px",
        }}
      >
        <WeatherDisplay />
        <LocationInput />
      </Box>
    </WeatherProvider>
  );
}

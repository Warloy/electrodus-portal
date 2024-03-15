import { Box } from "@mui/material";
import HomeSection from "../components/SectionComponents/HomeSection";
import HardwareSection from "../components/SectionComponents/HardwareSection";

export default function HomePage() {

  return (
    <Box
      flex= {1}
      sx={{
        position: "relative",
        boxShadow: 0,
        minWidth: "98vw",
        minHeight: "94vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
      }}
      overflow="hidden"
    >
      <div id="home-section">
        <HomeSection/>
      </div>
      <div id="hardware-section">
        <HardwareSection/>
      </div>
      <div id="services-section">
        <HomeSection/>
      </div>
      <div id="promotions-section">
        <HomeSection/>
      </div>
      <div id="contact-section">
        <HomeSection/>
      </div>
    </Box>
  );
}
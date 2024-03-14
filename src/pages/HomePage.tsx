import { Typography, 
  Button,
  Box} from '@mui/material';
import { colors } from '../constants/Colors';
import LoginForm from '../components/LoginComponents/LoginForm';
import HomeSection from '../components/SectionComponents/HomeSection';

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
        <LoginForm/>
      </div>
      <div id="services-section">
        <LoginForm/>
      </div>
      <div id="promotions-section">
        <LoginForm/>
      </div>
      <div id="contact-section">
        <LoginForm/>
      </div>
    </Box>
  );
}
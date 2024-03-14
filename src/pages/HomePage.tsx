import { Typography, 
  Button,
  Box} from '@mui/material';
import { colors } from '../constants/Colors';
import LoginForm from '../components/LoginComponents/LoginForm';

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
        <Typography 
          noWrap
          component="h1" 
          variant="h5"
          fontWeight="semibold"
          fontSize={24}
          color={colors.primary}
        >
          Dashboard
        </Typography>
        <Typography 
          noWrap
          component="h1" 
          variant="h5"
          fontWeight="light"
          fontSize={18}
          color={colors.primary}
        >
          En construcción
        </Typography>
        <Button
          variant="contained"
          onClick={() => { }}
          sx = {{ my: 2 }}
        >
          Ir al inicio de sesión
        </Button>
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
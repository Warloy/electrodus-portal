/* import { useLocation } from "react-router-dom"; Deprecated by the appselector hook */
import { Box, Card } from "@mui/material";
import { NavBar } from "./NavBar"
import { ILayoutProps } from "../interfaces/Layout.Interface"
import { colors } from "../constants/Colors";

export function Layout ( { children } : ILayoutProps) {

  return (
    <Box sx = {{ position: "relative", display: "flex", width: "100vw", minHeight: "100vh" }}>
      <NavBar hidden={false}/>
      <Card
        component="main"
        sx={{
          mt:6.5,
          backgroundColor: colors.transparent,
          minWidth: `100vw`,
          maxWidth: `100vw`,
          minHeight: "94vh",
          maxHeight:"94vh",
          flexDirection: "column",
          justifyContent: "flex-start",
          boxShadow: 0
        }}
      >
          {children}
      </Card>
    </Box>
  );
}
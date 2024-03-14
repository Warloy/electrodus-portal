/* import { useLocation } from "react-router-dom"; Deprecated by the appselector hook */
import { Box } from "@mui/material";
import { NavBar } from "./NavBar"
import { ILayoutProps } from "../interfaces/Layout.Interface"
import { colors } from "../constants/Colors";
import { dummyAssets } from "../constants/DummyAssets";

export function Layout ( { children } : ILayoutProps) {

  return (
    <Box sx = {{ m: "auto", position: "relative", display: "flex", width: "100vw", minHeight: "100vh" }}>
      <NavBar hidden={false}/>
      <Box 
          component="img"
          sx={{
            maxHeight: "100%",
            minWidth: "100%",
            zIndex: 0,
            position: "absolute"
          }}
          src={dummyAssets.background}
      />
      <Box
        component="main"
        sx={{
          position: "absolute",
          zindex: 2,
          mt:6,
          backgroundColor: colors.transparent,
          minWidth: `100vw`,
          maxWidth: `100vw`,
          minHeight: "95vh",
          maxHeight:"95vh",
          flexDirection: "column",
          justifyContent: "flex-start",
          boxShadow: 0,
          overflow: "auto"
        }}
      >
          {children}
      </Box>
    </Box>
  );
}
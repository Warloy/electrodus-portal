import { Box, Typography } from "@mui/material";

import { colors } from "../../constants/Colors";

import { THardware } from "../../types/Hardware.Type";
import { dummyAssets } from "../../constants/DummyAssets";


export function HardwareCard ( { hardware } : { hardware: THardware } ) {

  return (
    <Box
      sx={{ 
        p: 2,
        my: 1,
        mx: 2, 
        border: 1,
        borderColor: colors.primary,
        borderRadius: 3,
        boxShadow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.primary
      }}
    >
      <Box 
        component="img"
        sx={{
          m: 1,
          maxWidth: { xs: "40%", sm: "45%", md: "40%", lg: "50%"},
          borderRadius: 3,
          boxShadow: 2
        }}
        src={hardware.image ? hardware.image : dummyAssets.noImagePlaceholder}
      />
      <Box
        sx ={{ 
          my: 1,
          mx: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography
          variant="h6"
          align="center"
          lineHeight={1}
          sx={{ color: colors.white, mb: 1}}
        >
          {`${hardware.type}`}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          lineHeight={1}
          sx={{ color: colors.white }}
        >
          {`${hardware.brand} ${hardware.model}`}
        </Typography>
      </Box>
    </Box>
  )
};
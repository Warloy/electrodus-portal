import { Button,
  Box,
  Typography, 
  Card, 
  Divider} from "@mui/material";
import { colors } from "../../constants/Colors";
import { dummyAssets } from "../../constants/DummyAssets";
import { PromotionsSearch } from "../SearchComponents/PromotionsSearch";


const PromotionsSection = () => {

  return (
    <Box
      sx={{
        padding: 0,
        m: "auto",
        minWidth: "100vw",
        minHeight: "95vh",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.shadow.p50
      }}
    >
      <Box 
          component="img"
          sx={{
            minHeight: { xs:"0%", sm:"0%", md: "60%", lg: "75%" },
            maxWidth: { xs:"0%", sm:"0%", md: "55%", lg: "50%" },
            zIndex: 1,
            left: 0,
            position: "absolute"
          }}
          src={dummyAssets.sectionImages.promotions}
      />
      <Box
        sx = {{
          minHeight: "95vh",
          minWidth: "98vw",
          position: "absolute",
          zIndex: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end"
        }}
      >
        
        <Card
          sx={{
            p: 3,
            mt: 1,
            mb: 2,
            mr: { xs: 0, md: 1, lg: 0 },
            minWidth: { xs: "97.5vw", md: "49vw" },
            boxShadow: 0,
            right: 0,
            backgroundColor: {xs: colors.shadow.p50, md:colors.shadow.primaryAlpha80},
            zIndex: 2,
          }}
        >
          <Box
            sx={{ mb: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <Typography 
              component="h1" 
              variant="h6"
              fontWeight="bold"
              align="left"
              lineHeight={1}
              fontSize={{ xs:20, sm: 24, md: 36 }}
              color={colors.white}
            >
                Promociones
            </Typography>
            <Typography 
              component="h1" 
              variant="h1"
              align="left"
              lineHeight={1}
              fontSize={{ xs:18, sm: 18, md: 24 }}
              color={colors.white}
            >
              ¡Porque las ofertas no podían faltar!
            </Typography>
          </Box>
          <Divider 
            variant="fullWidth"
            sx={{
              my: 2,
              backgroundColor: colors.background
            }}
          />
          <PromotionsSearch/>
        </Card>
      </Box>
    </Box>
  )
}

export default PromotionsSection;
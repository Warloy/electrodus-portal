import { Button,
  Box,
  Typography, 
  Card } from "@mui/material";
import { colors } from "../../constants/Colors";
import { dummyAssets } from "../../constants/DummyAssets";


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
            my: 1,
            minWidth: { xs: "97.5vw", md: "49vw" },
            boxShadow: 0,
            right: 0,
            backgroundColor: {xs: colors.shadow.p50, md:colors.shadow.primaryAlpha80},
            zIndex: 2,
            overflow: "auto"
          }}
        >
          <Box
            sx={{ mb: 2,
              display: "flex",
              alignItems: "center"
            }}
          >
            <Box>
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
            </Box>
          </Box>
          <Box
            sx={{ mt: 2 }}
          >
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
          <Box sx={{ mt: 1,
            display: "flex"
          }}>
            <Button
              fullWidth
              variant="contained"
              onClick={()=>{
                }}
              sx={{ mt: 3, mb: 2, mx: 1, py: 1, 
                borderRadius: 3, 
                backgroundColor: colors.tertiary, 
                fontSize: {xs: 12, sm: 14, md: 18, lg: 18 }
              }}
            >
              Placeholder
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={()=>{
                }}
              sx={{ mt: 3, mb: 2, mx: 1, py: 1, 
                borderRadius: 3, 
                backgroundColor: colors.tertiary, 
                fontSize: {xs: 12, sm: 14, md: 18, lg: 18 }
              }}
            >
              Placeholder
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default PromotionsSection;
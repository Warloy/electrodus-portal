import { Button,
  Box,
  Typography, 
  Card } from "@mui/material";
import { colors } from "../../constants/Colors";
import { dummyAssets } from "../../constants/DummyAssets";


const HardwareSection = () => {

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
            minHeight: { xs:"0%", sm:"0%", md: "75%", lg: "90%" },
            maxWidth: { xs:"0%", sm:"0%", md: "40%", lg: "50%" },
            zIndex: 1,
            left: 0,
            position: "absolute"
          }}
          src={dummyAssets.sectionImages.hardware}
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
            minWidth: "30vw",
            maxWidth: "50vw",
            boxShadow: 0,
            right: 0,
            backgroundColor: colors.primary,
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
            <Box 
                component="img"
                sx={{
                  m: 2,
                  maxWidth: "35%",
                }}
                src={dummyAssets.logoMini.white}
            />
            <Box>
              <Typography 
                component="h1" 
                variant="caption"
                fontWeight="bold"
                align="left"
                lineHeight={1}
                fontSize={{ xs:24, sm: 36, md: 48 }}
                color={colors.white}
              >
                  PROMETHEUS SOLUTIONS:
              </Typography>
              <Typography 
                component="h1" 
                variant="h6"
                fontWeight="bold"
                align="left"
                lineHeight={1}
                fontSize={{ xs:16, sm: 24, md: 36 }}
                color={colors.white}
              >
                  MANTENIMIENTO HECHO A TU MEDIDA
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
              fontSize={{ xs:12, sm: 18, md: 24 }}
              color={colors.white}
            >
                Prometheus Solutions se compromete, a través del sistema Electrodus, a darte la mejor atención de mantenimiento disponible en el mercado. <br/> ¡Descarga ya nuestra aplicación, y comienza a solucionar!
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
              Iniciar sesión
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
              Descargar la app
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default HardwareSection;
import { Button,
  Box,
  Typography, 
  Card } from "@mui/material";
import { colors } from "../../constants/Colors";
import { dummyAssets } from "../../constants/DummyAssets";
import { TCompany } from "../../types/Company.Type";


const HomeSection = ( { company }: {company: TCompany} ) => {
  const LOGIN_URL = import.meta.env.VITE_ELECTRODUS_LOGIN_URL
  const APPDL_URL = import.meta.env.VITE_ELECTRODUS_APPDL_URL
  
  const handleLoginButton = () => {
    location.href=LOGIN_URL
  };

  const handleDownloadAPPButton = () => {
    location.href=APPDL_URL
  }

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
        backgroundColor: colors.transparent
      }}
    >
      <Box 
          component="img"
          sx={{
            minHeight: { xs:"0%", sm:"0%", md: "90%" },
            maxHeight: { xs:"0%", sm:"0%", md: "95%" },
            minWidth: { xs:"60%", sm:"45%", md: "50%" },
            zIndex: 1,
            right: 0,
            bottom: 0,
            position: "absolute"
          }}
          src={dummyAssets.landingSplash}
      />
      <Box
        sx = {{
          minHeight: "95vh",
          minWidth: "98vw",
          position: "absolute",
          zIndex: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start"
        }}
      >
        <Card
          sx={{
            mx: { xs: 2, sm: 20 },
            mt: { xs: 5, sm: 10 },
            minWidth: { sm: "97.5vw", md: "40vw" },
            maxWidth: { sm: "97.5vw", md: "40vw" },
            padding: 0,
            boxShadow: 0,
            backgroundColor: colors.transparent,
            zIndex: 2,
            overflow: "visible"
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
                src={company.urlImage}
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
                  {company.name?.toUpperCase()}
              </Typography>
              <Typography 
                component="h1" 
                variant="h6"
                fontWeight="bold"
                align="left"
                lineHeight={1}
                fontSize={{ xs:16, sm: 24, md: 36 }}
                color={colors.white}
                sx={{ mt: 1 }}
              >
                  {company.slogan?.toUpperCase()}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ mt: 2, mx: 2 }}
          >
            <Typography 
              component="h1" 
              variant="h1"
              align="left"
              lineHeight={1}
              fontSize={{ xs:18, sm: 18, md: 24 }}
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
              onClick={()=>{ handleLoginButton() }}
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
              onClick={()=>{ handleDownloadAPPButton() }}
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

export default HomeSection;
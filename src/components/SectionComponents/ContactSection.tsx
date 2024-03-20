import { Box,
  Typography, 
  Card, 
  IconButton } from "@mui/material";
import { colors } from "../../constants/Colors";
import { dummyAssets } from "../../constants/DummyAssets";
import { TCompany } from "../../types/Company.Type";


const ContactSection = ( { company }: {company: TCompany} ) => {
  const APPDL_URL = import.meta.env.VITE_ELECTRODUS_APPDL_URL
  const CHATBOT_URL = import.meta.env.VITE_ELECTRODUS_CHATBOT_URL
  
  const handleDownloadAPPButton = () => {
    location.href=APPDL_URL
  }

  const handleChatbotButton = () => {
    location.href=CHATBOT_URL
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box 
          component="img"
          sx={{
            maxHeight: { xs:"0%", sm:"0%", md: "90%", lg: "90%" },
            maxWidth: { xs:"0%", sm:"0%", md: "90%", lg: "90%" },
            zIndex: 1,
            position: "absolute"
          }}
          src={dummyAssets.sectionImages.contact.splash}
      />
      <Box
        sx = {{
          minHeight: "95vh",
          minWidth: "98vw",
          position: "absolute",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "center"
        }}
      >
        <Card
          sx={{
            p: 1,
            my: 2,
            mx: 2,
            minWidth: { xs: "94vw", md: "85%" },
            maxWidth: { xs: "94vw", md: "85%" },
            minHeight: "45vh",
            maxHeight: "45vh",
            boxShadow: 0,
            backgroundColor: {xs: colors.shadow.p80, md:colors.shadow.p80},
            zIndex: 2,
            alignSelf: "center",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <Box
            sx={{ 
              display: "flex",
              flexDirection: "column", 
              my: 2,
              minHeight: "6vh",
              maxHeight: "6vh",
              justifyContent: "center"
            }}
          >
            <Typography 
              component="h1" 
              variant="h6"
              fontWeight="bold"
              align="center"
              lineHeight={1}
              fontSize={{ xs:20, sm: 24, md: 32 }}
              color={colors.white}
            >
                Conoce sobre {company.name}
            </Typography>
          </Box>
          <Box
            sx={{ 
              display: "flex", 
              flexDirection: "row",
              justifyContent: "space-around",
              minHeight: "35vh",
              maxHeight: "35vh",
              mx: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "flex-start",
                px: 1,
                mt: 1,
                mb: 3,
                minWidth: "45%",
                maxWidth: "45%",
                minHeight: "32vh",
                maxHeight: "32vh",
                boxShadow: 0,
                backgroundColor: colors.transparent,
                zIndex: 2,
                alignSelf: "center"
              }}
            >
              <Typography 
                component="h1" 
                variant="h6"
                fontWeight="bold"
                align="center"
                lineHeight={1}
                fontSize={{ xs:20, sm: 24, md: 32 }}
                color={colors.white}
              >
                  Misión
              </Typography>
              <Typography 
                  component="h1" 
                  variant="h1"
                  align="justify"
                  lineHeight={1}
                  fontSize={{ xs:14, sm: 16, md: 20 }}
                  color={colors.white}
                  sx ={{ mt: 2, pr: 1 }}
                  overflow={{ xs: "auto", lg: "hidden" }} 
                >
                  {company.mission}
                </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "flex-start",
                px: 1,
                mt: 1,
                mb: 3,
                minWidth: "45%",
                maxWidth: "45%",
                minHeight: "32vh",
                maxHeight: "32vh",
                boxShadow: 0,
                backgroundColor: colors.transparent,
                zIndex: 2,
                alignSelf: "center"
              }}
            >
              <Typography 
                component="h1" 
                variant="h6"
                fontWeight="bold"
                align="center"
                lineHeight={1}
                fontSize={{ xs:20, sm: 24, md: 32 }}
                color={colors.white}
              >
                  Visión
              </Typography>
              <Typography 
                  component="h1" 
                  variant="h1"
                  align="justify"
                  lineHeight={1}
                  fontSize={{ xs:14, sm: 16, md: 20 }}
                  color={colors.white}
                  sx ={{ mt: 2, pr: 1 }}
                  overflow={{ xs: "auto", lg: "hidden" }} 
                >
                  {company.vision}
                </Typography>
            </Box>
          </Box>
        </Card>
        <Box
          sx = {{
            width: {xs: "98vw", sm: "90vw"},
            maxHeight: "45vh",
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
            alignSelf: "center",
            flexWrap: "nowrap",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection:"column",
              justifyContent: "space-evenly",
              p: 3,
              my: 1,
              mx: 2,
              minWidth: "40%",
              maxWidth: { xs: "97.5vw", md: "40%" },
              minHeight: "40vh",
              maxHeight: "40vh",
              boxShadow: 0,
              backgroundColor: {xs: colors.shadow.p80, md:colors.shadow.p80},
              zIndex: 2,
              alignSelf: "center"
            }}
          >
            <Box
              sx={{ mb: 2,
                display: "flex",
                alignItems: "center",
                alignSelf: "center"
              }}
            >
              <Box>
                <Typography 
                  component="h1" 
                  variant="h6"
                  fontWeight="bold"
                  align="center"
                  lineHeight={1}
                  fontSize={{ xs:20, sm: 24, md: 32 }}
                  color={colors.white}
                >
                    ¡Descarga nuestra app!
                </Typography>
                <Typography 
                  component="h1" 
                  variant="h1"
                  align="center"
                  lineHeight={1}
                  fontSize={{ xs:18, sm: 18, md: 24 }}
                  color={colors.white}
                  sx ={{ mt: 2 }}
                >
                  Regístrate y forma parte de nuestra aplicación móvil, donde podrás realizar tus solicitudes.
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              position: "relative",
              bottom: 0,
              maxHeight: "50%",
              minWidth: "100%",
              justifyContent: "center"
            }}>
              <IconButton
                onClick={()=>{ handleDownloadAPPButton() }}
                sx={{ 
                  borderRadius: 0, 
                  fontSize: {xs: 12, sm: 14, md: 18, lg: 18 },
                  minHeight: "100%",
                  minWidth: "75%",
                }}
              >
                <Box 
                  component="img"
                  sx={{
                    maxWidth: { xs: "90%", sm:"70%", md: "60%", lg: "50%" },
                  }}
                  src={dummyAssets.sectionImages.contact.googlePlayButton}
                />
              </IconButton>
            </Box>
          </Card>
          <Card
            sx={{
              display: "flex",
              flexDirection:"column",
              justifyContent: "space-evenly",
              p: 3,
              my: 1,
              mx: 2,
              minWidth: "40%",
              maxWidth: { xs: "97.5vw", md: "40%" },
              minHeight: "40vh",
              maxHeight: "40vh",
              boxShadow: 0,
              backgroundColor: {xs: colors.shadow.p80, md:colors.shadow.p80},
              zIndex: 2,
              alignSelf: "center"
            }}
          >
            <Box
              sx={{ mb: 2,
                display: "flex",
                alignItems: "center",
                alignSelf: "center"
              }}
            >
              <Box>
                <Typography 
                  component="h1" 
                  variant="h6"
                  fontWeight="bold"
                  align="center"
                  lineHeight={1}
                  fontSize={{ xs:20, sm: 24, md: 32 }}
                  color={colors.white}
                >
                    Utiliza nuestro chatbot
                </Typography>
                <Typography 
                  component="h1" 
                  variant="h1"
                  align="center"
                  lineHeight={1}
                  fontSize={{ xs:18, sm: 18, md: 24 }}
                  color={colors.white}
                  sx ={{ mt: 2 }}
                >
                  ¿Tienes dudas? Utiliza nuestro chatbot para obtener información a través de WhatsApp.
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              position: "relative",
              bottom: 0,
              maxHeight: "50%",
              minWidth: "100%",
              justifyContent: "center"
            }}>
              <IconButton
                onClick={()=>{ handleChatbotButton() }}
                sx={{ 
                  borderRadius: 0, 
                  fontSize: {xs: 12, sm: 14, md: 18, lg: 18 },
                  minHeight: "90%",
                  minWidth: "75%",
                }}
              >
                <Box 
                  component="img"
                  sx={{
                    maxWidth: { xs: "110%", sm:"85%", md: "75%" },
                  }}
                  src={dummyAssets.sectionImages.contact.whatsAppButton}
                />
              </IconButton>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactSection;
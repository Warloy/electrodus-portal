import { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography, Menu, MenuItem, Button, Divider } from "@mui/material";
import { INavBarProps } from "../interfaces/NavBar.Interface";
import { colors } from "../constants/Colors";
import { dummyAssets } from "../constants/DummyAssets";
/* Icons */
import HardwareIcon from '@mui/icons-material/Hardware';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import RedeemIcon from '@mui/icons-material/Redeem';
import InfoIcon from '@mui/icons-material/Info';
import KeyIcon from '@mui/icons-material/Key';
import MoreIcon from '@mui/icons-material/MoreVert';
 

export function NavBar( { hidden = false } : INavBarProps) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleHomeButton = () => {
    console.log("Home button pressed")
    const scroll = document.querySelector("#home-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  };

  const handleHarwareButton = () => {
    console.log("Hardware section button pressed")
    const scroll = document.querySelector("#hardware-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  };

  const handleServicesButton = () => {
    console.log("Services section button pressed")
    const scroll = document.querySelector("#services-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  };

  const handleLoginButton = () => {
    location.href="http://youtube.com"
  };

  const handlePromotionsButton = () => {
    console.log("Promotions section button pressed")
    const scroll = document.querySelector("#promotions-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  };

  const handleContactButton = () => {
    console.log("Contact section button pressed")
    const scroll = document.querySelector("#contact-section")
    scroll?.scrollIntoView({ behavior: "smooth", block: "start" })
  };

  const mobileMenuId = 'menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem
        onClick = {() => { handleLoginButton() 
          handleMobileMenuClose()
        }}
      >
        <IconButton
          size="large"
          aria-label="Iniciar sesión"
        >
          <KeyIcon sx={{ color: colors.primary }} />
        </IconButton>
        <Typography
          color={colors.primary}
          sx = {{ mr: 2 }}
        >
          Iniciar sesión
        </Typography>
      </MenuItem>

      <Divider sx={{ mx: 2 }}/>

      <MenuItem
        onClick = {() => { handleHarwareButton() 
          handleMobileMenuClose()
        }}
      >
        <IconButton
          size="large"
          aria-label="Sección de equipos"
        >
          <HardwareIcon sx={{ color: colors.primary }} />
        </IconButton>
        <Typography
          color={colors.primary}
          sx = {{ mr: 2 }}
        >
          Equipos
        </Typography>
      </MenuItem>

      <MenuItem
        onClick = {() => { handleServicesButton() 
          handleMobileMenuClose()
        }}
      >
        <IconButton
          size="large"
          aria-label="Sección de servicios"
        >
          <HomeRepairServiceIcon sx={{ color: colors.primary }} />
        </IconButton>
        <Typography
          color={colors.primary}
          sx = {{ mr: 2 }}
        >
          Servicios
        </Typography>
      </MenuItem>

      <MenuItem
        onClick = {() => { handlePromotionsButton() 
          handleMobileMenuClose()
        }}
      >
        <IconButton
          size="large"
          aria-label="Sección de promociones"
        >
          <RedeemIcon sx={{ color: colors.primary }} />
        </IconButton>
        <Typography
          color={colors.primary}
          sx = {{ mr: 2 }}
        >
          Promociones
        </Typography>
      </MenuItem>

      <MenuItem
        onClick = {() => { handleContactButton() 
          handleMobileMenuClose()
        }}
      >
        <IconButton
          size="large"
          aria-label="Sección de contacto"
        >
          <InfoIcon sx={{ color: colors.primary }} />
        </IconButton>
        <Typography
          color={colors.primary}
          sx = {{ mr: 2 }}
        >
          Contacto
        </Typography>
      </MenuItem>

    </Menu>
  );


  return (
    <Box flex={1} justifyItems={"flex-start"}>
      {!hidden && <>
        <AppBar position="fixed" enableColorOnDark sx={{ 
          backgroundColor: colors.primary,
          width: `100%`,
          boxShadow: 0
          }}>
        <Toolbar
          variant="dense"
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <Box 
            sx={{ px: 1, 
            justifyContent:"space-between", 
            display: "flex", 
            alignItems: "center",
            maxWidth: [360]
          }}
          >
            <Button variant="text" onClick={()=>{handleHomeButton()}}>
              <Box 
                component="img"
                src={dummyAssets.logoMini.quaternary}
                sx={{ width:36, height:36 }}
              />
              <Typography
                component="h1"
                variant="h6"
                fontWeight="bold"
                lineHeight={1}
                noWrap
                sx={{ color: colors.quaternary, ml: 1 }}
              >
                Prometheus Solutions
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="Hardware section button"
              color="inherit"
              sx = {{
                borderRadius: 1
              }}
              onClick={()=>{handleHarwareButton()}}
            >
              <Typography
                sx={{ px: 1 }}
              >
                Equipos
              </Typography>
            </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="Services section button"
              color="inherit"
              sx = {{
                borderRadius: 1
              }}
              onClick={()=>{handleServicesButton()}}
            >
              <Typography
                sx={{ px: 1 }}
              >
                Servicios
              </Typography>
            </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="Promotions section button"
              color="inherit"
              sx = {{
                borderRadius: 1
              }}
              onClick={()=>{handlePromotionsButton()}}
            >
              <Typography
                sx={{ px: 1 }}
              >
                Promociones
              </Typography>
            </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="Contact section button"
              color="inherit"
              sx = {{
                borderRadius: 1
              }}
              onClick={()=>{handleContactButton()}}
            >
              <Typography
                sx={{ px: 1 }}
              >
                Contacto
              </Typography>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="login button"
              color="inherit"
              sx = {{
                borderRadius: 1
              }}
              onClick={()=>{ handleLoginButton() }}
            >
              <Typography
                sx={{ px: 1 }}
              >
                Iniciar sesión
              </Typography>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      </>
      }
    </Box>
  );
}
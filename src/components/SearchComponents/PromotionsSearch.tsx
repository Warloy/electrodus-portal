import { useEffect, useState } from "react";
import { 
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
  Grid
} from "@mui/material";
import useLoading from "../../hooks/useLoading";

import { HardwareCard } from "../MainComponents/HardwareCard";
import { THardware } from "../../types/Hardware.Type";
import HardwareService from "../../services/hardware/Hardware.Service";

import { colors } from "../../constants/Colors";
import { dummyHardware } from "../../constants/DummyAssets";

import SearchIcon from '@mui/icons-material/Search';

export function PromotionsSearch () {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [searchParams, setSearchParams] = useState<string>("");
  const [hardwareCollection, setHardwareCollection] = useState<THardware[]>([dummyHardware]);
  const hardwareAPI = new HardwareService();

  useEffect(()=>{
    triggerSearch().catch(err=> console.log(err));
  }, []);

  const triggerSearch = async () => {
    startLoading();
    try {
      const { data, status }: { data: any, status: number } = await hardwareAPI.get(searchParams);
      if ((status===200)) { 
        setHardwareCollection(data.content); 
      } else { 
        setHardwareCollection([]);
      }
    } catch (error: any) {
      setHardwareCollection([]);
      console.log(error);
    } finally { 
      stopLoading();
    }
  };

  return (
    <Box sx={{ 
      mt: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: { xs: "91.3vw", md: "46.5vw" },
      maxWidth: { xs: "91.3vw", md: "46.5vw" },
      minHeight: "85%",
      borderRadius: 3,
      backgroundColor: colors.background
    }}>
      <Box 
        component="form"
        sx={{
          mt: 1.5,
          mx: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          minWidth: "100%",
          backgroundColor: colors.transparent
        }}
      >
        <TextField
          id="promotions-search"
          label="Buscar promociones"
          type="search"
          variant="outlined"
          placeholder="Buscar por marca, modelo del equipo..."
          onChange={(e) => setSearchParams(e.target.value)}
          sx={{ width: "70%", mr: 2 }}
        />
        <IconButton
          size="small"
          onClick={()=>{ triggerSearch() }}
          sx={{ mr: 3, borderRadius: 1, backgroundColor: colors.primary }}
        >
          <Typography
            sx={{ ml: 1, mr: 1, color: colors.white }}
          >
            Buscar
          </Typography>
          <SearchIcon sx={{ mr: 1, color: colors.white }}/>
        </IconButton>
      </Box>
      <Divider 
        variant="middle"
        sx={{
          width: "85%",
          alignSelf: "center",
          my: 2,
          backgroundColor: colors.primary
        }}
      />
      <Box
        overflow="auto"
        sx={{
          pr: 1,
          mb: 1,
          mr: 1,
          maxHeight: "60vh",
          overflow: "auto",
        }}
      >
        { hardwareCollection.length>0 ? <>
          <Grid 
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{
            }}
          >
            { hardwareCollection.map((_, index) => (
              <Grid item xs={12} sm={6} md={12} lg={6} key={index}> 
                <HardwareCard hardware={hardwareCollection[index]}/>
              </Grid>
            ))}
          </Grid>
        </>:<>
          <Typography
            fontStyle="italic"
          >
            No se han encontrado resultados.
          </Typography>
        </>}
      </Box>
        
    </Box>
  ) 
}
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
/* Hooks */
import useLoading from "../hooks/useLoading";
/* Components */
import HomeSection from "../components/SectionComponents/HomeSection";
import HardwareSection from "../components/SectionComponents/HardwareSection";
import ServicesSection from "../components/SectionComponents/ServicesSection";
import PromotionsSection from "../components/SectionComponents/PromotionsSection";
import ContactSection from "../components/SectionComponents/ContactSection";
/* Services */
import CompanyService from "../services/company/Company.Service";
/* Constants */
import { dummyCompany } from "../constants/DummyAssets";
/* Types */
import { TCompany } from "../types/Company.Type";

export default function HomePage() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [ company, setCompany ] = useState<TCompany>(dummyCompany);
  const companyAPI = new CompanyService();
  
  useEffect(()=>{
    getCompanyData().catch(err=> console.log(err));
  }, []);

  const getCompanyData = async () => {
    startLoading();
    try {
      const { data, status }: { data: TCompany, status: number } = await companyAPI.get();
      if ((status===200)) { 
        setCompany(data); 
      } else { 
        setCompany(dummyCompany);
      }
    } catch (error: any) {
      setCompany(dummyCompany)
      console.log(error);
    } finally { 
      stopLoading() 
    }
  }

  return (
    <Box
      flex= {1}
      sx={{
        position: "relative",
        boxShadow: 0,
        minWidth: "98vw",
        minHeight: "94vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
      }}
      overflow="hidden"
    >
      <div id="home-section">
        <HomeSection company={company}/>
      </div>
      <div id="hardware-section">
        <HardwareSection/>
      </div>
      <div id="services-section">
        <ServicesSection/>
      </div>
      <div id="promotions-section">
        <PromotionsSection/>
      </div>
      <div id="contact-section">
        <ContactSection company={company}/>
      </div>
    </Box>
  );
}
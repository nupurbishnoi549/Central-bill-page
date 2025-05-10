import React from 'react'
import Hero from './components/Hero'
import CompaniesLogo from './components/CompanyLogo'
import EnergyPlans from './components/EnergyPlan'
import SimpleSteps from './components/SimpleSteps'
import Comprehensive from './components/comprehensive'
import ChooseFor from './components/ChooseFor'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Hero />
      <CompaniesLogo />
      <EnergyPlans />
      <SimpleSteps />
      <Comprehensive />
      <ChooseFor />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  )
}

export default App
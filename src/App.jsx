import React from 'react'
import Hero from './components/Hero'
import CompaniesLogo from './components/CompanyLogo'
import EnergyPlans from './components/EnergyPlan'
import SimpleSteps from './components/SimpleSteps'
import Comprehensive from './components/comprehensive'
import ChooseFor from './components/ChooseFor'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'

const App = () => {
  return (
    <>
      <Hero />
      <CompaniesLogo />
      <EnergyPlans />
      <SimpleSteps />
      <Comprehensive />
      <ChooseFor />
      <Testimonials />
      <Faq/>
    </>
  )
}

export default App

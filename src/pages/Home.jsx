import React from 'react'
import HeroSection from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/About'
import ServiceSection from "../components/ServiceSection"
import QuoteForm from "../components/QuoteForm"
import HowItWork from "../components/HowItWork"
import RatesChargesPremium from '../components/RateChargesPremium'


const Home = () => {
  return (
   <>
   <HeroSection/>
   <About/>
   <WhyChooseUs/>
   <ServiceSection/>
   <HowItWork/>
   <RatesChargesPremium/>
   <QuoteForm/>
   </>
  )
}

export default Home
import React from 'react'
import HeroSection from './components/HeroSection'
import FeatureProducts from './components/FeatureProducts'
import Banner from './components/Banner'
import Services from './components/Services'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <FeatureProducts />
      <Banner />
    </>
  )
}

export default Home

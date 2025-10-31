import React from 'react'
import Navbar from './ui/shared/Navbar'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import Footer from './ui/shared/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home

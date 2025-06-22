import React from 'react'
import HeroSection from './HeroSection'
import Tools from './Tools'
import Services from '../pages/Services';
import Testimonials from './Testimonials';
import Blogs from '../pages/Blogs';
import CompanyLogos from './CompanyLogos';


const Home = () => {
  return (
    <>
    <HeroSection/>
    <Tools/>
    <CompanyLogos/>
    <Services/>
    <Testimonials/>
    <Blogs/>
    </>
  )
}

export default Home
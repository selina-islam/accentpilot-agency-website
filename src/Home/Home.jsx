import React from 'react'
import HeroSection from './HeroSection'
import Tools from './Tools'
import Services from '../pages/Services';
import Testimonials from './Testimonials';
import Blogs from '../pages/Blogs';
import CompanyLogos from './CompanyLogos';
import TeamSection from './TeamSection';
import Pricing from './Pricing';
import FAQs from './FAQs';
import CTA from './CTA';


const Home = () => {
  return (
    <>
    <HeroSection/>
    <Tools/>
    <CompanyLogos/>
    <Services/>
    <Testimonials/>
    <Blogs/>
    <TeamSection/>
    <Pricing/>
    <FAQs/>
    <CTA/>
    </>
  )
}

export default Home
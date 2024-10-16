import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import Testimonials from '../components/Testimonials'
import { Workflow } from 'lucide-react'
import Pricing from '../components/Pricing'

const Homepage = () => {
  return (
    <div>

            <HeroSection />
            <FeatureSection />
            <Testimonials />
            {/* <Workflow />  */}
            {/* <Pricing /> */}
         
    </div>
  )
}

export default Homepage

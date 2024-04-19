import React from 'react'
import HeroSection from '../components/heroSection'
import About from '../components/about'
import Services from '../components/services'
import Skills from '../components/skills'
import Contact from '../components/contact'

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <About />
      <Services />
      <Skills />
      <Contact />
    </div>
  )
}

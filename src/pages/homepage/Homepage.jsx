import React from 'react'
import Banner from './Banner'
import Services from './services/Services'
import AboutUs from './About/AboutUs'
import Project from './Project/Project'
import Blog from './Blog/Blog'
import Testimonials from './Testimonial/Testimonials'
import Contact from './Contact/Contact'

const Homepage = () => {
  return (
      <>
      <Banner />
      <AboutUs/>
      <Services />
      <Project />
      <Blog />
      <Testimonials />
      <Contact/>
      </>
  )
}

export default Homepage
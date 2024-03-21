import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Categories from '../components/Categories'
import Listings from '../components/Listings'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact'
function HomePage() {
  return (
    <div>
      <Navbar/>
      <Slide/>
      <About/>
      <Categories/>
      <Listings/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage
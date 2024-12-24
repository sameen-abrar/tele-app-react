import React from 'react'
import Home from '../Components/Views/Home'
import About from '../Components/Views/About'
import Services from '../Components/Views/Services'
import Doctors from '../Components/Views/Doctors'
import Blogs from '../Components/Views/Blogs'
import Footer from '../Components/Views/Footer'
import HomeNavbar from '../Components/HomeNavbar'

export default function HomePage() {
  return (
    <div>
        <HomeNavbar />
      <main>
        <div id="home">
          <Home></Home>
        </div>
        <div id="about">
          <About></About>
        </div>
        <div id="services">
          <Services></Services>
        </div>
        <div id="doctors">
          <Doctors></Doctors>
        </div>
        <div id="blogs">
          <Blogs></Blogs>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

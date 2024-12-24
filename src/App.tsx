import { useState } from "react";
import HomeNavbar from "./Components/HomeNavbar";
import Home from "./Components/Views/Home";
import About from "./Components/Views/About";
import Services from "./Components/Views/Services";
import Doctors from "./Components/Views/Doctors";
import Blogs from "./Components/Views/Blogs";
import Footer from "./Components/Views/Footer";
import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./Router/AppRouter";

function App() {
  return (
    // <>
    //  <Navbar></Navbar>
    //  <main>
    //   <div id='home'><Home></Home></div>
    //   <div id='about'><About></About></div>
    //   <div id='services'><Services></Services></div>
    //   <div id='doctors'><Doctors></Doctors></div>
    //   <div id='blogs'><Blogs></Blogs></div>
    //  </main>
    //  <Footer></Footer>
    // </>
    <MantineProvider>
      <AppRouter />
      {/* <main>
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
      <Footer></Footer> */}
    </MantineProvider>
  );
}

export default App;

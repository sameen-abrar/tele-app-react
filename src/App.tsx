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
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;

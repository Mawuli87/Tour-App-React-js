import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { services } from "./data";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;

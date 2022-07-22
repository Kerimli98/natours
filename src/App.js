import React from "react";
import "./styles/sass/main.scss";
import About from "./components/About";
import Header from "./components/Header";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Story from "./components/Story";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Tours />
      <Story />
      <Booking />
      <Footer />
    </>
  );
}

export default App;

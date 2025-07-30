import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Header from "./components/Header";
import ServicesData from "./components/ServicesData";
import Choose from "./components/Choose";
import Customer from "./components/Customer";
import Works from "./components/Works";
import Touch from "./components/Touch";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Area from "./components/Area";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <ServicesData />
        <Choose/>
        <Customer/>
        <Works/>
        <Touch/>
        <Blog/>
        <Faq/>
        <Area/>
        <Footer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

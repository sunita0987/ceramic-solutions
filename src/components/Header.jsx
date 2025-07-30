import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import bgImage from "../assets/images/bg.png";
import logo from "../assets/images/logo.png";
import { FaGoogle, FaStar } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import certificate from "../assets/images/tile.png";
import award from "../assets/images/awards.png";
const Header = () => {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <header className="bg-[#ffffff] w-[1000px] ml-30 py-3 px-6 flex justify-between items-center rounded-3xl mx-auto md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="relative">
          <nav className="hidden md:flex gap-6 text-sm font-medium text-[#000000]">
            <Link to="/" className="hover:text-[#FF0000]">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#FF0000]">
              About
            </Link>
            <Link to="/services" className="hover:text-[#FF0000]">
              Services
            </Link>
            <Link to="/portfolio" className="hover:text-[#FF0000]">
              Portfolio
            </Link>
            <Link to="/contact" className="hover:text-[#FF0000]">
              Contact us
            </Link>
            <Link to="/quote" className="hover:text-[#FF0000]">
              Request a Quote
            </Link>
          </nav>
        </div>
        <a
          href="tel:8656211717"
          className="bg-[#FF0000] text-[#ffffff] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-800 text-sm ml-10"
        >
          <FaPhoneAlt /> (865) 621-1717
        </a>
      </header>
      <div className="relative z-10 max-w-4xl mx-auto mr-70 space-y-6 flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl md:text-5xl font-semibold text-[#ffffff] w-[700px] mx-auto">
          Transform Your Space with Precision and Quality: Get a Free Quote
          Today!
        </h1>
        <p className="text-sm md:text-lg text-[#FFFFFF] mx-auto w-[700px]">
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma
          sol: teroktig,
        </p>
        <button className="bg-[#FF0000] hover:bg-red-700 text-[#ffffff]  ml-15 font-semibold py-3 px-6 rounded-full transition mx-auto">
          Get A Quote
        </button>

        <div className=" py-10 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center text-center">
            <div className="bg-white shadow-md rounded-xl p-3 flex flex-col items-center">
              <div className="flex items-center gap-2">
                <FaGoogle className="text-3xl text-[#4285F4]" />
                <p className="text-sm font-regular text-gray-800">
                  Google Review
                </p>
              </div>
              <div className="flex items-center gap-1 text-[#FCB547] mt-2">
                <span className="text-xl font-regular text-[#000000]">4.6</span>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              <p className="text-xs text-[#141414] mt-1">
                Based on 145 reviews
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-3 flex flex-col items-center">
              <div className="flex items-center gap-2">
                <SiTrustpilot className="text-4xl text-green-600" />
                <p className="mt-2 text-sm font-regular text-gray-800">
                  Trust Pilot Review
                </p>
              </div>
              <div className="flex items-center gap-1 text-[#FCB547] mt-1">
                <span className="text-xl font-regular text-[#000000]">4.6</span>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <p className="text-xs text-[#141414] mt-1">
                Based on 145 reviews
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <img
                src={certificate}
                alt="Certified Installer"
                className="h-20 object-contain"
              />
              <img
                src={award}
                alt="Quality Business Award 2023"
                className="h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;

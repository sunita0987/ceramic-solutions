import React from "react";
import { Link } from "react-router-dom";
// import { FaPhone } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import bgImage from "../assets/images/bg.png";
import logo from "../assets/images/logo.png";
import { FaGoogle, FaStar } from "react-icons/fa";
import { MdStars } from "react-icons/md";

const Header = () => {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <header className="bg-[#ffffff] w-[1000px] ml-30 py-3 px-6 flex justify-between items-center rounded-3xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

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

        <a
          href="tel:8656211717"
          className="bg-[#FF0000] text-[#ffffff] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-800 text-sm"
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
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="bg-[#ffffff] text-[#000000] p-4 rounded shadow-md flex flex-col items-center">
            <FaGoogle size={24} className="text-blue-500 mb-1" />
            <div className="flex text-[#FCB547]">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p className="mt-2 text-xs">4.6 ★ Based on 145 reviews</p>
          </div>
          <div className="bg-[#ffffff] text-[#000000] p-4 rounded shadow-md flex flex-col items-center">
            <MdStars size={24} className="text-green-500 mb-1" />
            <div className="flex text-[#FCB547]">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p className="mt-2 text-xs">4.6 ★ Based on 145 reviews</p>
          </div>
          <div className="p-4  flex flex-col items-center">
            <img src="src/assets/images/tile.png" alt="badge" className="h-20" />
          </div>
          <div className="p-4 flex flex-col items-center">
            <img src="src/assets/images/awards.png" alt="award" className="h-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;



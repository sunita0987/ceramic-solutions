import React from "react";
import Contact from "../assets/images/touch.png";

const Touch = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <div
        className="relative bg-cover bg-center rounded-xl overflow-hidden max-w-6xl mx-auto h-[300px] sm:h-[350px] lg:h-[400px]"
        style={{
          backgroundImage: `url(${Contact})`,
        }}
      >
        <div className="absolute inset-0 bg-[#FF0000BF] flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold mb-2">
            Interested?
          </h2>
          <h3 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium mb-4">
            Get In Touch With Us
          </h3>
          <p className="text-white max-w-xl text-sm sm:text-base mb-6">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Prejigt
            primasön dede facebooka: förutom tivaligt.
          </p>
          <button className="bg-white text-[#FF0000] font-bold py-2 px-6 rounded-full hover:bg-[#FF0000] hover:text-white cursor-pointer transition-all duration-300">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Touch;

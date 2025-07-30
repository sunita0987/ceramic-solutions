import React from "react";
import { WORKS_DATA } from "../utils/helper";
import { FaCheckCircle } from "react-icons/fa";
import roomImage from "../assets/images/work.png";

const Works = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="relative">
          <div className="absolute top-8 right-4 w-full h-full max-w-[400px] bg-[#FF0000] rounded-lg -z-10" />
          <img
            src={roomImage}
            alt="Room"
            className="rounded-xl max-w-full w-full sm:w-[400px] object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-[#000000]">
            How It Works?
          </h2>
          <p className="text-[#000000] text-sm sm:text-base mb-6">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänara viliga. Pregigt
            primasof dede facebooka: förutom tivaligt.
          </p>
          <div className="space-y-5">
            {WORKS_DATA.map((step, index) => (
              <div
                key={index}
                className="flex items-start bg-white p-4 rounded-xl shadow-lg gap-4"
              >
                <FaCheckCircle className="text-red-500 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-[#010101]">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#000000]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-[#FF0000] hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold transition duration-300">
              Get A Quote
            </button>
            <button className="border-2 border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white px-6 py-2 rounded-full font-semibold transition duration-300">
              View Tile Visualizer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Works;

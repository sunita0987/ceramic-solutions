import React from "react";
import Marquee from "react-fast-marquee";
import { SLIDER_DATA } from "../utils/helper";

const Customer = () => {
  return (
    <section className="bg-white py-12 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-5xl md:text-5xl font-semibold text-[#000000]">
          What Our Customers Say
        </h2>
        <p className="text-[#000000] mt-7 w-[430px] mx-auto text-sm sm:text-sm mb-6 max-w-xl">
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänena viliga. Pregit
          primasof dede facebooka: förutom tivalt. Fejkade
        </p>
      </div>
      <div className="max-w-7xl mx-auto overflow-hidden mt-10">
        <Marquee gradient={false} speed={100}>
          {SLIDER_DATA.map((t, index) => (
            <div
              key={index}
              className="bg-[#ffffff]  shadow-md rounded-xl p-6 mx-4 w-80 flex-shrink-0"
            >
              <div className="flex items-center mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-[#000000]">{t.name}</h4>
                  <p className="text-sm text-[#000000]">{t.title}</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-2">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
              <p className="text-sm text-[#000000]">"{t.text}"</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
export default Customer;

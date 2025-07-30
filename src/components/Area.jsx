import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AREA_DATA } from "../utils/helper";

const AreaCard = ({ name }) => (
  <div className="flex items-center gap-3 p-5 bg-white shadow-lg rounded-xl text-sm font-semibold text-black">
    <div className="bg-[#FF0000] rounded-full w-7 h-7 flex items-center justify-center">
      <FaMapMarkerAlt className="text-white text-base" />
    </div>
    <span>{name}</span>
  </div>
);

function Area() {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 text-center md:text-left">
          We Provide Services
          <br />
          In These Areas
        </h2>
        <p className="text-black mb-8 max-w-lg text-sm text-center md:text-left">
          Lörem ipsum koda astrobelt: sutaveligen. Rododd bänëra villga. Pregigt
          primasof dede facebooka: förutom tivialgt. Fejkade
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
          {AREA_DATA.map((area, idx) => (
            <AreaCard key={idx} name={area} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Area;

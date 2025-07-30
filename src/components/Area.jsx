import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AREA_DATA } from "../utils/helper";

const AreaCard = ({ name }) => (
  <div className="flex items-center gap-2 p-5 bg-[#ffffff] shadow-lg rounded-xl text-sm font-semibold text-[#000000]">
    <FaMapMarkerAlt className="text-[#ffffff] bg-[#FF0000] rounded-3xl w-7 h-7" />
    <span>{name}</span>
  </div>
);
function Area() {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-20 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-5xl font-semibold text-[#000000] mb-2 w-[450px]">
          We Provide Services In These Areas
        </h2>
        <p className="text-[#000000] mb-8 mt-5 max-w-lg text-sm">
          Lörem ipsum koda astrobelt: sutaveligen. Rododd bänëra villga. Pregigt
          primasof dede facebooka: förutom tivialgt. Fejkade
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {AREA_DATA.map((area, idx) => (
            <AreaCard key={idx} name={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Area;

import React from "react";
import ServiceCard from "./ServiceCard";
import { SERVICES_DATA } from "../utils/helper";

export default function Services() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
        What We Do?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

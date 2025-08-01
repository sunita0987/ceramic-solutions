import React from "react";
function ServiceCard({ title, image, description }) {
  return (
    <div className="bg-[#ffffff] rounded-2xl border-gray-300 border-1 w-80 shadow-md hover:border-none overflow-hidden hover:shadow-xl transition duration-300">
      <div className="bg-[#ffffff] flex justify-center items-center h-50 mt-5">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold  text-[#000000] mb-2 ml-5">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 ml-5">{description}</p>
        <button className="text-[#FF0000] font-semibold hover:underline mr-40 cursor-pointer">
          Learn more →
        </button>
      </div>
    </div>
  );
}
export default ServiceCard;

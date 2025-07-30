import React from "react";
import { FaStar, FaThumbsUp, FaPhoneAlt } from "react-icons/fa";
import roomImage from "../assets/images/chosse.png";

const Choose = () => {
  return (
    <section className="bg-[#FFEBEB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-[#000000] mb-6 sm:mb-8 max-w-md">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
            primasofi dede facebooka: förutom tivaligt.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#B400011A] p-3 rounded-md shadow-sm text-[#FF0000]">
                <FaStar size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-[#010101]">
                  High Quality Materials
                </h4>
                <p className="text-sm text-[#000000] mt-2 max-w-[300px]">
                  Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                  abgelenkt wird.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#B400011A] p-3 rounded-md shadow-sm text-[#FF0000]">
                <FaThumbsUp size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-[#010101]">
                  Durability with Warranty
                </h4>
                <p className="text-sm text-[#000000] mt-2 max-w-[300px]">
                  Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                  abgelenkt wird.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#B400011A] p-3 rounded-md shadow-sm text-[#FF0000]">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-[#010101]">24/7 Support</h4>
                <p className="text-sm text-[#000000] mt-2 max-w-[300px]">
                  Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                  abgelenkt wird.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-8 bg-[#FF0000] hover:bg-red-400 cursor-pointer text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Get A Quote
          </button>
        </div>
        <div className="relative w-full flex justify-center mt-10 md:mt-0">
          <div className="absolute -bottom-6 -left-6 w-70 h-80 bg-[#FF0000] rounded-xl hidden md:block z-0"></div>
          <img
            src={roomImage}
            alt="Room"
            className="relative z-10 rounded-xl shadow-lg w-100 max-w-lg sm:max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;

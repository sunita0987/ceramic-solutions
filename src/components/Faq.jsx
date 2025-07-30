import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FAQ_DATA } from "../utils/helper";
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-5xl sm:text-5xl font-semibold text-[#000000] text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-[#010101] mb-10 text-sm w-[450px] ml-30">
        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
        primasofi dede facebooka: förutom tivaligt. Fejkade
      </p>

      <div className="space-y-4">
        {FAQ_DATA.map((question, index) => (
          <div
            key={index}
            className="bg-[#ffffff] shadow-xl rounded-xl transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left cursor-pointer"
            >
              <span className="text-[#000000] font-regular text-sm">
                {question}
              </span>
              <span className="text-[#ffffff] bg-[#FF0000] rounded w-5 h-5">
                {openIndex === index ? (
                  <FaChevronUp size={15} />
                ) : (
                  <FaChevronDown size={15} />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-[#000000]">
                Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
                Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Faq;

import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  // FaTwitter,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import footer from "../assets/images/footerlogo.png";

function Footer() {
  return (
    <footer className="bg-[#ffffff] py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
        <div className="space-y-4">
          <img src={footer} alt="Logo" className="w-32" />
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#FF0000]" />
            <a href="mailto:Help@Dealzip.Com" className="hover:underline">
              Help@Dealzip.Com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#FF0000]" />
            <a href="tel:+123445667889" className="hover:underline">
              +1 234 456 678 89
            </a>
          </div>
          <div className="flex text-sm space-x-2 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] bg-[#FF0000] p-2 rounded-full hover:bg-[#FF0000] "
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] bg-[#FF0000] p-2 rounded-full hover:bg-[#FF0000] "
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] bg-[#FF0000] p-2 rounded-full hover:bg-[#FF0000] "
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] bg-[#FF0000] p-2 rounded-full hover:bg-[#FF0000] "
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#1B2228] mb-4">Links</h4>
          <ul className="space-y-3 text-[#1B2228]">
            {["Home", "About Us", "Services", "Showcase"].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#1B222B] mb-4">Legal</h4>
          <ul className="space-y-3 text-[#1B2228]">
            {["Terms Of Use", "Privacy Policy", "Cookie Policy"].map(
              (item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#1B222B] mb-4">Product</h4>
          <ul className="space-y-3 text-[#1B2228]">
            {["Take Tour", "Live Chat", "Reviews"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#1B222B] mb-4">Newsletter</h4>
          <p className="text-sm mb-2">Stay Up To Date</p>
          <div className="flex flex-col sm:flex-row items-stretch rounded-full border border-[#81848A] shadow-sm">
            <input
              type="email"
              placeholder="Your email"
              className="px-1 py-3 w-full text-sm text-[#1B2228] rounded-full sm:rounded-none sm:rounded-l-full outline-none"
            />
            <button className="bg-[#FF0000] text-white px-6 py-2 rounded-3xl sm:rounded-l-3xl sm:rounded-r-3xl mt-2 sm:mt-0 sm:ml-[-1px] transition-all cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-[#1B2228] mt-8 border-t border-[#81848A] pt-4">
        © 2024 CeramicSolutions.Com All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

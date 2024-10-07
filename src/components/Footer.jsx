import {
  ServicesLinks,
  TechnologiesLinks,
  SolutionsLinks,
  ResourcesLinks,
  CompanyLinks,
} from "../constants";
import { FaLinkedinIn, FaYoutube, FaEnvelope, FaMediumM } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";
// import img from "../assets/dataxis_logo_left_orange.svg";
import img from "../assets/d_logo_orange.svg";

const Footer = () => {
  return (
    <div className="bg-[#121212] py-6">
      <div className="container mx-auto px-4">
        {/* Grid for main footer content */}
        <div className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white mt-12 border-white pb-16">
          {/* Company Info Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-row gap-1 items-center">
              <img src={img} alt="Footer Logo" className="h-8" />
              <h1 className="text-4xl font-bold">Dataxis Labs LLP</h1>
            </div>
            <div className="mt-2 flex items-start gap-2 justify-start py-2">
              <p className="max-w-md">
                 SB-184 A, Bapu Nagar <br />
                Jawahar Lal Nehru Marg <br />
                Jaipur 302015, India
              </p>
            </div>

            <div className="mt-4 flex items-center gap-4">
                 <FaEnvelope className="text-2xl text-[#FF6C2F]" />
              info@dataxis.io
            </div>
            <div className="mt-4 flex items-center gap-4">
                 <GrLike className="text-2xl text-[#FF6C2F]" />
              <div className="end-1 mb-4 w-full lg:w-auto flex">
                <div className="border-[#343741] border-2  cursor-pointer h-8 w-8  flex items-center justify-center  text-white hover:text-[#FF6C2F] hover:border-[#FF6C2F] transition-all">
                  <FaLinkedinIn size={12} />
                </div>
                <div className="border-[#343741] border-2 cursor-pointer h-8 w-8 ml-2 flex items-center justify-center  text-white hover:text-[#FF6C2F] hover:border-[#FF6C2F] transition-all">
                  <FaMediumM size={12} />
                </div>
                <div className="border-[#343741] border-2 cursor-pointer h-8 w-8 ml-2 flex items-center justify-center  text-white hover:text-[#FF6C2F] hover:border-[#FF6C2F] transition-all">
                  <FaYoutube size={12} />
                </div>
              </div>
            </div>
            {/* Footer End */}
            <div className="footer-end flex flex-col flex-wrap justify-between text-white mt-10 mb-8">
              <div className="end-1 mt-5 gap-3 mb-4 w-full lg:w-auto">
                <a
                  href="#"
                  className="text-neutral-300 mr-3 hover:text-[#FF6C2F]  hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-neutral-300 mr-3 hover:text-[#FF6C2F]  hover:underline"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-neutral-300 mr-3 hover:text-[#FF6C2F]  hover:underline"
                >
                  Cookie Policy
                </a>
              </div>
              <div className="end-1 mb-4 w-full lg:w-auto">
                <p>Copyright © 2024 Dataxis Labs. All Rights Reserved.</p>
              </div>
            </div>
          </div>

          {/* Services, Technologies, Solutions, Resources, and Company Section */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Services Section */}
            <div className="sec-1">
              <h3 className="font-semibold">Services</h3>
              <ul className="mt-4">
                {ServicesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 mt-5 hover:text-[#FF6C2F]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Section */}
            <div className="sec-1">
              <h3 className="font-semibold">Technologies</h3>
              <ul className="mt-4">
                {TechnologiesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-[#FF6C2F]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Section */}
            <div className="sec-1">
              <h3 className="font-semibold">Solutions</h3>
              <ul className="mt-4">
                {SolutionsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-[#FF6C2F]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div className="sec-1">
              <h3 className="font-semibold">Resources</h3>
              <ul className="mt-4">
                {ResourcesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-[#FF6C2F]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div className="sec-1">
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4">
                {CompanyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-[#FF6C2F]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import {
  ServicesLinks,
  TechnologiesLinks,
  SolutionsLinks,
  ResourcesLinks,
  CompanyLinks,
} from "../constants";
import {
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaMediumM,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import img from "../assets/dataxis_logo_left_orange.svg";

const Footer = () => {
  return (
    <div className="bg-[#000] py-6">
      <div className="container mx-auto">
        <div className="footer flex flex-wrap justify-between text-white mt-12 border-b-2 border-white pb-16">
          <div className="sec-1 mb-8 w-full md:w-2/5 ">
            <img src={img} alt="Footer Logo" className="max-w-xs" />
            {/* <h3 className="font-semibold">Contact Us :</h3> */}
            <div className="mt-4 flex items-center gap-2 justify-start py-4 ">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 0, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="relative flex justify-center items-center"
              >
                {/* Location Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <IoLocationSharp className="text-3xl w text-[#FF6C2F]"  />
                </motion.div>

                {/* Ping Effect */}
              </motion.div>
              <p className="max max-w-md">
                Dataxis Labs <br /> SB-184 A, Bapu Nagar <br />
                Jawahar Lal Nehru Marg <br />
                Jaipur 302015, India
              </p>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 0, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="relative flex justify-center items-center"
              >
                {/* Location Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <FaEnvelope className="text-3xl w text-[#FF6C2F]" />{" "}
                </motion.div>

                {/* Ping Effect */}
              </motion.div>
              info@dataxis.io
            </div>
          </div>
          <div className="sec-1 mb-8 w-full md:w-1/5">
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
          <div className="sec-1 mb-8 w-full md:w-1/5">
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
          <div className="sec-1 mb-8 w-full md:w-1/5">
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
          <div className="sec-1 mb-8 w-full md:w-1/5">
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
          <div className="sec-1 mb-8 w-full md:w-1/5">
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

        <div className="footer-end flex flex-wrap justify-between text-white mt-10 mb-8">
          <div className="end-1 mb-4 w-full md:w-auto">
            <p>Copyright © 2024 Dataaxis Labs</p>
          </div>
          <div className="end-1 mb-4 w-full md:w-auto flex">
            <div className="fb border border-white cursor-pointer h-8 w-8 ml-2 flex items-center justify-center rounded-full text-white">
              <FaLinkedinIn size={12} />
            </div>
            <div className="fb border border-white cursor-pointer h-8 w-8 ml-2 flex items-center justify-center rounded-full text-white">
              <FaMediumM />
            </div>
            <div className="fb border border-white cursor-pointer h-8 w-8 ml-2 flex items-center justify-center rounded-full text-white">
              <FaYoutube size={12} />
            </div>
          </div>
          <div className="end-1 gap-3 mb-4 w-full md:w-auto">
            <a href="#" className="text-neutral-300 mt-5 mr-3 hover:text-[#FF6C2F]">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-300 mr-3 mt-5 hover:text-[#FF6C2F]">
              Terms & Conditions
            </a>
            <a href="#" className="text-neutral-300 mr-3 mt-5 hover:text-[#FF6C2F]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

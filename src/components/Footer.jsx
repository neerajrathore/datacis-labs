import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaLocationArrow,
  FaYoutube,
  FaCamera,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#000] py-6">
      <div className="container mx-auto">
        <div className="footer flex flex-wrap justify-between text-white mt-12 border-b-2 border-white pb-16">
          <div className="sec-1 mb-8 w-full md:w-2/5">
            <h3 className="text-3xl font-bold">Dataxi/s Labs</h3>
            {/* <img src="images/footer-logo.jpg" alt="Footer Logo" className="mb-5" /> */}
            <h3 className="font-semibold">Contact Us :</h3>

            <p className="mt-4 flex items-center gap-2">
              <FaEnvelope className="text-2xl" />{" "}
              enterprisesales@celebaltech.com
            </p>
            <p className="mt-4 flex items-center gap-2 justify-start ">
              <FaLocationArrow className="text-2xl w" />
              AM Equipment & Services Private Limited SB-184 A, Bapu Nagar
              Jawahar Lal Nehru Marg Jaipur 302015, Rajasthan
            </p>
          </div>
          <div className="sec-1 mb-8 w-full md:w-1/5">
            <h3 className="font-semibold">Technical Services</h3>

            <ul className="mt-4">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 mt-5 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sec-1 mb-8 w-full md:w-1/5">
            <h3 className="font-semibold">Technologies</h3>
            <ul className="mt-4">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sec-1 mb-8 w-full md:w-1/5">
            <h3 className="font-semibold">Solutions</h3>
            <ul className="mt-4">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-end flex flex-wrap justify-between text-white mt-10 mb-8">
          <div className="end-1 mb-4 w-full md:w-auto">
            <p>Copyright © 2024 Celebal Technologies</p>
          </div>
          <div className="end-1 mb-4 w-full md:w-auto flex">
            <div className="fb border border-white cursor-pointer h-8 w-8 ml-2 flex items-center justify-center rounded-full text-white">
              <FaFacebookF size={12} />
            </div>
            <div className="fb border border-white cursor-pointer h-8 w-8 ml-2 flex items-center justify-center rounded-full text-white">
              <FaTwitter size={12} />
            </div>
            <div className="fb border border-white cursor-pointer h-8 w-8 ml-2 flex items-center justify-center rounded-full text-white">
              <FaLinkedinIn size={12} />
            </div>
            <div className="fb border border-white cursor-pointer h-8 w-8 ml-2 flex items-center justify-center rounded-full text-white">
              <FaYoutube size={12} />
            </div>
            <div className="fb border border-white cursor-pointer h-8 w-8 ml-2 flex items-center justify-center rounded-full text-white">
              <FaCamera size={12} />
            </div>
          </div>
          <div className="end-1 mb-4 w-full md:w-auto">
            <a href="#" className="text-neutral-300 mt-5 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

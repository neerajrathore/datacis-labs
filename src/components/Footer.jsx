import React from "react";
// import { Button } from "./Button"; // Ensure Button component exists
import {
  Mail,
  Phone,
  MessageSquare,
  Twitter,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react"; // Ensure lucide-react is installed
import { CompanyLinks, ResourcesLinks, SolutionsLinks } from "../constants";
import img from "../assets/d_logo_orange.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-br from-[#121212] to-[#121212] text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">
              Explore the VAST Possibilities
            </h2>
            <div className="bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:border-2 hover:border-white px-2 py-1 rounded-full  transition-all cursor-pointer shadow-lg">
              Talk to a Solution Engineer
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Mail className="mr-2" size={18} /> Email Us
              </h4>
              <p className="text-sm text-gray-300">
                Contact hello@vastdata.com for a 24-hour response.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Phone className="mr-2" size={18} /> Call Us
              </h4>
              <p className="text-sm text-gray-300">
                Speak with a team member today at 212-658-1753.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <MessageSquare className="mr-2" size={18} /> Contact Us
              </h4>
              <p className="text-sm text-gray-300">
                Get in touch with us, and we'll respond promptly!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-4">Explore</h3>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-300">
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
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
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
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
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
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex items-center mb-4 md:mb-0 gap-2">
              <img src={img} alt="Footer Logo" className="h-8" />
              <h1 className="text-lg font-bold">Dataxis Labs LLP</h1>
            </div>
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © VAST 2024. All rights reserved
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF6C2F] transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF6C2F] transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF6C2F] transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF6C2F] transition-all">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              End User Agreement
            </a>
            <a href="#" className="hover:text-white">
              Terms of Services
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

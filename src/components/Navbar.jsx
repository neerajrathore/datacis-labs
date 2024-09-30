import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import logos from "../assets/dataxis_logo_left_orange.svg";

import { FaFacebook, FaInstagram, FaLinkedin, FaMediumM, FaTwitter, FaYoutube } from "react-icons/fa";

const navItemss = [
  { href: "#", label: "Home" },
  {
    href: "#", label: "Services", submenu: [
      { href: "#", label: "Data Analytics" },
      { href: "#", label: "Data Engineering" },
      { href: "#", label: "Data Science" }
    ]
  },
  {
    href: "#", label: "Technologies", submenu: [
      { href: "#", label: "Open Lakehouse" },
      { href: "#", label: "Event Streaming" },
      { href: "#", label: "Unified Analytics Engine" },
      { href: "#", label: "Generative AI, Search" },
    ]
  },
  {
    href: "#", label: "Solutions", submenu: [
      { href: "#", label: "Data Lakehouse Platform" },
      { href: "#", label: "Multi-Modal Database" },
      { href: "#", label: "Search AI Platform" },
      ]
  }
  ,
  {
    href: "#", label: "Resources", submenu: [
      { href: "#", label: "Blogs" },
      { href: "#", label: "Use Cases" },
      { href: "#", label: "White Papers" },
      ]
  }
  ,
  {
    href: "#", label: "Company", submenu: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Contact Us" },
      ]
  }

];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenuIndex(activeSubmenuIndex === index ? null : index);
  };

  return (
    <>
      {/* Pre-Navbar with Social Icons */}
      <div className="bg-[#000] py-4 text-white">
        <div className="container mx-auto flex justify-end items-center">
          <div className="flex space-x-6">
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            
            <a href="https://Medium.com" aria-label="Medium"><FaMediumM /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 py-3 bg-white text-black backdrop-blur-lg border-b border-white-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-" src={logos} alt="Logo" />
              {/* <span className="text-xl tracking-tight">VirtualR</span> */}
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItemss.map((item, index) => (
                <li key={index} className="relative group">
                  <a className="transition-all py-2" href={item.href}>
                    {item.label}
                  </a>
                  {/* Submenu for desktop */}
                  {item.submenu && (
                    <ul className={`absolute left-0 mt-2 w-48 bg-white overflow-hidden shadow-lg border rounded-lg hidden group-hover:block`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="hover:bg-gray-100">
                          <a className="block px-4 py-2 hover:text-[#FF6C2F] rounded-lg" href={subItem.href}>
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Button */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 text-white bg-[#FF6C2F] hover:shadow-xl rounded-full hover:text-gray-100 transition-all">
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-100 w-full p-8 flex flex-col items-center lg:hidden">
              <ul className="flex flex-col space-y-4 w-full">
                {navItemss.map((item, index) => (
                  <li key={index}>
                    <div
                      onClick={() => toggleSubmenu(index)} // Toggle submenu on click
                      className="flex justify-between items-center cursor-pointer text-lg font-medium hover:text-[#FF6C2F]"
                    >
                      <span>{item.label}</span>
                      {item.submenu && (
                        <span className="text-sm">
                          {activeSubmenuIndex === index ? "-" : "+"} {/* Indicator for open/close */}
                        </span>
                      )}
                    </div>
                    {/* Submenu for mobile view */}
                    {item.submenu && activeSubmenuIndex === index && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.href} className="text-sm hover:text-[#FF6C2F]">{subItem.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-8">
                <a
                  href="#"
                  className="py-2 px-3 rounded-md text-white bg-[#D32F2E] hover:bg-[#efefef] hover:text-gray-100 transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const navItemss = [
  { href: "#", label: "Home" },
  {
    href: "#", label: "Services", submenu: [
      { href: "#", label: "Web Development" },
      { href: "#", label: "Mobile App Development" },
      { href: "#", label: "UI/UX Design" }
    ]
  },
  { href: "#", label: "About" },
  {
    href: "#", label: "Products", submenu: [
      { href: "#", label: "SaaS Platform" },
      { href: "#", label: "AI Solutions" }
    ]
  },
  { href: "#", label: "Contact" }
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
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 py-3 bg-white text-black backdrop-blur-lg border-b border-white-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">VirtualR</span>
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
                          <a className="block px-4 py-2 hover:text-[#D32F2E] rounded-lg" href={subItem.href}>
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
              <a href="#" className="py-2 px-3 text-white bg-[#D32F2E] hover:shadow-xl rounded-full hover:text-gray-100 transition-all">
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
                      className="flex justify-between items-center cursor-pointer text-lg font-medium hover:text-[#D32F2E]"
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
                            <a href={subItem.href} className="text-sm hover:text-[#D32F2E]">{subItem.label}</a>
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

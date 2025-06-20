import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu5Fill, RiCloseLargeFill } from "react-icons/ri";
import {
  FaHome,
  FaImages,
  FaPhone,
  FaCalendarCheck,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleItemClick = (path) => {
    navigate(path);
    setNav(false);
  };

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  const desktopMenuItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Book Now", path: "/bookNow" },
  ];

  const mobileMenuItems = [
    { name: "Home", path: "/", icon: <FaHome className="mr-3" /> },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: <FaImages className="mr-3" />,
    },
    { name: "Contact", path: "/contact", icon: <FaPhone className="mr-3" /> },
    {
      name: "Book Now",
      path: "/bookNow",
      icon: <FaCalendarCheck className="mr-3" />,
    },
  ];

  return (
    <div className="flex justify-between items-center max-w-[1200px] px-4 mx-auto h-16 text-black relative z-50">
      <Link to="/" className="font-bold text-2xl font-header font-Bonheur">
        IllusionzbyOJAy
      </Link>

      <div className="flex items-center space-x-4 md:space-x-10 font-header">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          {desktopMenuItems.map((item, index) => (
            <li
              key={index}
              className="p-2 relative group cursor-pointer list-none"
              onClick={() => handleItemClick(item.path)}
            >
              <span>{item.name}</span>
              <span className="absolute left-0 w-0 h-1 bg-[#0c0c0c] transition-all group-hover:w-full bottom-[-2px]" />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className="block md:hidden ml-auto">
          <button className="text-lg font-bold">
            {nav ? <RiCloseLargeFill /> : <RiMenu5Fill />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[70%] h-full bg-[#0e0d0d] text-white ease-in-out duration-500 z-50 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-2xl font-bold p-6 font-Bonheur">
              IllusionzbyOJAy
            </h1>
            <ul className="p-4">
              {mobileMenuItems.map((item, index) => (
                <li
                  key={index}
                  className="p-4 border-b border-white flex items-center cursor-pointer"
                  onClick={() => handleItemClick(item.path)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons at Bottom */}
          <div className="flex justify-center items-center gap-6 mt-auto pb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Dark overlay when menu is open */}
      {nav && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" />}
    </div>
  );
};

export default Navbar;

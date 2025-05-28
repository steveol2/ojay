import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleItemClick = (path) => {
    navigate(path);
    setNav(false);
  };

  const desktopMenuItems = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/ourStory" },
  ];

  const donateButtonPath = "/donate";

  const mobileMenuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Our Story",
      path: "/ourStory",
    },
    {
      name: "Donate",
      path: donateButtonPath,
    },
  ];

  return (
    <div className="flex justify-between items-center max-w-[1200px] px-4 mx-auto h-16 text-black">
      <Link to="/" className="font-bold text-2xl font-header">
        Marley Foundation
      </Link>
      <div className="flex items-center space-x-4 md:space-x-10 font-header">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          {desktopMenuItems.map((item, index) => (
            <li
              key={index}
              className="p-2 relative group cursor-pointer list-none"
              onClick={() => handleItemClick(item.path)}
            >
              <span>{item.name}</span>
              <span className="absolute left-0 w-0 h-1 bg-[#FAB12F] transition-all group-hover:w-full bottom-[-2px]"></span>
            </li>
          ))}
          {/* Unique Donate Button */}
          <button
            className="px-6 py-2 bg-gradient-to-r from-[#FF7E5F] to-[#FAB12F] text-black rounded-full shadow-lg hover:shadow-xl font-bold hover:scale-105 transition-transform"
            onClick={() => handleItemClick(donateButtonPath)}
          >
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className="block md:hidden ml-auto">
          <button className="text-lg font-bold">
            {nav ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[70%] h-full bg-[#FA812F] text-white ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-bold p-6">Marley Foundation</h1>
        <ul className="p-4">
          {mobileMenuItems.map((item, index) => (
            <li
              key={index}
              className={`p-4 border-b border-white flex items-center ${
                item.name === "Donate"
                  ? "bg-gradient-to-r from-[#FF7E5F] to-[#FAB12F] text-white rounded-lg shadow-md font-bold"
                  : ""
              }`}
              onClick={() => handleItemClick(item.path)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Portfolio } from "./Portfolio";

const backgroundImages = [
  "/ojayphoto1.jpg",
  "/ojayphoto4.jpg",
  "/ojayphoto5.jpg",
];

export const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = (multiplier) => ({
    transform: `translateY(${offsetY * multiplier}px) scale(${
      1 + offsetY * 0.0001
    })`,
    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), scale 0.5s ease",
    willChange: "transform, scale",
  });

  // Animation variants for left-to-right button movement
  const buttonVariants = {
    initial: { x: 0 },
    hover: {
      x: 20, // Move 20px to the right on hover
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="h-screen bg-no-repeat bg-cover bg-center flex items-center justify-start transition-all duration-1000 ease-in-out grayscale"
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
        }}
      >
        <div className="text-white px-6 sm:px-12 lg:px-20 pt-24 sm:pt-32 max-w-2xl">
          <h1
            style={parallaxStyle(-0.3)}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-['Playfair_Display'] tracking-tight bg-gradient-to-b from-black/50 to-gray-900/50 backdrop-blur-md px-6 py-4 sm:px-8 sm:py-6 rounded-2xl shadow-2xl border border-white/20 opacity-90 transition-all duration-1000 hover:opacity-100"
          >
            Illusionz by OJAy
          </h1>

          <div
            style={parallaxStyle(-0.15)}
            className="mt-8 flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-6"
          >
            <motion.button
              onClick={() => navigate("/bookNow")}
              className="relative bg-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg text-base sm:text-lg font-['Playfair_Display'] font-medium hover:bg-purple-800 transition-colors"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              Book Now
            </motion.button>
            <motion.button
              onClick={() => navigate("/portfolio")}
              className="relative bg-white/90 text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg text-base sm:text-lg font-['Playfair_Display'] font-medium hover:bg-gray-200 transition-colors"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              Portfolio
            </motion.button>
          </div>
        </div>
      </div>

      <Portfolio />
    </div>
  );
};

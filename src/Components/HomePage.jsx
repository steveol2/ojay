import React, { useState, useEffect } from "react";
import { Portfolio } from "./Portfolio";

const backgroundImages = [
  "/ojayphoto1.jpg",
  "/ojayphoto4.jpg",
  "/ojayphoto5.jpg",
];

export const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // changes every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        className="h-screen bg-no-repeat bg-cover bg-center text-white flex items-center justify-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
        }}
      >
        <h1 className="text-2xl font-bold bg-black/40 px-4 py-2 rounded-lg shadow-lg">
          Your human perception is often not reality, it’s just you seeing the
          world through a lens.
        </h1>
      </div>
      <Portfolio />
    </div>
  );
};

// // src/components/PortfolioParallax.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const portfolioItems = [
  { title: "Urban Shadows", desc: "Minimalism in movement and city life" },
  { title: "Monochrome Portraits", desc: "Human emotion in high contrast" },
  { title: "Architectural Angles", desc: "Lines, symmetry, and light" },
  { title: "Natural Light Play", desc: "Textures and shadows in nature" },
];

export const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('/ojayphoto5.jpg')", // use your image
        }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Foreground content */}
      <motion.div
        style={{ y }}
        className="relative z-20 max-w-5xl mx-auto px-6 py-28 text-white"
      >
        <h2 className="text-4xl font-semibold mb-12 text-center font-serif">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 p-6 rounded-lg backdrop-blur-sm transition hover:scale-105"
            >
              <h3 className="text-2xl font-bold font-serif mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

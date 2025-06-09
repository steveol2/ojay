// src/components/Portfolio.jsx
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
    offset: ["start end", "end start"], // smoother entrance and exit
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // smooth parallax motion

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0 transition-all duration-1000"
        style={{
          backgroundImage: "url('/ojayphoto5.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-1000" />

      {/* Content */}
      <motion.div
        style={{ y }}
        className="relative z-20 w-full max-w-5xl px-6 py-24 md:py-32 text-white flex flex-col items-center text-center transition-all duration-1000"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-12 font-serif"
        >
          My Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 p-6 rounded-lg backdrop-blur-sm transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold font-serif mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
